<template>
  <div id="app">
    <div class="container">
      <Header/>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './components/layout/Header.vue'

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>

<style>
#app {
  height: 100vh;
}
html, body{
  padding: 0;
  margin: 0;
  height: 100%;
}
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
</style>
