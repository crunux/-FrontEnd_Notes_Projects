<template>
  <section class="w-screen h-screen flex justify-center items-center  bg-emerald-200 ">
    <div class="flex w-96 justify-center items-center text-center flex-col m-2 p-4 rounded-md bg-slate-50">
      <h2 class="font-bold p-1 m-2 text-2xl">iNote</h2>
      <form>
          <label class="block p-1 m-1">
              <span class="block text-sm font-medium text-slate-700">Name</span>
              <input type="text" class="border-solid border-zinc-800 peer ..."/>
          </label>
          <label class="block p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Username</span>
              <input type="text" class="border-solid border-zinc-800 peer ..."/>
          </label>
          <label class="block p-1 m-1">
            <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
            <input type="email" class="border-solid border-zinc-800"/>
            <p class="mt-2 invisible peer-invalid:visible text-red-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
          <label class="block p-1 m-1">
              <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Password</span>
              <input type="password" class="border-solid border-zinc-800 peer ..."/>
          </label>
          <label class="block p-1 m-1">
            <span class=" after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Confirm Password</span>
            <input type="password" class="border-solid border-zinc-800 peer ..."/>
        </label>
          <button class="m-2 p-2 border-solid border-zinc-800">Sing up</button>
        </form>
      </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
</style>