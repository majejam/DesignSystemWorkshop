<template>
  <transition name="Modal__fade">
    <div v-if="visible" :class="[{ 'Modal__fullscreen u-fullscreen': fullscreen }, 'Modal']">
      <div v-if="fullscreen" class="Modal__backdrop u-fullscreen"></div>
      <div class="Modal__content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    fullscreen: {
      required: false,
      type: Boolean,
      default: false,
    },
    visible: {
      required: true,
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss">
.Modal {
  display: inline-flex;
  align-items: center;
  color: inherit;
  text-decoration: none;
  border-radius: 20px; //a variabler
  transition: all 0.3s ease-in-out;
  will-change: background-color;

  &__fullscreen {
    justify-content: center;
  }

  &__backdrop {
    background-color: grey;
    z-index: zindex(backdrop);
  }

  &__content {
    z-index: zindex(modal);
  }

  &__fade-enter-active,
  &__fade-leave-active {
    transition: opacity 0.5s;
  }
  &__fade-enter,
  &__fade-leave-to {
    opacity: 0;
  }
}
</style>
