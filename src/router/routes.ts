import type  {RouteRecordRaw}  from 'vue-router'
import { RouteName } from '@/constants/route-names'

const routes: RouteRecordRaw[] = [

  {
    path: "/",
    name: RouteName.HOME,
    component: () => import("../views/home-page.vue"),
  },
  { 
    path: '/page=:page',
    name: RouteName.LIST,
    component: () => import('../views/home-page.vue'),
    props: true,
  },
  {
    path: '/user/:id',
    name: RouteName.USER,
    component: () => import('../views/single-user.vue'),
  },
];

export default routes;