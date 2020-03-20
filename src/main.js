import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './stores';
import vuetify from './plugins/vuetify';
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'

Vue.use(Element, { locale })
Vue.config.productionTip = false;
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app');
