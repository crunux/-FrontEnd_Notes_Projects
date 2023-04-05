import { createRouter, createWebHistory } from "vue-router";
import HomeView from '@/views/HomeView.vue'
import SignInView from '@/views/SignInView.vue'
import SignUpView from '@/views/SignUpView.vue'
import{ useAuthStore } from '@/store/useAuth.js'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            requireAuth: true
        }
    },
    {
        path: '/signin',
        name: 'signin',
        component: SignInView,
        meta: {
            requireAuth: false
        }
    },
    {
        path: '/signup',
        name: 'signup',
        component: SignUpView,
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
  