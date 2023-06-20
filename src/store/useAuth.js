import { defineStore } from 'pinia';
const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND;
const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND;

export const useAuthStore = defineStore('Auth', {
  state: () => {
    return {
      token: null,
      baseURL: `http://${HOST_BACKEND}:${PORT_BACKEND}/api`
    }
  },
  persist: true,

  getters: {
    getToken: (state) => state.token
  },
  actions:{
    async signUp(name, lastname, username, email, password){
      const URL = `${this.baseURL}/auth/register`
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          lastname,
          username,
          email,
          password
        }),
      });
      const response = await res.json();
      console.log(response);
      if (response.error || response.errors){
        return false
      }else{
        return true
      }
    },
    async signIn(username, password){
      
      const URL = `${this.baseURL}/auth/login`
      console.log(URL);
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const response = await res.json();
      if(response.token){
        this.token = response.token
        return response
      }else{
        this.token = null
        return response
      }
    },
    // leerToken(){
    //   if(this.token){
        
    //   }
    // },
    logout(){
      this.token = null
    },
    
  }
});
