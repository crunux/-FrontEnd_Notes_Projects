<template>
<div >
  <div class="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
      <div class="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label for="comment" class="sr-only">Your Note</label>
          <textarea v-model="content" id="comment" rows="4" class="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write a note..." required></textarea>
      </div>
      <div class="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button @click="createdNote()" type="submit" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
              Create
          </button>
          <div class="flex pl-0 space-x-1 sm:pl-2">
              <input v-model="important" type="checkbox" class="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
              <span class="sr-only">Important</span>
          </div>
      </div>
  </div>
</div>
</template>

<script setup>
import { ref } from 'vue'
import { useNoteStore } from '@/store/useNote.js'

let content = ref("")
let important = ref(false)
const store = useNoteStore()

const createdNote = async () =>{
  console.log(content.value);
  content = content.value
  important = important.value
  const note ={
    content,
    important
  }
  const noteCreated = await store.createNote(note)
  if (noteCreated.error){
    console.log("hello 1");
    alert("nota no fue creada")
    router.push({name: "signin"})
  }else{
    console.log("hello 2");
    alert("la nota fue creada con exito")
  }

}
</script>

<style scoped>
</style>