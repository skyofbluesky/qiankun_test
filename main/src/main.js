import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// import router from './router'

// import '@/router/permission'

import '@/styles/index.scss'
// import './styles/element-variables.scss'

import App from './App.vue'

Vue.use(ElementUI, { size: 'medium' })

Vue.config.productionTip = false

// 导入qiankun所需方法
import {
  registerMicroApps, // 注册子应用
  runAfterFirstMounted, // 当地一个子应用装载完毕
  setDefaultMountApp, // 设置默认装载的子应用
  initGlobalState, // 微前端之间的通信
  addGlobalUncaughtErrorHandler,
  start // 启动
} from 'qiankun'

// 渲染主应用
new Vue({
  // router,
  render: function (h) {
    return h(App)
  },
}).$mount('#container')


function getSubApps () {
  var subAppArr = [
    {
      name: 'sub-app-1',//微应用名称
      entry: '//localhost:6661',  // 微应用的入口url
      container: '#micro-view',  // 微应用容器节点
      activeRule: '/sub-app-1', // 微应用激活规则
      props: {  // 主应用传递给微应用的数据
        container: document,
        msg: {
          data: {
            mt: '主应用中的one的prop中的msg，data-->mt'
          }
        },
        fn: {
          oneFromMain (msg) {
            // console.log('main方法==》fn:', msg)
          }
        }
      }
    },
    {
      name: 'central-controller',
      // entry: '//localhost:6662',
      // entry: '//localhost:3001/home',
      entry: '//localhost:6663',
      container: '#micro-view',
      activeRule: '/central-controller',// 激活微应用
      props: { // 主应用需要传递给微应用的数据
        container: document,
        msg: {
          data: {
            mt: 'registerMicroApps-two:显示在micro-view显示区'
          }
        },
        fn: {
          twoFromMain (msg) {
            // console.log('two:', msg)
          }
        }
      }
    }, {
      name: 'StaticMicroApp',
      entry: '//localhost:10400/index.html',
      container: '#micro-view',
      activeRule: '/sub-app-html-1'
    }
  ]

  return new Promise(function (resolve, reject) {
      if (1) {
        resolve(subAppArr)
      } else {
        reject('error')
      }
      clearTimeout(timer)
      timer = null
  })
  // return new Promise(function (resolve, reject) {
  //   var timer = setTimeout(function () {
  //
  //     if (1) {
  //       resolve(subAppArr)
  //     } else {
  //       reject('error')
  //     }
  //     clearTimeout(timer)
  //     timer = null
  //   }, 2000)
  // })
}

//异步挂载测试
qiankunRegist()

async function qiankunRegist () {
  var subApps = await getSubApps()
  registerMicroApps(
    subApps,
    {
      beforeLoad: [ // 全局的微应用声明周期钩子
        app => {
          // console.log('beforeLoad')
        }
      ],
      beforeMount: [
        app => {
          // console.log('主程序==》默认应用挂载之前--》：beforeMount', app)
        }
      ],
      beforeUnmount: [initGlobalState,
        app => {
          // console.log('销毁挂载之前：beforeUnmount')
        }
      ],
      afterUnmount: [
        app => {
          // console.log('销毁挂载之后：afterUnmount', app)
        }
      ]
    }
  )
}


// 注册微应用程序
// registerMicroApps(
//   [
//     {
//       name: 'sub-app-1',//微应用名称
//       entry: '//localhost:6661',  // 微应用的入口url
//       container: '#micro-view',  // 微应用容器节点
//       activeRule: '/sub-app-1', // 微应用激活规则
//       props: {  // 主应用传递给微应用的数据
//         container: document,
//         msg: {
//           data: {
//             mt: '主应用中的one的prop中的msg，data-->mt'
//           }
//         },
//         fn: {
//           oneFromMain (msg) {
//             console.log('main方法==》fn:', msg)
//           }
//         }
//       }
//     },
//     {
//       name: 'sub-app-2',
//       entry: '//localhost:6662',
//       container: '#micro-view',
//       activeRule: '/sub-app-2',// 激活微应用
//       props: { // 主应用需要传递给微应用的数据
//         container: document,
//         msg: {
//           data: {
//             mt: 'registerMicroApps-two:显示在micro-view显示区'
//           }
//         },
//         fn: {
//           twoFromMain (msg) {
//             console.log('two:', msg)
//           }
//         }
//       }
//     },
//     {
//       name: 'StaticMicroApp',
//       entry: '//localhost:10400/index.html',
//       container: '#micro-view',
//       activeRule: '/sub-app-html-1'
//     }
//   ],
//   {
//     beforeLoad: [ // 全局的微应用声明周期钩子
//       app => {
//         console.log('beforeLoad')
//       }
//     ],
//     beforeMount: [
//       app => {
//         console.log('主程序==》默认应用挂载之前--》：beforeMount', app)
//       }
//     ],
//     beforeUnmount: [initGlobalState,
//       app => {
//         console.log('销毁挂载之前：beforeUnmount')
//       }
//     ],
//     afterUnmount: [
//       app => {
//         console.log('销毁挂载之后：afterUnmount', app)
//       }
//     ]
//   }
// )

// 通讯  定义全局状态，并返回通信方法。微应用通过props获取通信方法。
const actions = initGlobalState({
  mt: 'globalState初始值5172' // 初始化state，里面内容您随意
})
// 在项目中任何需要监听的地方进行监听，在这里监听是为了方便
// 在当前应用监听全局状态，有变更触发callback
actions.onGlobalStateChange((state, prev) => { // state变更后的状态，prev变更前的状态
  // console.log('主页面数据(现在)=》', state)
  // console.log('主页面数据(之前)', prev)
})
// 将action对象绑到Vue原型上，为了项目中其他地方使用方便
// 绑定后，主应用通过this.$actions来使用actions中的方法，如：this.$actions.setGlobalState()
// 微应用通过props获取通信方法
Vue.prototype.$actions = actions

// 设置主应用启动后默认进入的微应用
setDefaultMountApp('/sub-app-1')

// 默认启动的第一个微应用加载完毕后需要调用的方法，比如开启一些监控或者埋点脚本
runAfterFirstMounted(() => {
  // console.log('主程序==》第一个子应用加载完毕后的回调')
})
addGlobalUncaughtErrorHandler(evt => console.log('globalError==>', evt))
// 启动qiankun
start({
  sandbox: {
    prefetch: true,
    strictStyleIsolation: true,
    // experimentalStyleIsolation: true
  }
})
