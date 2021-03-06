import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Type from '../views/Type.vue'
import Car from '../views/Car.vue'
import Person from '../views/Person.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/type',
    component:Type
  },
  {
    path:'/car',
    component:Car
  },
  {
    path:'/person',
    component:Person
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
