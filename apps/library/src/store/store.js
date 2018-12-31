import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import createLogger from 'vuex/dist/logger';
import { slugify, sleep } from '../util';

const isProduction = process.env.NODE_ENV === 'production';

const FETCH_DATA_LOADING = 'FETCH_DATA_LOADING';
const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
const FETCH_DATA_ERROR = 'FETCH_DATA_ERROR';

Vue.use(Vuex);

export default new Store({
  strict: !isProduction,

  plugins: !isProduction ? [createLogger()] : [],

  state: {
    mediaList: [],
    isLoading: false,
    hasError: false,
  },

  getters: {
    mediaTypeList: state => (
      state.mediaList.length !== 0
        ? ['All', ...new Set(state.mediaList.map(m => m.type))]
        : []
    ),
    isNotFound: state => state.route.path !== '/'
      && !(state.isLoading || state.mediaList.length === 0)
      && !state.mediaList.map(m => slugify(m.type)).includes(state.route.params.type),
  },

  mutations: {
    [FETCH_DATA_LOADING](state) {
      const isLoading = true;
      Object.assign(state, { isLoading });
    },
    [FETCH_DATA_SUCCESS](state, mediaList) {
      const isLoading = false;
      const hasError = false;
      Object.assign(state, { mediaList, isLoading, hasError });
    },
    [FETCH_DATA_ERROR](state) {
      const mediaList = [];
      const isLoading = false;
      const hasError = true;
      Object.assign(state, { mediaList, isLoading, hasError });
    },
  },

  actions: {
    async fetchData({ commit }, url) {
      commit(FETCH_DATA_LOADING);

      try {
        // Artificial delay to show loading spinner
        await sleep(1000);
        const response = await fetch(url);
        const json = await response.json();
        commit(FETCH_DATA_SUCCESS, json);
      } catch (error) {
        /* eslint-disable-next-line no-console */
        console.error(error.message);
        // You could render an error component, but we'll just log to console
        commit(FETCH_DATA_ERROR);
      }
    },
  },
});
