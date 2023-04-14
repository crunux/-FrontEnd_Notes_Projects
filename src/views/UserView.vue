
<script setup>
import { useUserStore } from '@/store/useUsers.js'
import CardNote from '@/components/CardNote.vue';
import CreateNote from '@/components/CreateNote.vue'
import { useAuthStore } from '@/store/useAuth.js'
import router from '@/router'
const useStore = useUserStore()
const auth = useAuthStore()

await useStore.fetchUser()

const user = useStore.getUser


if (useStore.expireToken) router.push({ name: "signin"})





const logout = () =>{
    auth.logout()
    router.push({ name: "signin"})
}

</script>

<template>
    <button @click.prevent="logout">Logout</button>
    <div class="w-screen h-96 mt-4 rounded shadow-md bg-emerald-500 bg-auto flex flex-col items-center justify-center">
        <h1>Bienvenido.!!</h1>
        <h2 >Hello, {{ user.name }} </h2>
        <h6>{{user.email}}</h6>
    </div>
    <CreateNote/>
    <CardNote :notes="user.notes"/>
    
</template>

<style scoped>

</style>