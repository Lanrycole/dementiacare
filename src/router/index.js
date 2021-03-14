import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Join from '../views/JoinUs.vue'
import consultation from '../views/consultation.vue'
import staffing from '../views/staffing.vue'
import homeservice from '../views/homeservice.vue'
import termsofUse from '../views/TermsofUse.vue'
import accesibility from '../views/AccesibilityPolicy.vue'
import privacy from '../views/PrivacyPolicy.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/Joinus',
    name: 'Joinus',
    component: Join
  },
  {
    path: '/Consultation',
    name: 'Consultation',
    component: consultation,
  },
  {
    path: '/Staffing',
    name: 'Staffing',
    component: staffing,
  },
  {
    path: '/Homeservice',
    name: 'Homeservice',
    component: homeservice,
  },
  {
    path: '/Terms_Of_Use',
    name: 'TermsofUse',
    component: termsofUse,
  },
  {
    path: '/Accesibility_Policy',
    name: 'Accessibility',
    component: accesibility,
  },
  {
    path: '/Privacy_Policy',
    name: 'Privacy',
    component: privacy,
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
