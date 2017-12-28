import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import buttonn from '@/components/Basic/buttonn'
import layoutt from '@/components/Basic/layoutt'
import colorr from '@/components/Basic/colorr'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Basic/buttonn',
      name: 'buttonn',
      component: buttonn
    },
    {
      path: '/Basic/colorr',
      name: 'colorr',
      component: colorr
    },
    {
      path: '/Basic/layoutt',
      name: 'layoutt',
      component: layoutt
    },
  ]
})
