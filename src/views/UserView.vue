
<script setup>
import { useUserStore } from '@/store/useUsers.js'
import { ref } from 'vue'
import CardNote from '@/components/CardNote.vue';
import CreateNote from '@/components/CreateNote.vue'
import { useAuthStore } from '@/store/useAuth.js'
import router from '@/router'
const useStore = useUserStore()
const auth = useAuthStore()

await useStore.fetchUser()

const user = useStore.getUser

let isOpen = ref(false)

if (useStore.expireToken) router.push({ name: "signin"})

const logout = () =>{
    auth.logout()
    router.push({ name: "signin"})
}

</script>

<template>
    <div>
        <div class="flex place-content-between w-full max-h-50 items-center">
            <button class=" flex w-18 h-8 p-2 m-1 rounded-md bg-gray-200 hover:bg-emerald-500 text-center items-center hover:drop-shadow-md hover:text-white" @click="isOpen = true"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></button>
            <h2 class="flex flex-row w-24" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> {{ user.username }}</h2>
            <button class="flex w-18 h-8 p-2 m-1 rounded-md bg-gray-200	 hover:bg-emerald-500 text-center items-center hover:drop-shadow-md hover:text-white" @click.prevent="logout"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg></button>
        </div>
        <div class="flex flex-col items-center pt-2 justify-center min-h-screen">
            <div class="w-11/12 h-96 mt-1 rounded-md shadow-md bg-emerald-500 bg-auto flex flex-col items-center justify-center text-white font-bold">
                <h1 class="text-[40px]">BIENVENIDO!</h1>
                <h2 class="text-[34px] overline">{{ user.name }} {{ user.lastname  }}</h2>
            </div>
                <teleport to='body'>
                    <CreateNote :open="isOpen" @close="isOpen = !isOpen"/>
                </teleport>
            <div class="grid lg:grid-cols-3 md:grid-cols-2" >
                <div v-for="note in user.notes" :key="note.id">
                    <CardNote :note="note"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>