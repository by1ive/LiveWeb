<script setup lang="ts">
import IconVite from './icons/IconVite.vue'

defineProps<{
  msg: string
}>()
</script>


<template>
    <div class="wrapper">
        <div class="show-svg">
            <IconVite />
        </div>
        <div class="show-info">
            <span>{{ msg }}</span>
        </div>
    </div>
</template>

<style scoped>

.wrapper {
    display:flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    position: relative;
}

.show-svg
{
    display: flex;
    place-items: center;
    place-content: center;
}

.show-svg svg {
    width: 320px;
    height: 320px;
}

.show-info{
    display: flex;
    place-items: center;
    place-content: center;
    position: absolute;
    margin-top: 200px;
}

.show-info span{
    font-size: 1.5rem;
    color: rgb(45, 23, 170);
}

</style>