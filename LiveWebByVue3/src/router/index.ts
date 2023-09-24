import { createRouter, createWebHistory } from 'vue-router'
import homeRouter from "@/views/viewHome/router/HomeRouter.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/viewHome/HomeView.vue')
    }
  ]
})



router.beforeEach(async (to, from, next) => {
  next();
})



function routerListGet(routerList: any, type: string) {
  if(type === 'father')
  {
    for (let i = 0; i < homeRouter.length; i++) {
      const sigRouter = {
        path: homeRouter[i].path,
        name: homeRouter[i].name,
        component : homeRouter[i].component
      };
      router.addRoute(sigRouter);
    }
  } 
}

routerListGet(homeRouter, 'father');

export default router
