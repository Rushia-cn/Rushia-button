<template>
    <div class="nav-btn" :class="{grow: locName}" :title="route.title" @click="window.location = route.to">
        <a v-if="locName">{{locName}}</a>
        <i class="iconfont" v-html="route.icon"></i>
    </div>
</template>
<script>
    export default {
        name: "NavBtn",
        props: ["route"],
        computed: {
            locName() { return this.$loc(this.route.name) }
        }
    }
</script>