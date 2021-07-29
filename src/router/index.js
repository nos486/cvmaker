import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cv from '../views/Cv'
import Base from '../templates/Starter'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cv',
    component: Cv
  },
  {
    path: '/cv/:username',
    component: Base
  },
  {
    path: '/about',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cv.vue')
  },
  { path: '*', redirect: '/' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   const publicPages = ["/cv"];
//   let authRequired = !(to.path === "/")
//   publicPages.forEach(((value, index) => {
//     console.log(to.path,value)
//       if (to.path.includes(value)) authRequired = false
//   }))
//   const loggedIn = localStorage.getItem('user');
//   if (authRequired && !loggedIn) {
//     return next('/');
//   }
//
//   next();
// })
export default router
