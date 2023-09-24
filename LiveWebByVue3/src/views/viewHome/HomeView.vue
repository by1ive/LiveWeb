<script setup lang="ts">
import LinkItem from "./items/LinkItem.vue";
import ViteInfo from "./items/ViteInfo.vue";
import ViteIcon from  "./icons/IconVite.vue";
import HomeRouter from "@/views/viewHome/router/HomeRouter.js";

//PageInfo
const viteInfo = {
  logo : ViteIcon,
  info : "Dev Helper, A resource integration website!"
}

</script>

<template>
  <div class="home">
    <div class="head">

    </div>
    <div class="middle">
        <div class="vite">
          <ViteInfo>
            <template #logo><component :is='viteInfo.logo'></component></template>
            <template #info>{{ viteInfo.info }}</template>
          </ViteInfo>
        </div>
        <div class="list">
          <div v-for="item in HomeRouter" :key="item.name">
            <LinkItem>
              <template #icon><component :is='item.Icon'></component></template>
              <template #heading><RouterLink :to=item.path>{{ item.name }}</RouterLink></template>
              <template #info>{{ item.info }}</template>
            </LinkItem>
          </div>
        </div>
      </div>
    <div class="bottom">

    </div>
  </div>
</template>


<style scoped>
.home{
  display: grid;
  grid-template-rows: 1fr 4fr 1fr;
  height: 100%;
  align-items: center;
  justify-items: center;
}

.middle{
  padding: 2rem;
  width: 60%;
  height: 80%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-columns: 3fr 2fr;
  border: 3px solid rgb(228, 141, 155);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-clip: content-box;
  min-width: 900px;
}

.vite{
  display:flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 2px pink;
  border-style: none solid  none none;
}

.list{
  display: grid;
  align-items: center;
}

a  {
  font-size: 1.25rem;
  margin-bottom: 0.4rem;
  font-weight: bold;
}

a:hover::after {
  background: linear-gradient(to right, rgb(216, 22, 200), blue);
  animation: slideIn 0.5s linear forwards;
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
}

@keyframes slideIn {
  0% {
    width: 0;
    margin-left: 0;
  }
  100% {
    width: 100%;
    margin-left: 0;
  }
}
</style>