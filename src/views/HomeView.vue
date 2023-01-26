
<script setup>
import { useUserStore } from '@/store/useUsers.js'
import { onBeforeMount } from 'vue';

const userStore = useUserStore()

onBeforeMount( async () => {
    await userStore.fetchUser()
}

</script>

<template>
    <div>
        <h2 >Hello, {{userStore.user.name}} </h2>
    </div>
</template>

<style scoped>
</style>