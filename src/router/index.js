import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/dashboard/index'
import Contact from '@/views/contact/index'
import Services from '@/views/services/index'
import Cooperate from '@/views/cooperate/index'
import CeShi from '@/views/ceshi/index'
import AA from '@/components/wuliao/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Dashboard
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/services',
      name: 'services',
      component: Services
    },
    {
      path: '/cooperate',
      name: 'cooperate',
      component: Cooperate
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: CeShi
    },
    {
      path: '/aa',
      name: 'aa',
      component: AA
    }
  ]
})
