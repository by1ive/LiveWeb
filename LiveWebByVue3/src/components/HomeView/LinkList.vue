<script setup lang="ts">
import LinkItem from './items/LinkItem.vue'
import DocIcon from './icons/IconDoc.vue'
import IconTool from './icons/IconTool.vue'
import AboutIcon from './icons/IconAbout.vue'
</script>

<template>
    <LinkItem>
      <template #icon>
        <DocIcon />
      </template>
      <template #heading><RouterLink to="/doc">Doc</RouterLink></template>
      <p>DocPage for learn!</p>
    </LinkItem>
  
    <LinkItem>
      <template #icon>
        <IconTool />
      </template>
      <template #heading><RouterLink to="/tool">Tool</RouterLink></template>
      <p>ToolPage for develop!</p>
    </LinkItem>

    <LinkItem>
      <template #icon>
        <AboutIcon />
      </template>
      <template #heading><RouterLink to="/about">About</RouterLink></template>
      <p>AboutPage for vite!</p>
    </LinkItem>
</template>

<style scoped>
a  {
  color: rgb(36, 209, 36);
  text-decoration: none;
}

a:hover::after {
  background: linear-gradient(to right, rgb(6, 235, 63), blue);
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