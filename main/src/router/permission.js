import router from './index'

router.beforeEach((to,from,next)=>{
  const userInfo = window.sessionStorage.getItem('userInfo')
  if(!userInfo){
    if(to.path !== '/login'){
      alert('测试，正式发布需要验证用户信息')
      next()
      // next('/login')
    }else{
      next()
    }
  }else{
    next()
  }
})
