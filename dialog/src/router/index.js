import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/view/test/'
Vue.use(Router)
const router= new Router({
  routes: [
     {
      path: '/',
      name: 'Test',
      component: Test,
      meta:{
        title:'拓展子类'
        // keep-alive 缓存
      }
    },
    {
      path:'/helloworld',
      name:'HelloWorld',
      component:HelloWorld,
      meta:{
        title:"欢迎页"
      }
    }
  ]
})
router.beforeEach((to, from, next) => {
  if(to.meta){
    document.title = to.meta.title; 
  }
  next()
})
export default router
