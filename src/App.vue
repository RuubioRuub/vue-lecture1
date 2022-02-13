<template>
  <div class="container">
    <StockList />
  </div>
  <router-view></router-view>   <!-- put this where you want to display your views, usually this is App.vue -->
</template>

<script>
import StockList from "./components/StockList.vue";

export default {
  name: "App",
  components: {
    StockList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
