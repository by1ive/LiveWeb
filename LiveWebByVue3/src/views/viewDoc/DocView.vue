<script setup lang="ts">
import SearchItem from '@/views/viewDoc/items/SearchItem.vue';
import CategoryItem from '@/views/viewDoc/items/CategoryItem.vue';
import DocItem from '@/views/viewDoc/items/DocItem.vue';
import { ref, watch } from 'vue';

const linkPath = ref('');
const getPath = (path: string) => {
  linkPath.value = path;
};

interface docInfo {
  path: string;
  type: string;
}

const docInfo = ref<docInfo>({
  path: '',
  type: '',
});

const pathTypeCheck = (path: string) => {
  let info: docInfo = {
    path: '',
    type: '',
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

</script>

<template>
  <div class="doc" v-if="linkPath === ''">
    <div class="doc-search">
      <SearchItem :jump2doc="getPath"></SearchItem>
    </div>
    <div class="doc-page">
      <CategoryItem :jump2doc="getPath"></CategoryItem>
    </div>
  </div>
  <DocItem :info="docInfo" v-if="linkPath !== ''"></DocItem>
</template>

<style scoped>
* {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
}

.doc {
  --v: 30px;
  --r: 0 3rem 0 3rem;
  position: relative;
  padding: var(--r);
}

.doc-search {
  padding: var(--v) 0 20px 0;
  position: relative;
}

.doc-page {
  padding: var(--r);
  margin-top: var(--v);
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
  