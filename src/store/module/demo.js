/**
 * demo模块的vuex
*/
const state = {
  shopCount: '100'
}

const getters = {
  shopCount: state => state.shopCount
}

const mutations = {
  SET_COUNT (state, data) {
    state.shopCount = data
  }
}

const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
