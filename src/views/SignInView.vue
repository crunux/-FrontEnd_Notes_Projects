
<template>
  <section class="w-screen h-screen flex justify-center items-center  bg-emerald-200 ">
    <div class="flex w-96 justify-center items-center text-center flex-col m-2 p-4 rounded-md bg-slate-50 drop-shadow-xl">
      <h2 class="font-bold p-1 m-2 text-2xl">iNote</h2>
        <form>
          <label class="block p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Username</span>
              <input v-model="username" type="text" class="border-solid text-center border-zinc-800 peer ..."/>
          </label>
          <label class="block p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
              <input v-model="password" type="password" class="border-solid text-center border-zinc-800 peer ..."/>
          </label>
          <button class="m-2 p-2 border-solid border-zinc-800" type="submit" @click.prevent="login">Sing in</button>
          <p class="text-red-500">{{feeback}}</p>
        </form>
        <p class="msg">¿No tienes cuenta?
          <router-link to="/signup">Sign up</router-link>
        </p>
      </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'
import { useAuthStore } from '@/store/useAuth.js'

let username = ref('')
let password = ref('')
let feeback = ref('')

const store = useAuthStore()

const login = async () => {
  username = username.value ? username.value: username;
  password = password.value ? password.value: username;

  // console.log(username);

  const response = await store.signIn(username, password)
  if (response === false){
    feeback.value = "SignIn error"
  }else{
    router.push({ name: "home" })
  }
  
  
}
</script>
