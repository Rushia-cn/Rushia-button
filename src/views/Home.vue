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
    methods: {
      parseCategory(loaded){
        Object.entries(loaded.categories).forEach(([k, v]) => {
          loaded.categories[k] = {
            name: v,
            clips: []
          }
        })
        Object.values(loaded.clips).forEach(v => {
          loaded.categories[v.category].clips.push(v)
        })
        return Object.values(loaded.categories)
      }
    },
    asyncComputed: {
      async categories() {
        const loaded = (await this.$a.get("https://rushia.moe/category")).data
        this.loading = false
        /*
        loaded[0] = {
          clips: [],
          catId: 'test',
          name: {
            en: 'test'
          }
        }
        // A mp3 clip borrowed from suisei.moe for test purpose
        loaded[0].clips.push({
          name: {
            en: "test"
          },
          url: "https://suisei.moe/assets/doooooooooo.mp3"
        })
        */
        return this.parseCategory(loaded)
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