<template>
  <button class="Button" type="submit">
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
  },
}
</script>
<style lang="scss">
.Button {
  display: inline-flex;
  align-items: center;
  height: 50px; //a variabler
  padding-left: 50px; //a variabler
  padding-right: 50px; //a variabler
  color: inherit;
  text-decoration: none;
  border-radius: 20px; //a variabler
  transition: all 0.3s ease-in-out;
  will-change: background-color;
  cursor: pointer;

  &__content {
    color: inherit;
    text-decoration: none;
    font-size: 0.875rem; //a variabler
    line-height: 1.6; //a variabler
    font-family: 'Arial'; //a variabler
  }
}
</style>
