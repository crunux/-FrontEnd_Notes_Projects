<script setup>
import { toRefs } from 'vue'
const props = defineProps({
    notes: {}
})
const { notes } = toRefs(props)
</script>

<template>
  <div class="grid grid-cols-3"  v-for="note in notes" :key="note.date">
    <div class="w-56 h-52 flex flex-col items-center bg-green-600 p-4 rounded-md m-2 hover:bg-[#252525] cursor-pointer">
      <!-- <img class="rounded-md" :src="image" alt=""> -->
      <div class="text-white pt-4 font-semibold text-[17px]">{{ note.content }}</div>
      <div class="text-gray-400 pt-1 pb-3 text-[14px]">{{ note.important }}</div>
    </div>
    <hr class="my-4" />
  </div>
</template>

<style scoped>

</style>
