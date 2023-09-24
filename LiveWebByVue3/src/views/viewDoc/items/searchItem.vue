
<script setup lang="ts">
import ArrowIcon from "../icons/IconArrow.vue";

</script>

<template>
    <div class="search-item">
        <div class="item-info">
            <slot name="info"></slot>
        </div>
        <div class="item-icon">
            <ArrowIcon />
        </div>
    </div>
</template>


<style scoped>
.search-item {
    height: 40px;
    width: inherit;
    display: flex;
    align-items: center;
    justify-items:center;
    flex: auto;
}

.search-item div{
    display: flex;
    align-items: center;
    justify-items:center;
}
.item-info{
    width: calc(100% - 32px);
    color: plum;
    margin: 0 auto;
}

.item-icon{
   width: 32px;
}

</style>