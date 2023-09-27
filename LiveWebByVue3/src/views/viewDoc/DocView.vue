<script setup lang="ts">
import SearchItem from '@/views/viewDoc/items/SearchItem.vue';
import CategoryItem from '@/views/viewDoc/items/CategoryItem.vue';
import DocShowItem from '@/views/viewDoc/items/DocShowItem.vue';
import { ref, watch } from 'vue';
import {onMounted, onBeforeUnmount} from 'vue';
const linkPath = ref('');
const getPath = (path: string) => {
  linkPath.value = path;
};

interface linkInfo {
  path: string;
  type: string;
}

const docInfo = ref<linkInfo>({
  path: '',
  type: '',
});

const pathTypeCheck = (path: string) => {
  let info: linkInfo = {
    path: '',
    type: ''
  };
  if (path.endsWith('.md')) {
    info.path = path;
    info.type = '.md';
  }
  return info;
};

watch(linkPath, (newValue) => {
  docInfo.value = pathTypeCheck(newValue);
});

const pageShowChange = ref(false);
const handleAsyncComplete = (status: boolean) => {
  pageShowChange.value = status;
};

const scrollPercentage = ref(0);
onMounted(() => {
  window.addEventListener('scroll', () => {
    calculateScrollPercentage();
  })
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', () => {
    calculateScrollPercentage();
  })
})
const calculateScrollPercentage = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    scrollPercentage.value = Math.round((scrollTop / scrollHeight) * 100);
}
</script>

<template>
  <div class="doc">
    <div class="color-bar" :style="{ width: scrollPercentage + '%' }"></div>
    <div class="doc-display" v-show="!pageShowChange">
      <div class="doc-search">
        <SearchItem :jump2doc="getPath"></SearchItem>
      </div>
      <div class="doc-page">
        <CategoryItem :jump2doc="getPath"></CategoryItem>
      </div>
    </div>
    <div class="doc-show" v-show="pageShowChange">
      <DocShowItem :info="docInfo" @complete="handleAsyncComplete"></DocShowItem>
    </div>
  </div>
</template>

<style scoped>
.doc {
  --v: 30px;
  --r: 0 3rem 0 3rem;
  position: relative;
}

.color-bar{
  position: fixed;
  top: 0;
  height: 4px; 
  z-index: 9999;
  background-color: rgb(63, 253, 94);
}

.doc-display{
  padding: var(--r);
}

.doc-search {
  padding: var(--v) 0 20px 0;
  position: relative;
}

.doc-page {
  margin-top: var(--v);
  padding: var(--r);
}

.doc-show{
  padding: 2rem 6rem;
}

span[title] {
  position: relative;
  cursor: pointer;
}

span[title]:hover::after {
  content: attr(title);
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  color: #fff;
  padding: 0.5rem;
  border-radius: 4px;
  white-space: nowrap;
}
</style>
  