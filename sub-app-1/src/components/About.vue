<template>
  <div class="about">
    one->about页面
  </div>
</template>

<script>
export default {
  name: 'About',
  mounted () {
    this.testFn()
  },
  methods: {
    testFn () {
      console.log("执行one/about.vue页面")
    }
  }
}
</script>

<style scoped></style>