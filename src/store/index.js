import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

import mutations from "@/store/mutations";
import actions from "@/store/actions";
export default new Vuex.Store({
  state: {
    cartList:[],
  },
  mutations,
  actions,
  modules: {
  },
  getters
})
