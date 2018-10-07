import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import Intro from '@/views/intro'
import Knowledge from '@/views/knowledge'
import Entry from '@/views/entry'
import Detail from '@/views/detail'
import Range from '@/views/range'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: '/testdist',
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta:{
        keepAlive: true
      }
    },
    {
      path: '/intro',
      name: 'intro',
      component: Intro
    },
    {
      path: '/knowledge',
      name: 'knowledge',
      component: Knowledge
    },
    {
      path: '/entry',
      name: 'entry',
      component: Entry,
      meta:{
        keepAlive: true
      }
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: Detail
    },
    {
      path: '/range',
      name: 'range',
      component: Range
    }
  ]
})
