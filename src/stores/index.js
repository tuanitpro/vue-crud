import Vue from 'vue';
import Vuex from 'vuex';
import customerStore from './customer';
import createLogger from 'vuex/dist/logger';
Vue.use(Vuex);
const plugins = process.env.NODE_ENV !== 'production' ? [createLogger()] : [];
export default new Vuex.Store({
  modules: {
    customerStore
  },
  plugins: plugins
});
