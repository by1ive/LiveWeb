<script setup lang="ts">
import  'github-markdown-css'
import { marked }from 'marked';
import { defineProps, ref, watch } from 'vue';
import axios from 'axios';
const props = defineProps({
    info: Object
})

const emits = defineEmits(['complete'])
const doc = ref("");
watch(() => props.info,  (newInfo) => {
  if (newInfo?.type == '.md') {
    mdShow(newInfo);
  }
});

const mdShow = async (newInfo: any) => {
  if (newInfo) {
    try {
      const response = await axios.get(`/docList/${newInfo.path}`);
      const imagesPath = `/docList/${newInfo.path}`.replace(/\/[^/]+\.md$/, '/images');
      const markdownContent = response.data.replace(/!\[(.*?)\]\(images\/(.*?)\)/g, '![$1]('+ imagesPath
        + '/$2)');
      const htmlContent = marked(markdownContent);
      doc.value = htmlContent;
      emits('complete', true);
    } catch (error) {
      emits('complete', false);
    }
}
}
</script>


<template>
<div class="markdown-body">
  <div v-highlight v-html="doc"></div>
</div>
</template>

<style scoped>
.markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }

    @media (max-width: 1280px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>