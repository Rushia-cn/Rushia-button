<template>
  <div id="app"
    :style="{
      '--background': background, 
      '--btn-color': btnColor, 
      '--box-shadow': boxShadow.shadow,
      '--hover-shadow': boxShadow.hover,
      '--font-color': fontColor
      }
    ">
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
  export default {
    components: {
      Nav
    },
    mounted() { window.vue = this },
    methods: {
      locale(lang) {
        this.locale = lang;
      }
    },
    computed: {
      routes: function() { return this.$store.state.config.routes },
      colorChoosed: function () { return this.$store.getters.color },
      background: function () { return this.colorChoosed.background },
      btnColor: function () { return this.colorChoosed.btnColor },
      fontColor: function () { return this.colorChoosed.fontColor },
      boxShadow: function () {
        const bs = this.colorChoosed.boxShadow; // Box Shadow
        const i = this.colorChoosed.distance || 10; // distance
        const b = this.colorChoosed.blur || 2 * i; // blur
        return {
          shadow: `${i}px ${i}px ${b}px ${bs[0]}, -${i}px -${i}px ${b}px ${bs[1]}`,
          hover: `${i}px ${i}px 4px ${bs[0]}, -${i}px -${i}px 4px ${bs[1]}`
        }
      }
    }
  }
</script>
<style>
  @font-face {
    font-family: 'iconfont';
    /* project id 1914903 */
    src: url('//at.alicdn.com/t/font_1914903_d8b3vg7ilf5.eot');
    src: url('//at.alicdn.com/t/font_1914903_d8b3vg7ilf5.eot?#iefix') format('embedded-opentype'),
      url('//at.alicdn.com/t/font_1914903_d8b3vg7ilf5.woff2') format('woff2'),
      url('//at.alicdn.com/t/font_1914903_d8b3vg7ilf5.woff') format('woff'),
      url('//at.alicdn.com/t/font_1914903_d8b3vg7ilf5.ttf') format('truetype'),
      url('//at.alicdn.com/t/font_1914903_d8b3vg7ilf5.svg#iconfont') format('svg');
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
    padding: 0.2rem;
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