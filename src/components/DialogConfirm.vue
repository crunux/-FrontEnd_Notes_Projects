<template>
<div class="fixed inset-0 z-[99] flex justify-center items-center" v-show="props.open" >
    <div class="w-40 h-32 m-4 bg-white justify-center items-center border rounded-md shadow-lg " >
        <h3 class=" m-auto p-5 text-slate-500 font-semibold text-center">Are you sure?</h3>
        <div class="flex justify-center items-center">
            <button class="p-1 m-1 w-12 text-center hover:text-white items-center text-slate-500 bg-white border-current hover:bg-red-400 border border-spacing-1 rounded-md" @click="emit('confirm-delete')">Si</button>
            <button class="p-1 m-1 w-12 text-center hover:text-white items-center text-slate-500 bg-white border-current hover:bg-stone-400 border border-spacing-1 rounded-md" @click="emit('close')" >No</button>
        </div>
    </div>
</div>
</template>

<script setup>

    const props = defineProps({
        open:{
            type: Boolean,
            required: true
        },
    })

    const emit = defineEmits(['close', 'confirm-delete'])
</script>

<style scoped>
</style>