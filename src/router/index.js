import { createRouter, createWebHistory } from "vue-router";
import{ useAuthStore } from '@/store/useAuth.js'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */'@/views/HomeView.vue'),
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/signin',
        name: 'signin',
        component: () => import(/* webpackChunkName: "signin" */'@/views/SignInView.vue'),
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: () => import(/* webpackChunkName: "signup" */'@/views/SignUpView.vue'),
        meta: {
            requireAuth: false
        }
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
  })

router.beforeEach((to, from, next)=>{
    const auth = useAuthStore()
    const isAuth = auth.token
    if ((to.meta.requireAuth) && (isAuth === null)){
        next('signin')
    }else{
        next()
    }
    //TODO
})
  
export default router
  