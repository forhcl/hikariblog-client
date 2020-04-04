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

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
