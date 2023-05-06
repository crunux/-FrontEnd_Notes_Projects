import { createApp } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

//import Pinia
import { createPinia } from 'pinia'
// import router
import router from '@/router'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(router).use(pinia).mount('#app')
