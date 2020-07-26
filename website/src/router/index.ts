import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
// import Main from '../views/Main.vue'
// import LFC from '../views/projects/LFC.vue'



Vue.use(VueRouter)

  const routes: RouteConfig[] = [
  {
    path: '/',
    component: ()=> import('../views/Main.vue'),
    children:[
      {name:'home',path:'/',component:()=> import('../views/Home.vue')},
      {name:"国际免午",path:"/projects/lfc",component:()=> import('../views/projects/LFC.vue')}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
