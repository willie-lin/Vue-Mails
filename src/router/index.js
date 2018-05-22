import Vue from 'vue'
import Router from 'vue-router'

// 懒加载

const app = () => import('../components/app.vue')
const register = () => import('../components/register.vue')
const login = () => import('../components/login.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', redirect: '/home/register'},
    {
      path: '/home',
      component: app,
      children: [
        {path: 'login', component: login},
        {path: 'register', component: register}
      ]
    }
  ]
})
