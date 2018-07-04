<template>
	<a class="button" :class="classes" :disabled="disabled"><slot /></a>
</template>

<script lang="ts">
import { default as Vue } from 'vue';

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

export default Vue.extend({
  name: 'iButton',
  props: {
    status: String,
    loading: Boolean,
    disabled: Boolean,
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


