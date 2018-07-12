<template>
	<a class="button" :class="classes" @click="handleClick" :disabled="disabled"><slot /></a>
</template>

<script lang="ts">
import { default as Vue } from 'vue';
import { EventEmitter } from 'events';

const TYPE: {
  [index: string]: string;
} = {
  primary: 'is-primary',
  success: 'is-success',
  warning: 'is-warning',
  danger: 'is-danger',
  white: 'is-white',
  light: 'is-light',
  text: 'is-text',
};

export default Vue.extend<
  {},
  {},
  {
    classes: () => {
      [index: string]: boolean;
    };
  },
  {
    status: string;
    loading?: boolean;
    disabled?: boolean;
  }
>({
  name: 'iButton',
  props: {
    status: String,
    loading: Boolean,
    disabled: Boolean,
  },
  methods: {
    handleClick(e: Event) {
      this.$emit('click', e);
    },
  },
  computed: {
    classes(): any {
      return {
        [`${TYPE[this.status]}`]: true,
        'is-loading': this.loading,
      };
    },
  },
});
</script>


