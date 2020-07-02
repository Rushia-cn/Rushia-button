import Vue from 'vue'
import axios from 'axios'
import AsyncComputed from 'vue-async-computed'

import App from './App.vue'
import { i18n } from './i18n.js'
import store from './vuex'
import router from './router'
import play from '@/player'


Vue.use(AsyncComputed)

Vue.prototype.$play = play
Vue.prototype.$ft = (path, obj) => {
  return i18n._t(path, i18n.locale, obj)
}
Vue.prototype.$a = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
