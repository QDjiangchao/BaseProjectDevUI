import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/page/index/index'
import {getStore} from '@/utils/store';

Vue.use(Router);

const Route = [
  {
    path: '/',
    name: '首页',
    component: Layout,
    children: [
      {
        path: 'index',
        name: '首页',
        component: () => import('@/views/homePage/index')
      },
      {
        path: 'list',
        name: '列表',
        component: () => import('@/views/homePage/list')
      },
      {
        path: 'form',
        name: '表单',
        component: () => import('@/views/homePage/form')
      }
    ]
  },
  {
    path: '/login',
    name: '登录',
    component: () => import('@/page/login/index')
  },
  {
    path: '/forgetPassword',
    name: '忘记密码',
    component: () => import('@/views/register/forgetPassword')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/components/error-page/404')
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/components/error-page/403')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/components/error-page/500')
  },
]

let router = new Router({
  mode: 'history',
  routes: Route
})

export default router

router.beforeEach((to, from, next) => {
  if (!to.matched.length) {
    next("/404");
  } else {
    if (to.path === "/login") {
      next();
    } else {
      if (getStore({name: 'userInfo'}) && getStore({name: 'userInfo'}).a) {
        if (to.path === "/") {
          next("/index");
        } else {
          next();
        }
      } else {
        next("/login");
      }
    }
  }
})
