import Vue from 'vue'
import Router from 'vue-router'
import Detail from '../components/detail/Detail'
import Message from '../components/message/Message'
import Nearby from '../components/nearby/Nearby'
import Profile from '../components/profile/Profile'
import Home from '../components/home/Home'
import Login from '../components/login/Login'
import LoginAccout from '../components/login/LoginAccout'
import Loveme from '../components/profile/Loveme'
import Profilevisiter from '../components/profile/Profilevisiter'
import Profilelover from '../components/profile/Profilelover'
import Information from '../components/profile/Information'
import Feedback from '../components/profile/Feedback'
import About from '../components/profile/About'
import Profilephone from '../components/profile/Profilephone'
import Profilevipprovilege from '../components/profile/Profilevipprovilege'
import Profilefriendcondition from '../components/profile/Profilefriendcondition'

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
      path: '/index',
      name: 'home',
      component: Home
    },
    {
      path: '/message',
      name: 'message',
      component: Message
    },
    {
      path: '/nearby',
      name: 'nearby',
      component: Nearby
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
    {
      path: '/profileloveme',
      name: 'loveme',
      component: Loveme
    },
    {
      path: '/profilevisiter',
      name: 'profilevisiter',
      component: Profilevisiter
    },
    {
      path: '/profilelover',
      name: 'profilelover',
      component: Profilelover
    },
    {
      path: '/information',
      name: 'information',
      component: Information
    },
    {
      path: '/feedback',
      name: 'feedback',
      component: Feedback
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/profilephone',
      name: 'profilephone',
      component: Profilephone
    },
    {
      path: '/profilevipprovilege',
      name: 'profilevipprovilege',
      component: Profilevipprovilege
    },
    {
      path: '/profilefriendcondition',
      name: 'profilefriendcondition',
      component: Profilefriendcondition
    }
  ]
})
