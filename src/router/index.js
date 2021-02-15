import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Clients from '../views/Clients.vue'
import Services from '../views/Services.vue'
import Contact from '../views/Contact.vue'
import Join from '../views/JoinUs.vue'


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
  }
  ,
  {
    path: '/Services',
    name: 'Services',
    component: Services
  }
  ,
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/joinus',
    name: 'Joinus',
    component: Join
  }
]

const router = new VueRouter({
  routes
})

export default router
