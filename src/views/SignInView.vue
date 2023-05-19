
<template>
  <section class="w-screen h-screen flex justify-center items-center  bg-emerald-500 ">
    <div class="flex w-96 justify-center items-center text-center flex-col m-2 p-4 rounded-md bg-slate-50 drop-shadow-xl">
      <h2 class="font-bold p-1 m-2 text-2xl">iNote</h2>
        <form>
          <label class="block p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Username</span>
              <input v-model="user.username" id="username" type="text" class="border-solid text-center rounded-md border-zinc-800 peer ..."/>
          </label>
          <p v-for="error in v$.username.$errors" :key="error.$uid" class="text-red-500 text-sm" >{{ error.$message }}</p>
          <label class="block p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
              <input v-model="user.password" id="password" type="password" class="border-solid text-center rounded-md border-zinc-800 peer ..."/>
          </label>
          <p v-for="error in v$.password.$errors" :key="error.$uid" class="text-red-500 text-sm" >{{ error.$message }}</p>
          <button class="m-2 p-2 border-solid rounded-md border-zinc-800 hover:bg-emerald-500 hover:text-white" type="submit" @click.prevent="login">Sing in</button>
        </form>
        <p class="msg">¿No tienes cuenta?
          <router-link to="/signup">Sign up</router-link>
        </p>
      </div>
  </section>
</template>

<script setup>
import { reactive, computed} from 'vue';
import router from '@/router';
import { useAuthStore } from '@/store/useAuth.js';
import { useNotification } from '@kyvg/vue3-notification';
import { useVuelidate } from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const notification = useNotification()

const user  = reactive({
  username: '',
  password: ''
})

const rule = computed( () => ({
  username:{
    required,
  },
  password:{
    required
  }
}))

const v$ = useVuelidate(rule, user, { $lazy: true })


const store = useAuthStore()

const login = async () => {
	const validate = await v$.value.$validate()
	let username = user.username
	let password = user.password
  

  // console.log(username);
 	if (validate){
		const response = await store.signIn(username, password)
	
		if(response.token){
			router.push({ name: "home" })
		}
		if (response.error){
			user.username = ''
			user.password = ''
			notification.notify({
			text: response.error,
			type: "error",
			group: "auth"
			})
		}
	}else{
		notification.notify({
			text: "Please fill all camp",
			type: "error",
			group: "auth"
			})
	}
 

  
  
  
}
</script>
