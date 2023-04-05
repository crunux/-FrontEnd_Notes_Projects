<template>
  <section class="w-screen h-screen flex justify-center items-center  bg-emerald-200 ">
    <div class="flex w-96 justify-center items-center text-center flex-col m-2 p-4 rounded-md bg-slate-50 drop-shadow-xl">
      <h2 class="font-bold p-1 m-2 text-2xl">iNote</h2>
      <form>
          <label class="block p-1 m-1">
              <span class="block text-sm font-medium text-slate-700">Name</span>
              <input v-model="name" type="text" class="border-solid border-zinc-800 peer ..."/>
          </label>
          <label class="block p-1 m-1">
            <span class="block text-sm font-medium text-slate-700">Lastname</span>
            <input v-model="lastname" type="text" class="border-solid border-zinc-800 peer ..."/>
        </label>
          <label class="block p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Username</span>
              <input v-model="username" type="text" class="border-solid border-zinc-800 peer ..."/>
          </label>
          <label class="block p-1 m-1">
            <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
            <input v-model="email" type="email" class="border-solid border-zinc-800"/>
            <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
          <label class="block p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
              <input v-model="password" type="password" class="border-solid border-zinc-800 peer ..."/>
          </label>
          <label class="block p-1 m-1">
            <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Confirm Password</span>
            <input v-model="confirmPassword" type="password" class="border-solid border-zinc-800 peer ..."/>
        </label>
          <button class="m-2 p-2 border-solid border-zinc-800" @click.prevent="register">Sing up</button>
          <p class="text-red-500">{{feeback}}</p>
        </form>
        <p class="msg">¿Tienes Cuenta?</p>
          <router-link to="/signin">Sign In</router-link>
      </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'
import { useAuthStore } from '@/store/useAuth.js'

let name = ref('')
let lastname = ref('')
let username = ref('')
let email = ref('')
let password = ref('')
let confirmPassword = ref('')
let feeback = ref('')

const store = useAuthStore()

const register = async () => {

  name = name.value
  lastname = lastname.value
  username = username.value
  email = email.value
  password = password.value

  const response = await store.signUp(name,
          lastname,
          username,
          email,
          password)
  if(response === false){
    feeback.value = "Registration error"
  }else{
    router.push({ name: "signin" })
  }
}
</script>

<style scoped>
</style>