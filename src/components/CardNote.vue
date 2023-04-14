<script setup>
import { toRefs } from 'vue'
const props = defineProps({
    notes: {}
})
const { notes } = toRefs(props)
</script>

<template>
  <div class="grid grid-cols-3"  v-for="note in notes" :key="note.date">
    <div class="w-56 h-52 flex flex-col items-center bg-neutral-300 p-4 rounded-md m-2 hover:bg-[#252525] cursor-pointer">
      <!-- <img class="rounded-md" :src="image" alt=""> -->
      <h5 v-if="note.important" class="text-red-600 pt-1 pb-3 text-[14px]">Important</h5>
      <h5 v-else class="text-gray-600 pt-1 pb-3 text-[14px]">Important</h5>
      <div class="text-white pt-4 font-semibold text-[17px]">{{ note.content }}</div>
    </div>
    <hr class="my-4" />
  </div>
</template>

<style scoped>

</style>
