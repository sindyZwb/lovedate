import Vue from 'vue'
import Router from 'vue-router'
import detail from '../components/detail/detail'
import message from '../components/message/message'
import nearby from '../components/nearby/nearby'
import profile from '../components/profile/profile'
import Home from '../components/home/home'
import Login from '../components/login/Login'
import LoginAccout from '../components/login/LoginAccout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/login-account',
      name: 'LoginAccout',
      component: LoginAccout
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/',
      name: 'message',
      component: message
    },
    {
      path: '/',
      name: 'nearby',
      component: nearby
    },
    {
      path: '/',
      name: 'profile',
      component: profile
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
