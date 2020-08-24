<template>
<div class="btn-wrapper">
    <NavBtn v-for="(route, index) in routes" :key="index" :route="route"></NavBtn>
</div>
</template>

<script>
import NavBtn from '@/components/NavBtn.vue'
export default {
    name: "btn-nav",
    props: ["routes"],
    components: {
        NavBtn
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
