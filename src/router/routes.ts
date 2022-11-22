import type  {RouteRecordRaw}  from 'vue-router'
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/home-page.vue"),
  },

  {
    path: "/home",
    name: RouteName.Home,
    component: () => import("../views/home-page.vue"),
  },
  { 
    path: '/users/page=:page',
    name: RouteName.List,
    component: () => import('../views/home-page.vue'),
    props: true,
  },
  {
    path: '/user/:id',
    name: RouteName.User,
    component: () => import('../views/home-page.vue'),
    props: true,
  }
];

export default routes;