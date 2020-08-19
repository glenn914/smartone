import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element'
import './plugins/avue'
import './plugins/v-chart'
import axios from 'axios'

Vue.config.productionTip = false

// Vue.prototype.$http = axios.create({
//   // baseURL: 'http://localhost:80/'
//   baseURL: process.env.VUE_APP_API_URL || '/'

// })

Vue.prototype.$http = axios
axios.defaults.baseURL = process.env.VUE_APP_API_URL || '/'
// http request 拦截器
axios.interceptors.request.use(
  config => {
    var token = localStorage.getItem('token');
    if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.Authorization = 'Bearer ' + localStorage.token
    }
    return config;
  },
  err => {
    return Promise.reject(err);
});



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
