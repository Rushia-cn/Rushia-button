<template>
    <div id='color-setting'>
        <ColorCard v-for="(color, index) in $store.state.colorPallet" :key="index" :cid="index" :color="color"></ColorCard>
    </div>
</template>
<script>
    import ColorCard from '@/components/ColorCard.vue'

    export default {
        components: { ColorCard },
    }
</script>
<style>
#color-setting {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width:auto
}
</style>