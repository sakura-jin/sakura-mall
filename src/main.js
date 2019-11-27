import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'

Vue.config.productionTip = false

FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import './assets/css/reset.css';
import './assets/vue-font/iconfont.css';
import 'swiper/dist/css/swiper.css'