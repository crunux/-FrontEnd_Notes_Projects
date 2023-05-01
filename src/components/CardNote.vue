<script setup>
import { toRefs, ref } from 'vue'
import { useNoteStore } from '@/store/useNote.js'
import UpdateNote from './UpdateNote.vue';

const props = defineProps({
    note: {}
})

const store = useNoteStore()
let isOpen = ref(false)
const { note } = toRefs(props)

const delNote = async (id) => {
  const noteDeleted = await store.deleteNote(id);
  if (noteDeleted.error){
    alert("Nota no fue eliminada")
    router.push({ name: "signin" })
  }else{
    console.log(noteDeleted);
    alert("Nota eliminada")
  }
}

</script>
<!-- grid grid-cols-3 -->
<template>
    <div class="w-80 h-60 flex flex-col items-center p-4 hover:bg-gray-200 rounded-md border m-2 cursor-pointer hover:border-white">
      <!-- <img class="rounded-md" :src="image" alt=""> -->
      <div class="flex flex-col m-auto p-auto justify-center items-center text-center">
        <h5 v-if="note.important" class="text-red-600 font-semibold pt-1 pb-3 text-[14px]">Important</h5>
        <h5 v-else class="text-gray-600 pt-1 pb-3 font-semibold text-[14px]">Important</h5>
        <p class="pt-4 font-semibold text-[14px] max-h-[40ch] text-black">{{ note.content }}</p>
      </div>
      <div class="flex flex-row place-content-between m-1 p-1 justify-between items-center">
        <button @click="isOpen = true" class=" mx-2 p-2 text-center border border-spacing-1 rounded-md text-green-500 hover:bg-green-500 hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-edit-3"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg></button>
        <button @click="delNote(note.id)" class=" mx-2 p-2 text-center border border-spacing-1 rounded-md text-red-600 hover:bg-red-500  hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></button>
      </div>
      <teleport to='body'>
        <UpdateNote :open="isOpen" :note="note" @close="isOpen = !isOpen"/>
      </teleport>
    </div>
</template>

<style scoped>

</style>
