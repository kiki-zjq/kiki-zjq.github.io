import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Resume from '@/components/resume/index.vue'
import Experience from '@/components/experience/index.vue'
import Others from '@/components/others/index.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/resume',
      name:'Resume',
      component:Resume
    },
    {
      path:'/experience',
      name:'Experience',
      component:Experience
    },
    {
      path:'/others',
      name:'Others',
      component:Others
    }
  ]
})
