import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    meta: {
      title: '首页'
    },
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    meta: {
      title: '关于我们'
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: '/404',
    name: '404',
    meta: {
        title: '找不到页面'
    },
    component: () => import (/* webpackChunkName: "404" */ '../components/404.vue')
  }
];

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHistory(),
  routes,
});

// const router = createRouter({
//   // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
//   history: createWebHashHistory(),
//   routes, // `routes: routes` 的缩写
// })

export default router;
