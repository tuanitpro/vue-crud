import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'CustomerList',
      component: () => import('@/components/pages/customer')
    },
    {
      path: '/paging',
      name: 'paging',
      component: () => import('@/components/pages/paging')
    },
    {
      path: '/grapql',
      name: 'grapql',
      component: () => import('@/components/pages/graphqlapi')
    }
  ]
})
