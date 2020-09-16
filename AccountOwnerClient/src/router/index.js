import Vue from 'vue'
import Router from 'vue-router'
import mainphu from '@/components/mainphu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainphu',
      component: mainphu
    }
  ]
})
