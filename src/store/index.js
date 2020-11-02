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
    count: 50
  },
  // 实时监听state值的变化
  getters: {
    count: state => state.count
  },
  mutations: {
    addCount (state, data) {
      state.count += data
    },
    delCount (state, data) {
      if (state.count > 0) {
        state.count -= data
      } else {
        state.count = 0
      }
    }
  },
  actions: {
  },
  modules: {
    demo
  }
})
