<template>
    <div class="btn-wrapper">
        <div class="nav-btn" :class="{grow: localized(route.name)}" v-for="(route, index) in routes" :key="index"
            :title="route.name" @click="window.location = route.to">
            <a v-if = "localized(route.name)" :name="route.name.en">{{localized(route.name)}}</a>
            <i class="iconfont" v-html="route.icon"></i>
        </div>
    </div>
</template>
<script>
    export default {
        name: "btn-nav",
        props: ["routes"],
        computed: {
            window(){return window}
        },
        methods: {
            localized(name) {
                return name[this.$i18n.locale] || name["en"] || ""
            }
        }
    }
</script>
<style>
    .btn-wrapper {
        min-width: 100px;
        display: flex;
        padding: 1rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .iconfont {
        font-family: "iconfont" !important;
        font-size: 20px;
        font-style: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-text-stroke-width: 0.2px;
        -moz-osx-font-smoothing: grayscale;
        color: #001f3f;
    }

    .nav-btn {
        /*   Neuromophism design   */
        border-radius: 2rem;
        background: var(--btn-color);
        box-shadow: var(--box-shadow);
        /* Neuromophism design ends*/
        flex-grow: 1;
        padding: 0.8rem;
        margin: 1rem;
        height: 1rem;
        line-height: 20px;
        cursor: pointer;
        z-index: 100;
        text-decoration: none;
        font-family: Roboto;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }

    .grow {
        flex-grow: 100;
    }

    .grow a {
        margin-right: 10px;
    }

    .nav-btn a:not([name=""]) {
        text-decoration: none;
        margin-left: 0.4rem;
    }
</style>