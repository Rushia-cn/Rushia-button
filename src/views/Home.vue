<template>
  <div class="home">
    <a v-if="loading">Loading</a>
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
    data() {
      return {
        loading: true
      }
    },
    asyncComputed: {
      async categories() {
        const loaded = (await this.$a.get("https://category.rushia.moe")).data
        this.loading = false
        return loaded
      }
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