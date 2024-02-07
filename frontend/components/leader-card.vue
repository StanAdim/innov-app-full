<script lang="ts" setup>
const leader = useLeaderStore()
const {data} = await leader.retriveLeaders()
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-1">
<!-- CARD 1 -->
<div v-for="item in data?.data" :key="item.id" class="max-w-sm mx-auto bg-white rounded-lg overflow-hidden shadow-lg m-1">
  <div class="border-b px-4 pb-6">
      <div class="text-center my-4">
          <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
              src="https://randomuser.me/api/portraits/women/21.jpg" alt="">
          <div class="py-2">
              <h3 class="font-bold text-lg mb-1">{{item.designation}}</h3>
              <div class="inline-flex text-sky-700 items-center">
                  <p class="text-lg">{{item.name}}</p>
              </div>
          </div>
      </div>
     
  </div>
  <div class="px-4 py-4">
      <div class="flex gap-2 items-center text-teal-950  mb-4">
          <span>{{ item.email }}</span>
      </div>
      
  </div>
  </div>
</div>
</template>

<style scoped></style>
