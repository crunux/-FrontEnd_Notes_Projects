<template>
  <section class="w-screen h-screen flex justify-center items-center  bg-emerald-500 ">
    <div class="flex w-[500px] h-min justify-center items-center text-center flex-col m-2 p-4 rounded-md bg-slate-50 drop-shadow-xl">
      <h2 class="font-bold p-1 m-1 text-2xl">iNote</h2>
      <form>
          <div class="flex">
              <label class="m-1">
								<span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Name</span>
              	<input v-model="newRegister.name" type="text" class="border text-center rounded-md "/>
                <p v-for="error in v$.name.$errors" :key="error.$uid" class="text-red-500 text-sm" >{{ error.$message }}</p>
							</label>
							<label class="m-1">
								<span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Last Name</span>
            		<input v-model="newRegister.lastname" type="text" class="border text-center rounded-md"/>
                <p v-for="error in v$.lastname.$errors" :key="error.$uid" class="text-red-500 text-sm" >{{ error.$message }}</p>
							</label>
          </div>
          <label class="p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Username</span>
              <input v-model="newRegister.username" type="text" class="border-solid text-center rounded-md border-zinc-800 peer"/>
              <p v-for="error in v$.username.$errors" :key="error.$uid" class="text-red-500 text-sm" >{{ error.$message }}</p>
          </label>
          <label class="p-1 m-1 justify-center">
            <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
            <input v-model="newRegister.email" type="email" class="border-solid text-center rounded-md border-zinc-800"/>
            <p v-for="error in v$.email.$errors" :key="error.$uid" class="text-red-500 text-sm" >{{ error.$message }}</p>
          </label>
          <label class="p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
              <input v-model="newRegister.password" type="password" class="border-solid text-center rounded-md border-zinc-800 peer ..."/>
              <p v-for="error in v$.password.$errors" :key="error.$uid" class="text-red-500 text-sm" >{{ error.$message }}</p>
          </label>
          <label class="p-1 m-1">
            <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Confirm Password</span>
            <input v-model="newRegister.confirmPassword" type="password" class="border-solid text-center rounded-md border-zinc-800 peer ..."/>
            <p v-for="error in v$.confirmPassword.$errors" :key="error.$uid" class="text-red-500 text-sm" >{{ error.$message }}</p>
        </label>
				<label class="block p-1 m-1">
					<button class="m-2 p-2 border-solid rounded-md border-zinc-800 hover:bg-emerald-500 hover:text-white" @click.prevent="register">Sing up</button>
          <!-- <p class="text-red-500">{{feeback}}</p> -->
				</label>
        </form>
        <p class="msg">¿Tienes Cuenta?</p>
          <router-link to="/signin">Sign In</router-link>
      </div>
  </section>
</template>

<script setup>
import { reactive, computed } from 'vue'
import router from '@/router'
import { useAuthStore } from '@/store/useAuth.js'
import { useNotification } from '@kyvg/vue3-notification';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, sameAs } from '@vuelidate/validators';

const notification = useNotification()

const newRegister = reactive({
  name : "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
})

const rule = computed(() =>({
	name :{
		required
	},
  lastname: {
		required
	},
  username: {
		required,
		minLength: minLength(4)
	},
  email: {
		required,
		email
	},
  password: {
		required,
		minLength: minLength(8)
	},
  confirmPassword: {
		required,
		minLength: minLength(8),
		sameAs: sameAs(newRegister.password)
	}
}))

const v$ = useVuelidate(rule, newRegister, { lazy: true})


const store = useAuthStore()

const register = async () => {
	const validate = await v$.value.$validate()
  let name = newRegister.name
  let lastname = newRegister.lastname
  let username = newRegister.username
  let email = newRegister.email
  let password = newRegister.password
	if (validate){
		const response = await store.signUp(name,
          lastname,
          username,
          email,
          password)
		if(response === false){
			notification.notify({
				text: "Error al registrarte",
				type: "error",
				group: "auth"
				})
		}else{
			router.push({ name: "signin" })
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
 