import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './router'
import './public-path'

Vue.use(VueRouter)

Vue.config.productionTip = false

let router = null
let instance = null

// 使用全局变量window.__POWERED_BY_QIANKUN__判断，是否在qiankun的主应用中运行？

function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? 'two' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

// 生命周期 - 挂载前
// qiankun将会在微应用bootstrap之前注入一个运行时的publicPath变量
export async function bootstrap (props) {
  console.log('two ==> two bootstrap(执行挂载？)')
}

// 生命周期 - 挂载后
export async function mount (props) {
  console.log('two ==> two挂载后的props,判断是否从主程序中获取到props.fn?', props)

  // 获取主应用中定义的方法并绑定到Vue上
  Object.keys(props.fn).forEach(method => {
    Vue.prototype[`$${method}`] = props.fn[method]
  })

  // 设置通讯
  // 获取
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState

  //设置全局变量，判断是否从qiankun启动


  // 渲染
  render(props)
}

// 生命周期 - 解除挂载
export async function unmount () {
  console.log('Two unmount')
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}

// 本地调试
// 直接启动微应用，方便开发调试

let qkFlag = 1
if (!window.__POWERED_BY_QIANKUN__) {
  qkFlag = 0
  render()
}
Vue.prototype.$qiankunPower = qkFlag