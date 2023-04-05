
<script setup>
import { useUserStore } from '@/store/useUsers.js'
import CardNote from '@/components/CardNote.vue';
const useStore = useUserStore()

await useStore.fetchUser()

const user = useStore.getUser

const logout = () =>{
    useStore.logout()
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
    <CardNote :notes="user.notes"/>
    
</template>

<style scoped>

</style>