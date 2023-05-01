import { defineStore } from 'pinia'
import { useAuthStore } from './useAuth';


export const useUserStore = defineStore('User', {
  state: () => {
    return {
      user: null,
      expireToken: null,
      baseURL: 'http://127.0.0.1:3000/api'
    }
  },

  getters: {
    getUser: (state) => state.user,
    getExpireToken: (state) => state.expireToken
  },

  actions:{
    async fetchUser(){
      const URL = `${this.baseURL}/user`
      const authStore  = useAuthStore()
      const token = authStore.token
      const res = await fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
      });
      const user = await res.json();
      if(user.error){
        this.expireToken = true
      }else{
        this.user = user
      }
      console.log(user)
    },
  }
})