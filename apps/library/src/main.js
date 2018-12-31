import 'whatwg-fetch';

import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import store from './store/store';
import router from './router/router';
import App from './App.vue';

sync(store, router);

// You are running Vue in development mode.
// Make sure to turn on production mode when deploying for production.
// See more tips at https://vuejs.org/guide/deployment.html
Vue.config.productionTip = false;

const vue = new Vue({
  store,
  router,
  render: createElement => createElement(App),
});

vue.$mount('#app');
