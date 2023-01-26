import { defineStore } from 'pinia'
import { useAuthStore } from './useAuth';



export const useUserStore = defineStore('User', {
  state: () => {
    user: {}
  },

  getters: {
    getUser: (state) => state.user
  },

  action:{
    async fetchUser(){
      const authStore = useAuthStore()
      const res = await fetch("https://localhost:3000/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authStore.getToken}`
        },
      });
      const user = await res.json();
      this.user = user
    },
  }
})