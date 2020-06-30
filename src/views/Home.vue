<template>
  <div class="home">
    <Panel v-for="(category, index) in categories" :key='index' :clips='category.clips' :category='category.name'>
    </Panel>
  </div>
</template>

<script>
  import Panel from '@/components/Panel.vue'
  export default {
    name: 'Home',
    components: {
      Panel
    },
    mounted() {
      //Load meta.json from server
      
    },
    data() {
      return this.$a.get("https://static.miao.dev/rushia")
    }
  }
</script>
<style>
  .home {
    display: flex;
    flex-wrap: wrap;
    width: auto;
    flex-direction: column;
  }
</style>