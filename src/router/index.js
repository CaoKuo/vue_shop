import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Categories from '../components/goods/Categories.vue'
import Params from '../components/goods/Params.vue'
import Goods from '../components/goods/Goods.vue'
import Add from '../components/goods/Add.vue'
import Order from '../components/order/Order.vue'
import Report from '../components/report/Report.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: '/login' },
  { path: '/login', component: Login },
  {
    path: '/home',
    component: Home,
    redirect: '/welcome',
    children: [{
      path: '/welcome',
      component: Welcome
    }, {
      path: '/users',
      component: Users
    }, {
      path: '/rights',
      component: Rights
    }, {
      path: '/roles',
      component: Roles
    }, {
      path: '/categories',
      component: Categories
    }, {
      path: '/params',
      component: Params
    }, {
      path: '/goods',
      component: Goods
    }, {
      path: '/goods/add',
      component: Add
    }, {
      path: '/orders',
      component: Order
    }, {
      path: '/reports',
      component: Report
    }
    ]
  }
]

const router = new VueRouter({
  routes
})

// 监听是否登录并产生了token进入的该网页
router.beforeEach((to, from, next) => {
  // 用户直接访问登录页时， 直接放行， 执行next()
  if (to.path === '/login') {
    return next()
  } else {
    // 如果不是直接访问登录页 检查是否有token 若没有返回登录页 有直接放行
    const tokenStr = window.sessionStorage.getItem('token')
    if (!tokenStr) return next('/login')
    next()
  }
})

export default router
