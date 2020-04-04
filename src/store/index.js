import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前登录用户（密码加密）
    user: JSON.parse(localStorage.getItem('user'))
  },
  mutations: {
    //登陆
    login(state, user) {
      localStorage.setItem('user', JSON.stringify(user))
      state.user=user
    },
    //注销
    logout(state) {
      localStorage.removeItem('user')
      state.user=null
    }
  }
})
