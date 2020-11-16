<template>
  <div class="TextInput">
    <input
      :id="name"
      :value="model"
      type="text"
      @input="updateSelf($event.target.value)"
      @change="emitChange"
      class="validate"
    />
    <label :class="[{ active: model }, 'u-no-select']" :for="name">{{ name }}</label>
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

<style scoped lang="scss"></style>
