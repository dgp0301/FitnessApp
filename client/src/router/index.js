import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Feed from '../views/Feed.vue'
import session from '../models/session'
import Admin from '../views/Admin.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/',name: 'Home', component: Home },
  { path: '/login',name: 'Login', component: Login },
  { path: '/signup',name: 'Signup', component: Signup },
  { path: '/admin',name: 'Admin', component: Admin },
  { path: '/feed',name: 'Feed', component: Feed, 
    beforeEnter: checkUserLogin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/track',
    name: 'Track',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Track.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

function checkUserLogin(to, from, next){
    if(session.user)
      next()
    else
      next('login')
}

export default router
