import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/SplideCard',
    name: 'SplideCard',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/SplideCard.vue')
  },
  {
    path: '/headerPage',
    name: 'headerPage',
    component: () => import('../components/HeaderPage.vue')
  },
  {
    path: '/SearchHeader',
    name: 'SearchHeader',
    component: () => import('../components/SearchHeader.vue')
  },
  {
    path: '/IncreaseCreditProfile',
    name: 'IncreaseCreditProfile',
    component: () => import('../components/IncreaseCreditProfile.vue')
  },
  {
    path: '/OrderProfile',
    name: 'OrderProfile',
    component: () => import('../components/OrderProfile.vue')
  },
  {
    path: '/ProductBuyList',
    name: 'ProductBuyList',
    component: () => import('../components/ProductBuyList.vue')
  },
  
  {
    path: '/UserInfoComponnet',
    name: 'UserInfoComponnet',
    component: () => import('../components/UserInfoComponnet.vue')
  }, 

  {

    path: '/DetailCategory/:categoryid',
    name: 'DetailCategory',
    meta: {
      auth: true
  },
    component: () => import('../components/DetailCategory.vue')
  }, 


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
