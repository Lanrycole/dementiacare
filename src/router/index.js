import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Clients from '../views/Clients.vue'
import Contact from '../views/Contact.vue'
import Join from '../views/JoinUs.vue'
import consultation from '../views/consultation.vue'
import staffing from '../views/staffing.vue'
import homeservice from '../views/homeservice.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/clients',
    name: 'Clients',
    component: Clients
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/join_us',
    name: 'Joinus',
    component: Join
  },
  {
    path: '/consultation',
    name: 'consultation',
    component: consultation,
  },
  {
    path: '/staffing',
    name: 'staffing',
    component: staffing,
  },
  {
    path: '/home_service',
    name: 'homeservice',
    component: homeservice,
  },
]

const router = new VueRouter({
  routes,
  // eslint-disable-next-line no-unused-vars
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
})

export default router
