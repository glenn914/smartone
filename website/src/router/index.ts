import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
// import Home from '../views/Home.vue'
// import Main from '../views/Main.vue'
// import LFC from '../views/projects/LFC.vue'



Vue.use(VueRouter)

  const routes: RouteConfig[] = [
  {name:'login', path:'/login',component:()=>import('../views/Login.vue')},
  {
    path: '/',component: ()=> import('../views/Main.vue'),
    children:[
      // {name:'home',path:"/",component:()=> import('../views/projects/lfc/Test.vue')},
      {name:'home',path:"/",component:()=> import('../views/Home.vue')},
      {name:"SchoolBrief",path:"/projects/lfc/SchoolBrief", component:()=> import('../views/projects/lfc/SchoolBrief.vue')},
      {name:"SchoolDetail",path:"/projects/lfc/:schoolCode/SchoolDetail",props:true, component:()=> import('../views/projects/lfc/SchoolDetail.vue')},
      {name:'jaingxuejin',path:'/projects/scholarship',component:()=> import('../views/projects/Scholarship.vue')},
      {name:'usercreate',path:'/users/manage',component:()=> import('../views/users/UserCRUD.vue')},
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
