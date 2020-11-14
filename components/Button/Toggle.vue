<template>
  <div class="ToggleButton">
    <label class="ToggleButton-switch"
      ><input type="checkbox" v-model="checked" />
      <div class="u-no-select">{{ checked }}</div>
    </label>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checked: false,
    }
  },
  methods: {
    loggin(_e) {
      console.log(_e)
    },
  },
}
</script>
<style lang="scss">
.ToggleButton {
  height: 40px;
  margin: auto;
  text-align: center;
  cursor: pointer;

  &-switch {
    display: inline-block;
    font-size: 20px; /* 1 */
    height: 1em;
    width: 2em;
    background: #bdb9a6;
    border-radius: 1em;

    input {
      position: absolute;
      opacity: 0;

      &:checked + div {
        -webkit-transform: translate3d(100%, 0, 0);
        -moz-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }
    }

    div {
      height: 1em;
      width: 1em;
      border-radius: 1em;
      background: #fff;
      box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
      -webkit-transition: all 300ms;
      -moz-transition: all 300ms;
      transition: all 300ms;
    }
  }
}
</style>
