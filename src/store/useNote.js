import { defineStore } from 'pinia'
import { useAuthStore } from './useAuth';




export const useNoteStore = defineStore('Note', {
  state: () => {
    return {
      notes: [],
      baseURL: 'http://127.0.0.1:3000/api'
    }
  },

  getters: {
    getNotes: (state) => state.notes
  },

  actions:{
    async createNote(note){
      const URL = `${this.baseURL}/notes`
      const authStore  = useAuthStore()
      const token = authStore.token
      const content = note.content
      const important = note.important
      const res = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          content,
          important
        }),
      });
      const response = await res.json();
      return response
    },
  }
})