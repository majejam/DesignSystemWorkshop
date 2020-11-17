<template>
  <div class="TextInput">
    <label :class="[{ active: model }, 'u-no-select']" :for="name">{{ label }}</label>
    <input
      :id="name"
      :value="model"
      :type="type"
      @input="updateSelf($event.target.value)"
      @change="emitChange"
      class="validate"
    />
  </div>
</template>

<script>
export default {
  name: 'TextInput',
  model: {
    prop: 'model',
    event: 'input',
  },
  props: {
    model: {
      required: true,
      type: String,
    },
    name: {
      required: true,
      type: String,
      default: '',
    },
    type: {
      required: true,
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
  },
  methods: {
    updateSelf(model) {
      this.$emit('input', model)
    },
    emitChange() {
      this.$emit('change')
    },
  },
}
</script>

<style scoped lang="scss">
.TextInput {
  display: flex;
  flex-direction: column;
  input {
    background-color: var(--form-background-initial);
    max-width: 310px;
    height: 34px;
    font-family: $input-font;
    font-size: $input-size;
    font-weight: $input-weight;
    line-height: $input-line-height;
    border-radius: $input-radius;
    color: var(--form-text-main);
  }
}
</style>
