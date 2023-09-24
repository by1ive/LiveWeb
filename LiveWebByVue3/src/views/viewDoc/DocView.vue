<script setup lang="ts">
import SearchIcon from "./icons/IconSearch.vue";
import searchItem from "./items/SearchItem.vue";
import DocRouter from "@/views/viewDoc/router/DocRouter.js";
import {ref} from "vue";

const searchShow = ref(false);
const searchList = new Array();
const inputValue = ref("");
const showSearchList = (event : any) => {
  inputValue.value = event.target.value;
  searchShow.value = false;
  searchList.splice(0, searchList.length);
  if (inputValue.value === '' || DocRouter.length <= 0) {
    return;
  }
  for (let i = 0; i < DocRouter.length; i++) {
    if (DocRouter[i].title.includes(inputValue.value)) {
      searchList.push(DocRouter[i]);
    }
  }
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
            <searchItem>
              <template #info>
                <RouterLink :to="item.path"><span v-html="highlightText(item.title, inputValue)"></span></RouterLink>
              </template>
            </searchItem>
          </div>
        </div>
      </div>
      <div class="doc-page">

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
  display: flex;
}
.doc-search{
  flex: auto;
  margin: 20px 0 20px 0;
  position: relative;
}

.search-button{
  --v: 45px;
  width: 28%;
  height: var(--v);
  margin: 0 auto;
  display: flex;
  padding: 0 10px 0 10px;
  border-radius: var(--v);
  border: 2px solid rgb(228, 141, 155);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
}

.search-button label{
  display: flex;
  align-items: center;
  justify-items:center;
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

.el-checkbox-group {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 200px);
  grid-gap: 10px;
}

.el-checkbox {
  width: 200px;
  background-color: skyblue;
  margin-top: 5px;
}

@media (min-width: 1024px) {
  .doc-search{
    width: var(--item-div);
  }

}
</style>
  