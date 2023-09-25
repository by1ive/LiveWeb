<script setup lang="ts">
import SearchItem from '@/views/viewDoc/items/SearchItem.vue';
import CategoryItem from '@/views/viewDoc/items/CategoryItem.vue';

import { ref } from 'vue';
</script>

<template>
  <div class="doc" v-show="true">
    <div class="doc-search">
      <SearchItem></SearchItem>
    </div>
    <div class="doc-page">
      <CategoryItem></CategoryItem>
    </div>
  </div>
  <div>
  </div>
</template>
  
<style scoped>
* {
  white-space: nowrap;
  /* 禁止换行 */
  overflow: hidden;
  /* 隐藏溢出内容 */
  text-overflow: ellipsis;
  color: black;
}

.doc {
  --v: 50px;
  --r: 0 4rem 0 4rem;
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
  