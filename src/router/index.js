import Vue from 'vue'
import Router from 'vue-router'
const login = r => require.ensure([], () => r(require('@/views/login/index')), 'login');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: '/login',
      component: login
    }
  ]
})
