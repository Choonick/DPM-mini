import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import mainPage from '@/components/mainPage'
// import startPage from '@/components/startPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
      // children: [
      //   {
      //     path: '/',
      //     component: startPage
      //   },
      //   {
      //     path: '/chat',
      //     component: mainPage
      //   }
      // ]
    }
  ]
})
