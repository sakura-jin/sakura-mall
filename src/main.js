import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'swiper/dist/css/swiper.css'
import './assets/css/reset.css';
import './assets/vue-font/iconfont.css';

import myToast from './components/common/toast'
import VueLazyLoad from 'vue-lazyload'


Vue.config.productionTip = false
// vue实例可以作为事件总线
Vue.prototype.$bus=new Vue();
// 移动端300毫秒延迟
FastClick.attach(document.body);

// 使用懒加载
Vue.use(VueLazyLoad,{
  preLoad: 1,
  loading:require('./assets/images/common/placeholder.png')
});

Vue.use(Vant);

Vue.use(myToast);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')


