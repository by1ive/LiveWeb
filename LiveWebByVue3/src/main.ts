import './assets/base.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import * as directives from '@/directives'
import type { Directive } from 'vue';

const app = createApp(App);
Object.keys(directives).forEach(key => { 
    //Object.keys() 返回一个数组，值是所有可遍历属性的key名
   app.directive(key, (directives as { [key: string ]: Directive })[key])  //key是自定义指令名字；后面应该是自定义指令的值
 })
app.use(router)
    .mount('#app');

