<template>
  <div id="app">
  <home-page></home-page>
    <!--<router-view></router-view>-->
  </div>
</template>

<script>
// import homePage from '@/components/homePage'

import homePage from '@/views/home'


export default {
  name: 'App',
  components: {
    homePage
  }
}
</script>
<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
