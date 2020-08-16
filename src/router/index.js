import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/color',
    name: 'Color Settings',
    component: () => import('@/views/Color.vue')
  },
  {
    path: '*',
    name: '404 Not Found',
    component: import('../views/error/404.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
