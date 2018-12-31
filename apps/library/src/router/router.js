import Vue from 'vue';
import Router from 'vue-router';
import MediaList from '../components/MediaList.vue';

Vue.use(Router);

// See https://router.vuejs.org/guide/advanced/lazy-loading.html for lazy-loading routes
export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'all',
      component: MediaList,
    },
    {
      path: '/:type',
      name: 'type',
      component: MediaList,
      // We don't need to pass the route params as props since we can access it from the Vuex store
      // props: true,
    },
  ],
});
