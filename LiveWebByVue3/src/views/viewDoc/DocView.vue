<script setup lang="ts">
import SearchIcon from "./icons/IconSearch.vue";
import SearchItem from "./items/SearchItem.vue";
import CategoryItem from "./items/CategoryItem.vue";
import DocRouter from "@/views/viewDoc/router/DocRouter.js";
import {ref} from "vue";

//输入逻辑
const searchShow = ref(false);
let searchList = new Array();
let inputValue:string = '';
let categoryLen = Object.keys(DocRouter).length;
const showSearchList = (event : any) => {
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
  });

  if (searchList.length === 0) {
    return;
  }
  searchShow.value = true;
}

const highlightText = (text: any, keyword: any) =>{
    const regex = new RegExp(keyword, 'i');
    return text.replace(regex, '<span style="color:rgb(58, 223, 58)">$&</span>');
}
</script>

<template>
  <div class="doc">
    <div class="doc-search">
      <div class="search-button">
        <label><component :is="SearchIcon"></component></label>
        <input type="text" placeholder="Search docs" autocomplete="off" @input="showSearchList($event)"/>
      </div>
      <div class="search-show" v-show="searchShow">
        <div class="search-list" v-for="item in searchList" :key="item.title">
          <SearchItem>
            <template #info>
              <a :href="item.path"><span v-html="highlightText(item.title, inputValue)" :title="item.title"></span></a>
            </template>
          </SearchItem>
        </div>
      </div>
    </div>
    <div class="doc-page">
        <CategoryItem></CategoryItem>
    </div>
  </div>
</template>
  
<style scoped>
*{
  white-space: nowrap; /* 禁止换行 */
  overflow: hidden; /* 隐藏溢出内容 */
  text-overflow: ellipsis;
  color: black;
}

.doc{
  position: relative;
  padding: 0px 4rem 0px 4rem;
}

.doc-search{
  margin: 20px 0 20px 0;
  position: relative;
}

.doc-page{
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  flex-wrap: wrap;
}

.search-button{
  --v: 45px;
  width: 28%;
  height: var(--v);
  margin: 0 auto;
  display: flex;
  padding: 0 10px 0 10px;
  border-radius: var(--v);
  border: 2px solid rgb(240, 210, 215);
}
.search-button:hover{
  border: 2px solid pink;
}

.search-button label{
  display: flex;
  align-items: center;
  justify-items: center;
}

.search-button input{
  appearance: none;
  border: none;
  font-size: 1.2em;
  height: 100%;
  outline: none;
  padding: 0 0 0 8px;
  width: calc(100% - 45px);
}

.search-show{
  margin: 10px auto 0 auto;
  width: calc(28% + 100px);
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgb(228, 141, 155);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.search-list{
  padding: 2px 8px 2px 8px;
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
  