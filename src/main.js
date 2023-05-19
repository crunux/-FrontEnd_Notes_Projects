import { createApp } from 'vue';
import '@/style.css';
import App from '@/App.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import Notifications from '@kyvg/vue3-notification'

//import Pinia
import { createPinia } from 'pinia'
// import router
import router from '@/router'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(Notifications)
//Agregamos los routes a la app
app.use(router)
//Agregamos pinia a la app
app.use(pinia)

app.mount('#app')
