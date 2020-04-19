import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //当前登录用户
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
    },
    //修改用户个人信息
    editUser(state,user){
      state.user.phone=user.phone
      state.user.email=user.email
      state.user.adddress=user.address
      localStorage.setItem('user',state.user)
    }
    //修改用户头像
    //修改用户密码
  }
})
