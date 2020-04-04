import Vue from 'vue'
import App from './App.vue'
import router from './router'
//vuex
import store from './store'
//全局注册：引入 mavonEditor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import 'popper.js/dist/popper.js'
import 'jquery/dist/jquery.min.js'
//引用 bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
//全局注册 Element-UI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(mavonEditor);
Vue.use(ElementUI);

Vue.config.productionTip = false


//全局导航守卫，用于权限控制
router.beforeEach((to,from,next)=>{
  //前往的路由是否需要登录
  if(to.meta.requireAuth==true){
    //用户是否有登录
    if(store.state.user!=null){
      //实现基于RBAC的角色认证（成功：下一页，失败：提示权限不足
      if(true){
        next()
      }else{
        console.log('权限不足')
      }
      
    }else{
      //未登录就弹出登录对话框
      router.push('/loginOrRegister/login')
    }
  }else{
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


