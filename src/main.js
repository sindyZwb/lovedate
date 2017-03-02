// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import VueResource from 'vue-resource'
import './common/style/index.css'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true
/* eslint-disable no-new */
let app = new Vue({
  router
}).$mount('#app')

export default app
