// 区别是否在qiankun的主应用下运行
// 如果在qiankun主应用下运行
if(window.__POWERED_BY_QIANKUN__){
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__
}