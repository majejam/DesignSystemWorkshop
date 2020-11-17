<template>
  <div class="ToggleButton">
    <label class="ToggleButton__switch"
      ><input
        type="checkbox"
        :checked="model"
        :value="model"
        @input="updateSelf($event.target.checked)"
        @change="emitChange"
      />
      <div class="u-no-select"></div>
    </label>
  </div>
</template>
<script>
export default {
  model: {
    prop: 'model',
    event: 'input',
  },
  props: {
    model: {
      required: true,
      type: Boolean,
    },
  },
  methods: {
    updateSelf(_e) {
      this.$emit('input', _e)
    },
    emitChange() {
      this.$emit('change')
    },
  },
}
</script>
<style lang="scss">
.ToggleButton {
  height: 40px;
  margin: auto;
  text-align: center;

  &__switch {
    display: inline-block;
    font-size: 20px; /* 1 */
    height: 1em;
    width: 2em;
    background: #bdb9a6;
    border-radius: 1em;
    cursor: pointer;

    input {
      position: absolute;
      opacity: 0;
      cursor: pointer;

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
      cursor: pointer;
      box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
      -webkit-transition: all 300ms;
      -moz-transition: all 300ms;
      transition: all 300ms;
    }
  }
}
</style>
