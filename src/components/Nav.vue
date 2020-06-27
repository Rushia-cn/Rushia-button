<template>
    <div class="btn-wrapper">
        <div class="nav-btn" v-for="(route, index) in routes" :key="index" :title="route.name" @click="window.location = route.to">
            <Icon class="icon" :type="route.icon" :href="route.to"/>
            <a :name="route.name.en">{{localized(route.name)}}</a>
        </div>
    </div>
</template>
<script>
    import { Icon } from 'ant-design-vue';
    export default {
        name: "btn-nav",
        props: ["routes"],
        components: { Icon },
        data(){ return { window } },
        methods: {
            localized(name){
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
        justify-content: center;
        flex-grow: 0;
    }

    .nav-btn a:not([name=""]) {
        text-decoration: none;
        margin-left: 0.4rem;
    }

    .icon {
        color: #001f3f;
        
    }
</style>