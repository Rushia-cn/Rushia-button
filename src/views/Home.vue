<template>
  <div class="home">
    <Panel v-for="(category, index) in categories" :key='index' :clips='category.clips' :category='category.category'>
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
      return {
        categories: [{
          category: { "en": {"name": "TEST CAT 1"}, "zh": {"name": "测试用分类 1"} },
          clips: [
            { "clipID": "0", "lang": { "en": { clipName: "Rushia" }, "zh": { clipName: "粽子" } } },
            { "clipID": "0", "lang": { "en": { clipName: "Rushia" }, "zh": { clipName: "粽子" } } },
            { "clipID": "0", "lang": { "en": { clipName: "Rushia" }, "zh": { clipName: "粽子" } } },
            { "clipID": "0", "lang": { "en": { clipName: "Rushia" }, "zh": { clipName: "粽子" } } },
          ]
        }, {
          category: { "en": {"name": "TEST CAT 2"}, "zh": {"name": "测试用分类 2"} },
          clips: [
            { "clipID": "0", "lang": { "en": { clipName: "Rushia" }, "zh": { clipName: "粽子" } } },
            { "clipID": "0", "lang": { "en": { clipName: "Rushia" }, "zh": { clipName: "粽子" } } },
            { "clipID": "0", "lang": { "en": { clipName: "Rushia" }, "zh": { clipName: "粽子" } } },
            { "clipID": "0", "lang": { "en": { clipName: "Rushia" }, "zh": { clipName: "粽子" } } },
          ]
        }]
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