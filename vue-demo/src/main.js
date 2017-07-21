import Vue from 'vue'
import App from './App.vue'

import VueRouter from 'vue-router'
import axios from 'axios'
//import config from './axioConfig.js'

import routes from './routeConfig.js'

import './assets/js/font.js'

import './assets/css/base.css'


import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

import stores from './store/store'

Vue.use(VueRouter);

Vue.use(Mint);


var instance = axios.create(
      {
        baseURL: '',
        timeout: 1000,
     //   headers: {'X-Requested-With': 'XMLHttpRequest'}
        headers: {'Content-type': 'application/json'}
      }
  );

Vue.prototype.$http = instance


const router = new VueRouter({
  routes 
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store:stores,
  template: '<App/>',
  components: { App }
})
