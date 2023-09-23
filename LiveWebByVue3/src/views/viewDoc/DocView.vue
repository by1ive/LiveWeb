<script setup lang="ts">
import SearchIcon from "./icons/iconSearch.vue"
import { ref } from 'vue'

const searchStr = ref('');
const showSearchList = (event : any) => {
  searchStr.value = event.target.value;
  console.log(searchStr.value);
}

</script>



<template>
    <div class="doc">
      <div class="doc-search">
        <div class="search-button">
          <label><component :is="SearchIcon"></component></label>
          <input type="search" placeholder="Search docs" autocomplete="off" v-model="searchStr" @input="showSearchList($event)"/>
        </div>
        <div class="search-show">
          <p>1111</p>
        </div>
      </div>
      <div class="doc-page">

      </div>
    </div>
</template>
  
<style>
.doc{
  position: relative;
  display: flex;
  width: inherit;
  height: inherit;
}

.doc-search{
  flex: auto;
  display: inline-block;
  margin-top: 20px;
  position: relative;
}

.doc-search div{
  flex: 1;
  display: flex;
  align-items: center;
  justify-items:center;
  border: 2px solid rgb(83, 183, 241);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  width: 25%;
  margin: 0 auto;
  min-width: 300px;
}

.doc-search div:last-child{
  margin-top: 10px;
  width: calc(25% + 100px);
  border-radius: 10px;
}

.search-button{
  --v: 45px;
  height: var(--v);
  border-radius: var(--v);
  padding: 0 10px 0 10px;
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
  