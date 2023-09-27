import hljs from 'highlight.js';
import 'highlight.js/styles/github.css' //样式
import type { Directive } from 'vue';

//创建v-highlight全局指令
const highlight = (el : any) => {
  const blocks = el.querySelectorAll('pre code');
  blocks.forEach((block : any)=>{
    hljs.highlightBlock(block)
  })
}


const directive: Directive = {
    mounted(el: any) {
      highlight(el);
    },
    updated(el: any) {
      highlight(el);
    }
}

export default directive