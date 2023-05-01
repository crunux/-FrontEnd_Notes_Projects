import { defineStore } from 'pinia'


export const useAuthStore = defineStore('Auth', {
  state: () => {
    return {
      token: null,
      baseURL: 'http://127.0.0.1:3000/api'
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
        return true
      }else{
        this.token = null
        return false
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
