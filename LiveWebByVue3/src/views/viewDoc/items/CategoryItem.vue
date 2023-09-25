
<script setup lang="ts">
import DocRouter from "@/views/viewDoc/router/DocRouter.js";

const jump2doc = (path: string) => {
  console.log(path);
}
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
            <label class="single-title">
              <span :title="item.title">❀:&nbsp;{{ item.title }}</span>
            </label>
            <label class="single-info">
              <span>©:&nbsp;{{ item.date }}</span>
              <span>❉:&nbsp;{{ item.author }}</span>
            </label>
        </div>
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

.category{
  width: inherit;
  padding: 0 1rem 3rem 1rem;
}

.category-head{
  font-size: 2rem;
  padding-bottom: 1rem;
}

.category-head label{
  display: flex;
  align-items: center;
  justify-content: left;
}

.category-head span{
  margin-left: 20px;
}

.category-list {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 10px;
}

.category-single {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-size: 1.2rem;
  border-radius: 8px;
  box-shadow: 2px 2px 5px #3333330d;
  border: 1px solid #fff;
  transition: all 0.5s ease;
  padding: 2px 0 2px 0;
  background: #fff;
}

.category-single label{
  padding: 0 1rem 0 1rem;
  width: 100%;
}

.single-title{
  display: flex;
  align-items: center;
  justify-content: left;
}

.category-single label span{
  width: 100%;
  color: rgb(35, 36, 35);
}

.category-single:hover{
  cursor: pointer;
  transform: translateY(-6px);
  transition: all 0.3s ease;
  box-shadow: 0 26px 40px -24px rgb(0 36 100 / 30%);
}

.single-info{
  display: grid;
  grid-template-columns: 4fr 2fr;
}
</style>