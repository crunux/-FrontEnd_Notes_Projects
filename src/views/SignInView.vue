<script setup>
import {ref} from 'vue'
import { useAuthStore } from '@/store/useAuth.js'

const username = ref('')
const password = ref('')

const authStore = useAuthStore()

const login = async (username, password) => {
  username = username.value
  password = password.value
  await authStore.signIn(username, password)
  this.$router.push("/");
}


</script>

<template>
    <section class="w-screen h-screen flex justify-center items-center  bg-emerald-200 ">
      <div class="flex w-96 justify-center items-center text-center flex-col m-2 p-4 rounded-md bg-slate-50">
        <h2 class="font-bold p-1 m-2 text-2xl">iNote</h2>
          <form @click.prevent="login">
            <label class="block p-1 m-1">
                <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Username</span>
                <input v-model="username" type="text" class="border-solid border-zinc-800 peer ..."/>
            </label>
            <label class="block p-1 m-1">
                <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
                <input v-model="password" type="password" class="border-solid border-zinc-800 peer ..."/>
            </label>
            <button class="m-2 p-2 border-solid border-zinc-800" type="submit">Sing in</button>
          </form>
          <p class="msg">¿No tienes cuenta?
            <router-link to="/signup">Sign up</router-link>
          </p>
        </div>
    </section>
</template>

<style scoped>

</style>