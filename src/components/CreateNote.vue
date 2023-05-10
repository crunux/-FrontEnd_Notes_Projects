<template>
  <div class="w-98 h-50 fixed inset-0 z-[99] flex justify-center items-center" v-show="props.open">
    <form class="mb-4 border bg-white rounded-md shadow-lg">
      <div class="p-6 justify-content items-center bg-white backdrop-blur-lg rounded-md ">
        <textarea v-model="content" id="comment" rows="8" class="p-2 text-md bg-white rounded-md" placeholder="Write a note..." required></textarea>
      </div>
      <div class=" h-12 flex items-center justify-content px-1 py-2 bg-white backdrop-blur-lg rounded-md ">
        <button @click="createdNote()" type="submit" class="inline-flex items-center m-1 py-1.5 px-2 text-xs font-medium text-center rounded-md  text-slate-500 bg-white border border-current hover:text-white hover:bg-emerald-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
        </button>
        <button @click="emit('close')" class="inline-flex items-center m-1 py-1.5 px-2 text-xs font-medium text-center rounded-md bg-white text-slate-500 border border-current  hover:text-white hover:bg-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        <div class="flex pl-2 space-x-1 sm:pl-2">
          <input v-model="important" type="checkbox" class="inline-flex rounded text-red-600 focus:ring-red-500 border justify-center p-2">
          <span class="text-red-500 p-1 font-medium text-base">Important</span>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useNoteStore } from '@/store/useNote.js'

let content = ref("")
let important = ref(false)
const store = useNoteStore()

const props = defineProps({
  open:{
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(["close"])

const createdNote = async () =>{
  content = content.value
  important = important.value
  const note = {
    content,
    important
  }
  const noteCreated = await store.createNote(note)

  if (noteCreated.error){
    alert("nota no fue creada")
    router.push({ name: "signin" })
  }else{
    emit('close')
    alert("Nota creada con exito")
  }
}


</script>

<style scoped>
</style>