<template>
  <Modal :active.sync="isModalActive" :width="640" scroll="keep">
    <template>
      <div class="cropper-wrapper">
        <h4 class="title">设置封面</h4>
        <div class="cropper-content">
          <VueCropper 
            ref="cropper"
            :img="imageSource"
            :autoCrop="true"
            :autoCropWidth="600"
            :autoCropHeight="197"
            :fixedBox="true"
          />
        </div>
        <footer class="card-footer">
          <Button @click="setCover" class="cropper-btn" status="primary">确认</Button>
          <Button class="cropper-btn" status="text" @click="closeModal">取消</Button>
        </footer>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts">
/// <reference path="./vue-cropper.d.ts">
import Vue from 'vue';
import { default as VueCropper } from 'vue-cropper';
import { isBlob, isString, isFile } from '@/util';
import { uploadImg } from '@/api';

export default Vue.extend({
  data() {
    return {
      isModalActive: false,
      loading: false,
      filename: '',
      img: '',
    };
  },
  computed: {
    imageSource(): string | Blob {
      const img = this.img;

      return img ? img : '';
    },
  },
  components: {
    VueCropper,
  },
  methods: {
    cancel() {
      this.$emit('cancel');
      this.closeModal();
    },

    closeModal() {
        this.filename = '';
        this.img = '';
        this.loading = false;
        this.isModalActive = false;
    },

    editCover(img: string, fileName?: string) {
      if (isString(img)) {
        this.img = formatLink(img);
        this.filename = fileName || '';
        this.isModalActive = true;
      }
    },

    async setCover() {
      const cropper = this.$refs.cropper as any;
      cropper.getCropBlob(async (data: Blob) => {
        const { type } =  data;
        const trailling = type.split('/')[1];

        // const imageFile: File = blobToFile(data, `${new Date().getTime()}${trailling}`);
        const imageFile: File = new File([data], `${this.filename}${new Date().getTime()}` 
        || `${new Date().getTime()}${trailling}`);

        const src = await uploadImg(imageFile);
        cropper.stopCrop();

        this.closeModal();

        // @ts-ignore
        this.$emit('getCover', formatLink(src));
      });
    },
  },
});

function formatLink(link: string ) {
  const reg = /^\/\//;
  if (!reg.test(link)) {
    link = `//${link}`;
  }
  return link;
}
</script>

<style lang="scss" scoped>
.cropper-wrapper {
  width: 640px;
  background-color: #fff;

  h4 {
    margin-bottom: 0;
    line-height: 60px;
    padding-left: 20px;
  }

  .cropper-content {
    width: 630px;
    height: 300px;
    margin: 0 auto;
  }

  .card-footer {
    padding: 20px 10px;

    .cropper-btn {
      margin: 0 10px;
    }
  }
}
</style>

