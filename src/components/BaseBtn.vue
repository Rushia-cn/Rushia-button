<template>
    <div class="btn" @click="$play('https://suisei.moe/assets/IRr6aAS3zLQ--2596.4--2599.mp3')">
        {{ $ft('clipName', lang) }}
    </div>
</template>
<script>
    export default {
        name: "BaseButton",
        props: ["ID", "lang"]
    }
</script>
<style>
    .btn {
        /*   Neuromophism design   */
        border-radius: 16px;
        background: var(--btn-color);
        box-shadow: var(--box-shadow);
        /* Neuromophism design ends*/
        padding: 1em;
        height: 1.2em;
        min-width: 5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s ease;
        margin: 0.8em;
        font-size: 1rem;
        cursor: pointer;
    }
</style>