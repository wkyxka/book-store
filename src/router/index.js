import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import My from '@/pages/My'
import Share from '@/pages/Share'
import Booklist from '@/pages/Booklist'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component:Home
    },
    {
      path: '/Share',
      name: 'Share',
      component:Share
    },
    {
      path: '/Booklist',
      name: 'Booklist',
      component:Booklist
    },
    {
      path: '/My',
      name: 'My',
      component:My
    }
  ]
})
