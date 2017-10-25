import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index.vue'
import Advanced from '@/pages/Advanced.vue'
import NotFoundComponent from '@/pages/NotFoundComponent.vue'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/advanced',
      name: 'Advanced',
      component: Advanced
    },
    { 
      path: '*',
      component: NotFoundComponent
    }

  ]
})
