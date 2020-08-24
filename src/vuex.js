import Vue from 'vue'
import Vuex from 'vuex'

import config from '../config.json'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    config,
    colorChoice: 0,
  },
  getters: {
    color: state => {
      return state.config.colorPallet[state.colorChoice]
    },
    metaSource: state => {
      return state.config.metaSource
    }
  },
  mutations: {
    changeColor (state, cid) {
      state.colorChoice = cid
    }
  }
})