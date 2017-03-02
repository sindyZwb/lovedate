import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import detail from '../components/detail/detail'
import message from '../components/message/message'
import nearby from '../components/nearby/nearby'
import profile from '../components/profile/profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: App
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
