
<script setup>
import { defineAsyncComponent } from 'vue';
import LoadingView from '@/components/LoadingView.vue';
const UserView = defineAsyncComponent(() => import('@/views/UserView.vue'))

</script>

<template>
    <div>
        <Suspense>
            <template #default>
            <UserView/>
            </template>
            <template #fallback>
                <LoadingView />
            </template> 
        </Suspense>
    </div>
</template>

<style scoped>
</style>