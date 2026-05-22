import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/home.vue'
import Services from '../pages/services.vue'
import Clients from '../pages/clients.vue'
import Contact from '../pages/contact.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/services', component: Services },
  { path: '/clients', component: Clients },
  { path: '/contact', component: Contact },
  { path: '/:pathMatch(.*)*', redirect: '/' } // optional catch-all
]

const router = createRouter({
  history: createWebHistory('/my-portfolio/'), // <--- set your subfolder here
  routes
})

export default router

