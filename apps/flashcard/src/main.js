import Vue from 'vue';
import store from './store/store';
import App from './App.vue';

// You are running Vue in development mode.
// Make sure to turn on production mode when deploying for production.
// See more tips at https://vuejs.org/guide/deployment.html
Vue.config.productionTip = false;

const vue = new Vue({
  store,
  render: createElement => createElement(App),
});

vue.$mount('#app');
