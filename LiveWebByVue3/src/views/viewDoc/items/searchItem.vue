
<script setup lang="ts">
import ArrowIcon from '../icons/IconArrow.vue';
import DocRouter from '@/views/viewDoc/router/DocRouter.js';
import SearchIcon from '../icons/IconSearch.vue';
import { ref } from 'vue';

const searchShow = ref(false);
let searchList = new Array();
let inputValue: string = '';
let categoryLen = Object.keys(DocRouter).length;
const showSearchList = (event: any) => {
  inputValue = event.target.value;
  searchShow.value = false;
  searchList = [];
  if (inputValue === '' || categoryLen <= 0) {
    return;
  }

  Object.values(DocRouter).forEach((cItem: any) => {
    cItem.info.forEach((rItem: any) => {
      if (rItem.title.includes(inputValue)) {
        searchList.push(rItem);
      }
    })
  })

  if (searchList.length === 0) {
    return;
  }
  searchShow.value = true;
}

const highlightText = (text: any, keyword: any) => {
  const regex = new RegExp(keyword, 'i');
  return text.replace(regex, '<span style="color:rgb(58, 223, 58)">$&</span>');
}

defineProps({
  jump2doc: {
    type: Function,
    default: () => {},
  },
})
</script>

<template>
  <div class="search-button">
    <label>
      <component :is="SearchIcon"></component>
    </label>
    <input type="text" placeholder="Search docs" autocomplete="off" @input="showSearchList($event)" />
  </div>
  <div class="search-show" v-show="searchShow">
    <div class="search-list">
      <div class="search-item" v-for="item in searchList" :key="item.title" @click="jump2doc(item.path)">
        <div class="item-info" >
          <span v-html="highlightText(item.title, inputValue)" :title="item.title"></span>
        </div>
        <div class="item-icon">
          <ArrowIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: black;
}

.search-button {
  --v: 45px;
  width: 28%;
  height: var(--v);
  margin: 0 auto;
  display: flex;
  padding: 0 10px 0 10px;
  border-radius: var(--v);
  border: 2px solid rgb(240, 210, 215);
}

.search-button:hover {
  border: 2px solid rgb(228, 141, 155);
}

.search-button label {
  display: flex;
  align-items: center;
  justify-items: center;
}

.search-button input {
  appearance: none;
  border: none;
  font-size: 1.2em;
  height: 100%;
  outline: none;
  padding: 0 0 0 8px;
  width: calc(100% - 45px);
  background-color: #f9f9f9;
}

.search-list{
  margin: 10px auto 0 auto;
  width: calc(28% + 100px);
  border-radius: 10px;
  border: 2px solid rgb(228, 141, 155);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.search-list {
  padding: 2px 8px 2px 8px;
}

.search-item {
  height: 40px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-items: center;
  flex: auto;
}

.search-item div {
  display: flex;
  align-items: center;
  justify-items: center;
}

.item-info {
  width: calc(100% - 32px);
  color: plum;
  margin: 0 auto;
}

.search-item:hover{
  cursor: pointer;
  transform: translateY(-3px);
  transition: all 0.3s ease;
  box-shadow: 0 12px 20px -12px rgb(0 36 100 / 30%);
}
.item-icon {
  width: 32px;
}
</style>