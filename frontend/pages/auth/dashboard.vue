<script lang="ts" setup>
definePageMeta({
  middleware: 'auth-limit'
})
const appData = useAppStore()
</script>
<template>
<main class="p-6 sm:p-10 space-y-6"> 
<section class="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
  <NuxtLink to="/auth/dashboard">
    <div class="flex items-center p-8 bg-white shadow rounded-lg">
      <div class="inline-flex flex-shrink-0 items-center justify-center h-16 w-16 text-purple-600 bg-purple-100 rounded-full mr-6">
        <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      </div>
      <div>
        <span class="block text-2xl font-bold">{{appData.appItemCount?.users}}</span>
        <span class="block text-gray-500">System Users</span>
      </div>
    </div>
  </NuxtLink>
  
</section>
    </main>
</template>

<style scoped></style>
