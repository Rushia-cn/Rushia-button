import Vue from 'vue'
import axios from 'axios'
import AsyncComputed from 'vue-async-computed'

import App from './App.vue'
import {
  i18n
} from './i18n.js'
import store from './vuex'
import router from './router'
import {
  play
} from '@/player'

alert("网站出现bug暂时无法播放音频，正在紧急修复")

Vue.use(AsyncComputed)

Vue.prototype.$play = play
Vue.prototype.$loc = name => name[i18n.locale] || name["en"] || ""
Vue.prototype.$a = axios
Vue.prototype.setLoc = (locale) => {
  i18n.locale = locale;
  return locale
}
Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')