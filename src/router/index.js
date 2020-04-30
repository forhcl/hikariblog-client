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
    component: () => import('../views/Profile.vue'),
    meta:{
      //区分路由跳转是否需要拦截
      requireAuth:true
    }
  },
  { //标签页面路由
    path: '/tag',
    component: () => import('../views/Tag.vue'),
    meta:{
      //区分路由跳转是否需要拦截
      requireAuth:true
    }
  },
  {
    //标签下的文章列表
    path:'/tag/:id',
    component:() => import('../views/PostOfTag.vue'),
    meta:{
      //区分路由跳转是否需要拦截
      requireAuth:true
    }
  },
  { //分类页面路由
    path: '/category',
    component: () => import('../views/Category.vue'),
    meta:{
      //区分路由跳转是否需要拦截
      requireAuth:true
    }
  },
  {
    //分类下面的文章列表
    path:'/category/:id',
    component: () => import('../views/PostOfCategory.vue'),
    meta:{
      //区分路由跳转是否需要拦截
      requireAuth:true
    }
  },
  {
    //全文搜索结果
    path:'/search',
    component: () => import('../views/ResultOfFullTextSearch.vue'),

  },
  {
    //编辑页面
    path: '/edit',
    component: () => import('../views/Edit.vue'),
    meta:{
      //区分路由跳转是否需要拦截
      requireAuth:true
    }
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
  },
  {
    //登陆或者注册
    path:'/loginOrRegister',
    name:'loginOrRegister',
    component:()=>import('@/components/user/login/LoginOrRegisterDialog.vue'),
    //默认子路由！！！
    redirect: "/loginOrRegister/login",
    children:[
      {
        path:'login',
        component:()=>import('@/components/user/login/LoginForm.vue')
      },
      {
        path:'register',
        component:()=>import('@/components/user/login/RegisterForm.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
