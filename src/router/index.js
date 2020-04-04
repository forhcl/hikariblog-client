import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { //主页路由
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Profile.vue')
  },
  { //标签页面路由
    path: '/tag',
    component: () => import('../views/Tag.vue')
  },
  { //分类页面路由
    path: '/category',
    component: () => import('../views/Category.vue')
  },
  {
    //编辑页面
    path: '/edit',
    component: () => import('../views/Edit.vue')
  },
  {
    //文章列表页面
    path: '/list',
    component: () => import('../views/List.vue')
  },
  {
    //某一个文章页面
    path: '/post/:id',
    component: () => import('../views/Post.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
