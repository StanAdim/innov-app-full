<script setup>
definePageMeta({
  middleware: 'auth-limit'
})
const appData = useAppStore();
</script>
<template>
  <div class="w-full">
    <div class="pageHeading">
      <h1 class="text-2xl font-semibold mx-auto">Commission Leaders</h1>
    </div>
    <div class=" bg-sky-50 flex justify-center h-screen">
      <div >
        <div class="flex flex-row justify-between mt-1">
          <button
            @click="appData.switchTab(0)"
            :class="{ ' bg-sky-200 border-white': appData.tabValue === 0 }"
            class=" hover:bg-sky-100 text-gray-700 font-semibold rounded-t focus:outline-none mx-px py-2 px-20"
            type="button"
          >
            All Leaders
          </button>
          <button
            @click="appData.switchTab(1)"
            :class="{ ' bg-sky-200 border-white': appData.tabValue === 1 }"
            class=" hover:bg-sky-100 text-gray-700 font-semibold rounded-t focus:outline-none mx-px py-2 px-20"
            type="button"
          >
            Add Leader
          </button>
          <button
            @click="appData.switchTab(2)"
            :class="{ ' bg-sky-200 border-white': appData.tabValue === 2 }"
            class=" hover:bg-sky-100 text-gray-700 font-semibold rounded-t focus:outline-none mx-px py-2 px-20"
            type="button"
          >
           Leaders List
          </button>
          
        </div>
        <ul class="bg-white text-sm rounded-b p-4">
          <li v-show="appData.tabValue === 0">
            <div class=" w-full h-full bg-gray-100 container px-4 py-2">
              <!-- Search Input -->
              <util-search-item />
              <div class="flex flex-wrap">
                <leader-card />
              </div>
              <!-- End GRID -->
            </div>
          </li>
          <li v-show="appData.tabValue === 1">
            <div class=" w-auto h-full bg-gray-100 container px-4 py-2 ">
            <!-- Form Create leader -->
             <leader-form />
            </div>
          </li>
          <li v-show="appData.tabValue === 2">
            <div class=" w-full h-full bg-gray-100 container px-4 py-2 ">
            <!-- Form Create leader -->
             <leader-list />
            </div>
          </li>
        
        </ul>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
