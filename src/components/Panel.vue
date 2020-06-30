<template>
    <div class="panel">
        <div class='title-wrap'  @click='show = !show' v-if="category === 'default'">
            <a class="category-name">{{ $ft('name', category) }}</a>
            <Icon type="down" :rotate='show ? 0 : 90'></Icon>
        </div>
        <div class="panel-wrap" v-if="show">
            <BaseButton v-for="(clip, index) in clips" :key="index" :url="clip.url" :lang="clip.lang" />
        </div>
    </div>
</template>
<script>
    import BaseButton from '@/components/BaseBtn.vue'
    import { Icon } from 'ant-design-vue';
    export default {
        name: "Panel",
        components: {
            BaseButton,
            Icon
        },
        data() {
            return {
                show: true
            }
        },
        computed: {
            local(){
                return this.clipName[this.$i18n.locale] || this.clipName["en"] || ""
            }
        },
        props: ["clips", "category"]
    }
</script>
<style>
    .panel {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
    }

    .title-wrap {
        margin: 1rem;
    }

    .panel-wrap {
        display: flex;
        flex-wrap: wrap;
        width: auto;
        transition: all ease 0.3s;
    }

    .category-name {
        margin-right: 1rem;
        font-size: 1.5em;
    }

    .category-name::before {
        content: '# '
    }

    .rotated {
        transform: rotate(90deg);
    }
</style>