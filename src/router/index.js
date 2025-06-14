import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
// 其他页面...


const routes = [
  { path: '/', name: 'Home', component: Home },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
