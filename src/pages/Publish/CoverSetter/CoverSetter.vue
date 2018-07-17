<template>
  <div class="cover-setter">
    <h4>设置封面</h4>
    <ImgInputer 
      @onChange="changeCover"
      :img-src="cover" 
      v-model="file" 
      theme="light" 
      size="normal" 
    />
    <Cropper 
      ref="cropper" 
      @getCover="setCover"
      @cancel="resetStatus"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { default as ImgInputer } from 'vue-img-inputer';
import { Cropper } from '@/components/Cropper';
import { uploadImg } from '@/api';
import 'vue-img-inputer/dist/index.css';

export default Vue.extend({
  components: {
    ImgInputer,
    Cropper,
  },
  data() {
    return {
      file: null as File | null,
      cover: '',
    };
  },
  watch: {
    cover(data) {
      this.$emit('input', data);
    },
  },
  methods: {
    resetStatus() {
      this.file = null;
      this.cover = '';
    },
    async changeCover(file: File, fileName: string) {
      this.file = file;
      const src = await uploadImg(file);
      // @ts-ignore
      this.$refs.cropper.editCover(src, fileName);
    },

    setCover(cover: string) {
      this.cover = cover;
    },
  },
});
</script>

<style lang="scss" scoped>
.cover-setter {
  .img-inputer {
    height: 84px;
  }
}
</style>


