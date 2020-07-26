import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import './plugins/avue'
import axios from 'axios'

Vue.config.productionTip = false

Vue.prototype.$http = axios.create({
  // baseURL: 'http://localhost:80/'
  baseURL: process.env.VUE_APP_API_URL || '/'
})



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
