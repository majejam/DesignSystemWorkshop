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
  /* height: 50px; //a variabler */
  padding: $button-main-vertical-padding $button-main-horizontal-padding;
  color: inherit;
  text-decoration: none;
  border-radius: $button-main-radius; //a variabler
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
    font-size: 0.875rem; //a variabler
    line-height: 1.6; //a variabler
    font-family: 'Arial'; //a variabler
  }
}
</style>
