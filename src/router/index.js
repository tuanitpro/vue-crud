import Vue from 'vue';
import Router from 'vue-router';
import ProductPage from '@/components/ProductPage';
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
      path: '/product/:id',
      name: 'ProductPage',
      component: ProductPage
    }
  ]
})
