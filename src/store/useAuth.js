import { defineStore } from 'pinia'


export const useAuthStore = defineStore('Auth', {
  state: () => {
    return{
      token: ''
    }
  },

  getters: {
    getToken: (state) => state.token
  },
  action:{
    async signIn(username, password){
      const res = await fetch("https://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const tokenAuth = await res.json();
      this.token = tokenAuth;
    },
    async signUp(user){
      const res = await fetch("https://localhost:3000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: user.name,
          username: user.username,
          email: user.email,
          password: user.password
        }),
      });
      const tokenAuth = await res.json();
    }
  }
})