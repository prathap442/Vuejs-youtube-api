<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from './components/SearchBar.vue';
// HelloWorld: HelloWorld
// It is not like importing the components here And exporting will also play key role to show on the Vue page
export default {
  name: 'App',
  components: {
    SearchBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
