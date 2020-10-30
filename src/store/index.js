/**
 * 配置全局vuex
 * 引入模块vuex
*/
import Vue from 'vue'
import Vuex from 'vuex'
import demo from './module/demo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  state: {
    tip: '欢迎使用Vuex'
  },
  getters: {
    tip: state => state.tip
  },
  mutations: {
    SET_TIP (state, data) {
      state.tip = data
    }
  },
  actions: {
  },
  modules: {
    demo
  }
})
