<template>
  <div id="app"
    :style="{'--background': background, '--btn-color': btnColor, '--box-shadow': boxShadow,'--font-color': fontColor}">
    <div id="wrap">
      <div id="nav">
        <Nav :routes="routes" />
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
  import Nav from '@/components/Nav.vue'
  import json from '@/assets/colorPallet.json'
  export default {
    colorPallets: json,
    components: {
      Nav
    },
    mounted() { window.vue = this },
    methods: {
      locale(lang) {
        this.locale = lang;
      }
    },
    data() {
      return {
        routes: [
          { 'icon': '&#xe630;', 'name': { 'en': 'Rushia Button', 'zh': '粽按钮' }, 'to': '/#/' },
          { 'icon': '&#xe617;', 'name': { 'en': 'Contribute', 'zh': '贡献' }, 'to': '/#/contribute' },
          { 'icon': '&#xe618;', 'name': { 'en': 'Color Pallet', 'zh': '调色板' }, 'to': '/#/color' },
          { 'icon': '&#xe600;', 'name': { 'en': '' }, 'to': 'https://www.youtube.com/channel/UCl_gCybOJRIgOXw6Qb4qJzQ' },
          { 'icon': '&#xe7af;', 'name': { 'en': '' }, 'to': 'https://twitter.com/uruharushia' },
          { 'icon': '&#xe677;', 'name': { 'en': '' }, 'to': 'https://github.com/Rushia-cn/Rushia-button' },
        ]
      }
    },
    computed: {
      colorChoosed: function () { return this.$store.getters.color },
      background: function () { return this.colorChoosed.background },
      btnColor: function () { return this.colorChoosed.btnColor },
      fontColor: function () { return this.colorChoosed.fontColor },
      boxShadow: function () {
        const bs = this.colorChoosed.boxShadow; // Box Shadow
        const i = this.colorChoosed.distance || 10; // distance
        const b = this.colorChoosed.blur || 2 * i; // blur
        return `${i}px ${i}px ${b}px ${bs[0]}, -${i}px -${i}px ${b}px ${bs[1]}`
      }
    }
  }
</script>
<style>
  @font-face {
    font-family: 'iconfont';
    /* project id 1914903 */
    src: url('//at.alicdn.com/t/font_1914903_6iuffs43lql.eot');
    src: url('//at.alicdn.com/t/font_1914903_6iuffs43lql.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_1914903_6iuffs43lql.woff2') format('woff2'),
      url('//at.alicdn.com/t/font_1914903_6iuffs43lql.woff') format('woff'),
      url('//at.alicdn.com/t/font_1914903_6iuffs43lql.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_1914903_6iuffs43lql.svg#iconfont') format('svg');
  }

  html body {
    width: 100vw;
    min-height: 100vh;
    margin: 0;
    background: var(--background);
  }

  #wrap {
    max-width: 70rem;
    margin: auto;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: var(--font-color);
    padding: 1rem;
    background-color: var(--background);
    min-height: 100vh;
    box-sizing: border-box;
  }

  #nav a {
    font-weight: bold;
    color: #001f3f;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }
</style>