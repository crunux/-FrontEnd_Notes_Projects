import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignInView
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpView
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router
  