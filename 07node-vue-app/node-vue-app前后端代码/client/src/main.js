/**
 * MEVN全栈开发: Mongo + Express + Vue + Vuex + Node
 * 微信公众号: why2wm (下载代码)
 * QQ群: 27732356   (技术交流)
 */
import Vue from 'vue';
import App from './App';
import router from './router';
import axios from './utils/http';
import store from './store';

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
