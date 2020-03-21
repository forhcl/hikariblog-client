import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//全局注册：引入 mavonEditor
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import 'popper.js/dist/popper.js'
import 'jquery/dist/jquery.min.js'
//引用 bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

Vue.use(mavonEditor)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
