import Vue from 'vue'
import VueI18n from 'vue-i18n'

import locale from '@/assets/locale.json'
import config from '../config.json'

Vue.use(VueI18n);
export const i18n = new VueI18n({
    locale: config.locale.default,
    fallbackLocale: config.locale.fallback,
    messages: locale
})