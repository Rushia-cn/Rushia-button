<template>
    <div class="panel">
        <div class='title-wrap' @click='show = !show' v-if="category['en']['name'] !== 'default'">
            <a class="category-name">{{ $ft('name', category) }}</a>
            <i :class="[show ? '' : 'rotated', 'drop', 'iconfont']">&#xe620;</i>
        </div>
        <div class="panel-wrap" v-if="show">
            <BaseButton v-for="(clip, index) in clips" :key="index" :url="clip.url" :lang="clip.lang" />
        </div>
    </div>
</template>
<script>
    import BaseButton from '@/components/BaseBtn.vue'
    export default {
        name: "Panel",
        components: {
            BaseButton
        },
        data() {
            return {
                show: true,
            }
        },
        props: ["clips", "category"]
    }
</script>
<style>
    .drop {
        font-size: 25px;
        position: relative;
        bottom: -2px;
        transition: all 0.3s ease;
    }
    .panel {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .title-wrap {
        cursor: pointer;
        margin: 1rem;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .panel-wrap {
        display: flex;
        flex-wrap: wrap;
        width: auto;
        transition: all ease 0.3s;
    }

    .category-name {
        margin-right: 4px;
        font-size: 1.5em;
    }

    .category-name::before {
        content: '# '
    }

    .rotated {
        transform: rotate(90deg);
    }
</style>