import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import routes from './router'
import './public-path'

Vue.use(VueRouter)

Vue.config.productionTip = false

let router = null
let instance = null

function render (props = {}) {
  const { container } = props
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? 'one' : '/',
    mode: 'history',
    routes
  })

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}


// 生命周期 - 挂载前
export async function bootstrap (props) {
  console.log('one-->微程序one内生命周期 -- bootstrap')
}

// 生命周期 - 挂载后
export async function mount (props) {
  // 获取主应用中定义的方法并绑定到Vue上
  Object.keys(props.fn).forEach(method => {
    Vue.prototype[`$${method}`] = props.fn[method]
  })

  // 设置通讯
  // 获取
  Vue.prototype.$onGlobalStateChange = props.onGlobalStateChange
  Vue.prototype.$setGlobalState = props.setGlobalState
  // 渲染
  render(props)
}

// 生命周期 - 解除挂载
export async function unmount () {
  // console.log('One unmount')
  // 渲染
  // render(props)
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}

// 本地调试
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}