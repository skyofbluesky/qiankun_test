<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link to="/about">about</router-link>
    <div class="show-screen">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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

  .show-screen {
    margin: 20px auto;
    width: 180px;
    height: 80px;
    background-color: #ffc3d6;
    line-height: 80px;
  }
</style>