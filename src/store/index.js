import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ads:333
  },
  mutations: {
    increation(state){
      state.ads++;
    }
  },
  actions: {
  },
  modules: {
  }
})
