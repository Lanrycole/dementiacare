import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contact from '../views/Contact.vue'
import Join from '../views/JoinUs.vue'
import consultation from '../views/consultation.vue'
import staffing from '../views/staffing.vue'
import training from '../views/training.vue'
import homeservice from '../views/homeservice.vue'
import termsofUse from '../views/TermsofUse.vue'
import accesibility from '../views/AccesibilityPolicy.vue'
import privacy from '../views/PrivacyPolicy.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/joinus',
    name: 'joinus',
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
    path: '/homeservice',
    name: 'homeservice',
    component: homeservice,
  },
  {
    path: '/training',
    name: 'training',
    component: training,
  },
  {
    path: '/terms_Of_Use',
    name: 'termsofUse',
    component: termsofUse,
  },
  {
    path: '/accesibility_Policy',
    name: 'accessibility',
    component: accesibility,
  },
  {
    path: '/privacy_Policy',
    name: 'privacy',
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
