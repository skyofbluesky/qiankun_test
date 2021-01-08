<template>
  <div>
  <h1>登录页</h1>
  <button type="button" @click="login">登录</button>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    methods:{
      login(){
        this.$router.push('home')
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>

</style>
