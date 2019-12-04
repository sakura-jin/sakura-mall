import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'

Vue.config.productionTip = false
// vue实例可以作为事件总线
Vue.prototype.$bus=new Vue();
// 移动端300毫秒延迟
FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

import './assets/css/reset.css';
import './assets/vue-font/iconfont.css';
import 'swiper/dist/css/swiper.css'