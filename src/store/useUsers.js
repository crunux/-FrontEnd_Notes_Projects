import { defineStore } from 'pinia'
import { useAuthStore } from './useAuth';
const HOST_BACKEND = import.meta.env.VITE_HOST_BACKEND;
const PORT_BACKEND = import.meta.env.VITE_PORT_BACKEND;

export const useUserStore = defineStore('User', {
  state: () => {
    return {
      user: null,
      expireToken: null,
      baseURL: `http://${HOST_BACKEND}:${PORT_BACKEND}/api`
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