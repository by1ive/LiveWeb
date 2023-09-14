<script setup lang="ts">
import ViteInfo from '../components/HomeView/ViteInfo.vue'
import ViteList from '../components/HomeView/LinkList.vue'

const infoMsg = "Dev Helper, A resource integration website!";
</script>

<template>
  <main>
    <div class="show-vite">
      <ViteInfo :msg=infoMsg></ViteInfo>
    </div>
    <div class="show-list">
      <ViteList></ViteList>
    </div>
  </main>
</template>


<style scoped>
main {
  line-height: 1.5;
  min-height: 100vh;
  display: grid;
  grid-template-columns: 3fr 2fr;
  padding: 2rem;
  align-items: center;
}

.show-vite{
  display:flex;
  justify-content: center;
  align-items: center;
}

.show-list{
  margin: 0 auto;
  width: 80%;
}

</style>
