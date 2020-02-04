<template>
  <div id="app">
    <uc-stock-price></uc-stock-price>
    <uc-stock-finder v-if=showStockFinder></uc-stock-finder>
    <button @click="showStockFinder = true">Load Finder</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data() {
      return {
          showStockFinder: false
      }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
