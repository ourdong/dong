import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import setcard from '@/components/setcard'
import randomlist from '@/components/randomlist'
import newslist from '@/components/newslist'
import personal from '@/components/personal'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'randomlist',
      component: randomlist
  },
  {
      path: '/setcard',
      name: 'setcard',
      component: setcard
  },
  {
      path: '/index',
      name: 'index',
      component: index
  },
  {
      path: '/newslist',
      name: 'newslist',
      component: newslist
  },
  {
      path: '/personal',
      name: 'personal',
      component: personal
  }
  ]
})
