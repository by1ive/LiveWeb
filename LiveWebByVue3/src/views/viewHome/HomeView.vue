<script setup lang="ts">
import LinkItem from './items/LinkItem.vue'
import ViteInfo from './items/ViteInfo.vue'
import ViteIcon from './icons/IconVite.vue'
import HomeRouter from '@/views/viewHome/router/HomeRouter.js'

//PageInfo
const viteInfo = {
  logo: ViteIcon,
  info: 'Dev Helper, A resource integration website!'
}
</script>

<template>
  <div class="home">
    <div class="home-vite">
      <div class="vite-info">
        <ViteInfo>
          <template #logo>
            <component :is="viteInfo.logo"></component>
          </template>
          <template #info>{{ viteInfo.info }}</template>
        </ViteInfo>
      </div>
      <div class="link-list">
        <div v-for="item in HomeRouter" :key="item.name">
          <LinkItem>
            <template #icon>
              <component :is="item.icon"></component>
            </template>
            <template #heading>
              <RouterLink :to="item.path">{{ item.name }}</RouterLink>
            </template>
            <template #info>{{ item.info }}</template>
          </LinkItem>
        </div>
      </div>
    </div>
    <div class="home-show">
      <p>Made by ❤️<a href="https://github.com/LiveWeb">&nbsp;@By1ive</a></p>
    </div>
  </div>
</template>


<style scoped>
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 100px);
  flex-direction: column;
  flex-wrap: wrap;
  min-height: 800px;
}

.home-vite {
  padding: 2rem;
  width: 60%;
  height: 50%;
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

.vite-info {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border: 2px pink;
  border-style: none solid none none;
}

.link-list {
  display: grid;
  align-items: center;
}

.home-show {
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  height: 50px;
  width: 100%;
  margin-top: 50px;
}

.home-show p {
  font-size: 1rem;
  position: absolute;
  right: 0;
  margin-right: calc(50% - 120px);
}

a {
  font-size: 1.25rem;
  margin-bottom: 0.4rem;
  font-weight: bold;
}

a:hover::after {
  background: linear-gradient(to right, rgb(216, 22, 200), blue);
  animation: slideIn 0.5s linear forwards;
  content: '';
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
}</style>