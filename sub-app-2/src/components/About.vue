<template>
  <div class="about">
    two - about 页面
    <br>
    <button @click="testFn">测试事件</button>
    <br>
    {{'我的名字：'+name}}
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      name: '应用2'
    }
  },
  mounted () {
    // 增加state监听，当mt数据发生变化的时候，
    // 我们修改name，体现在页面上
    console.log('$qiankunPower==>', window.__POWERED_BY_QIANKUN__)
    if (this.$qiankunPower) {
      this.$onGlobalStateChange((state, prev) => {
        // console.log('从主页面传过来(现在)--》', state)
        // console.log('从主页面传过来(之前)--》', prev)
        if (state.mt !== prev.mt) {
          this.name = state.mt
        }
      })
    }

  },
  methods: {
    testFn () {
      alert('测试事件')
    }
  }
}
</script>
<style scoped>
</style>