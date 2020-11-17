<template>
  <button
    :class="['Button', { 'Button--primary': primary, 'Button--danger': danger }]"
    type="submit"
  >
    <span class="Button__content">{{ content }}</span>
  </button>
</template>
<script>
export default {
  props: {
    content: {
      required: true,
      type: String,
    },
    primary: {
      type: Boolean,
    },
    danger: {
      type: Boolean,
    },
  },
}
</script>
<style lang="scss">
.Button {
  display: inline-flex;
  align-items: center;
  padding: $button-main-vertical-padding $button-main-horizontal-padding;
  color: inherit;
  text-decoration: none;
  border-radius: $button-main-radius;
  transition: all 0.3s ease-in-out;
  will-change: background-color;
  cursor: pointer;

  &--primary {
    color: var(--main-black);
    background-color: var(--main-yellow-dark);
  }

  &--danger {
    color: var(--main-white);
    background-color: var(--main-red);
  }

  &__content {
    color: inherit;
    text-decoration: none;
    font-size: $button-size;
    line-height: $button-line-height;
    font-family: $button-font;
    font-weight: $button-weight;
  }
}
</style>
