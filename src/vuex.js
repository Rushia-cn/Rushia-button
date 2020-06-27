import Vue from 'vue'
import Vuex from 'vuex'

import colorPallet from '@/assets/colorPallet.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    colorChoice: 0,
    colorPallet,
  },
  getters: {
    color: state => {
      return state.colorPallet[state.colorChoice]
    }
  },
  mutations: {
    changeColor (state, cid) {
      state.colorChoice = cid
    }
  }
})