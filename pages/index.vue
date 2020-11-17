<template>
  <div class="container">
    <div>
      <Toggle v-model="colorMode" @change="darkModeToggle" />
      <TextInput v-model="text" :name="'Text input'" :type="'text'" :label="'Fullname'" />
      <Button :content="'Delete'" danger @click.native="toggle()" />
      <Modal :visible="isShown" fullscreen>
        <span>'slt la team</span>
      </Modal>
      <h1 class="title">{{ colorMode }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colorMode: this.$colorMode.preference == 'dark' ? true : false,
      text: '',
      isShown: false,
    }
  },
  methods: {
    toggle() {
      this.isShown = this.isShown ? false : true
      console.log(this.isShown)
    },
    darkModeToggle() {
      this.colorMode
        ? (this.$colorMode.preference = 'dark')
        : (this.$colorMode.preference = 'light')
    },
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
