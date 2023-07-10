import { defineStore } from 'pinia'
import { useAuthStore } from './useAuth';
// const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND;
// const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND;
const API = import.meta.env.VITE_BACKEND_API
const PROTOCOL = import.meta.env.VITE_PROTOCOL

export const useUserStore = defineStore('User', {
  state: () => {
    return {
      user: null,
      expireToken: null,
      baseURL: `${PROTOCOL}://${API}/api`
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
    },
  }
})