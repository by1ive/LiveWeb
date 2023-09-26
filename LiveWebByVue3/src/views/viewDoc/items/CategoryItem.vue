<script setup lang="ts">
import DocRouter from '@/views/viewDoc/router/DocRouter.js'
defineProps({
  jump2doc: {
    type: Function,
    default: () => {},
  }
})
</script>
<template>
  <div class="category" v-for="(data, index) in DocRouter" :key="index">
    <div class="category-head">
      <label>
        <component :is="data.icon"></component>
        <span>{{ index }}</span>
      </label>
    </div>
    <div class="category-list">
      <div class="category-single" v-for="item in data.info" :key="item" @click="jump2doc(item.path)">
        <label><span :title="item.title">{{ item.title }}</span></label>
        <label><span>☀:&nbsp;{{ item.date }}</span></label>
        <label><span>☪:&nbsp;{{ item.author }}</span></label>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
  word-wrap: break-word;
  white-space: pre-wrap;
}

.category {
  width: inherit;
  padding: 0 1rem 4rem 1rem;
}

.category-head {
  font-size: 2rem;
  padding-bottom: 1rem;
}

.category-head label {
  display: flex;
  align-items: center;
  justify-content: left;
}

.category-head span {
  margin-left: 20px;
}

.category-list {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(255px, 1fr));
  grid-gap: 10px;
}

.category-single {
  margin-top: 10px;
  font-size: 1.11rem;
  border-radius: 8px;
  box-shadow: 2px 2px 5px #3333330d;
  border: 1px solid #fff;
  transition: all 0.5s ease;
  padding: 6px 0 2px 0;
  background: #fff;
  display: grid;
  grid-template-areas:
    'A A A A A'
    'B B B C C';
  grid-gap: 10px;
  grid-template-rows: auto 1.8rem; 
}


.category-single label {
  padding: 0 1rem 0 1rem;
  width: 100%;
}

.category-single label:nth-child(1) {
  grid-area: A;
}

.category-single label:nth-child(1) span {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.category-single label:nth-child(2) {
  grid-area: B;
}


.category-single label:nth-child(3) {
  grid-area: C;
}

.category-single:hover {
  cursor: pointer;
  transform: translateY(-6px);
  transition: all 0.3s ease;
  box-shadow: 0 26px 40px -24px rgb(0 36 100 / 30%);
}
</style>
