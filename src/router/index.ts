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
    // which is lazy-loaded when the route is visited. 懒加载
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
  history: createWebHistory('test'),// history 模式，此处部署非根目录，而是 test 目录下,所以括号内配置 test，如果是根目录则改成 createWebHistory()
  // history: createWebHashHistory('test'),// // 可切换成 hash 模式，如果面向企业对 url 不敏感可用此模式，建议不熟者使用 hash 模式。
  routes, // `routes: routes` 的缩写
});

export default router;
