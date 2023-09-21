<script setup lang="ts">
</script>

<template>
  <main>
    <div class="show-page">
      <router-view></router-view>
    </div>
    <div class="show-author">
      <p>Powered by<a href="https://github.com/LiveWeb">@By1ive</a></p>
    </div>
  </main>
</template>

<style scoped>
main{
  display: grid;
  grid-template-rows: 24fr 1fr;
  height: 100vh;
  position: relative;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
}

.show-page {
  height: 100%;
  width: 100%;
  inset: 0;
  position: relative;
}

.show-author {
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
}
.show-author p{
  font-size: 1.25rem;
  position: absolute;
  right: 0;
  margin-right: calc(50% - 120px);
}
</style>