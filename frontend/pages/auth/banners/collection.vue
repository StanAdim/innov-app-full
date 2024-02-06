<script setup>
definePageMeta({
  middleware: 'auth-limit'
})
const tabValue = ref(1)
function OptedTab(key){
  tabValue.value  = key
}
</script>
<template>

  <div class="w-full">
    <div class="pageHeading">
      <h1 class="text-2xl font-semibold mx-auto">Medium banners</h1>
    </div>
    <div class=" bg-sky-50 flex justify-center h-screen">
      <div >
        <div class="flex flex-row justify-between mt-1">
          <button
            @click="OptedTab(0)"
            :class="{ ' bg-sky-200 border-white': tabValue === 0 }"
            class=" hover:bg-sky-100 text-gray-700 font-semibold rounded-t focus:outline-none mx-px py-2 px-20"
            type="button"
          >
            All Medium Banners
          </button>
          <button
            @click="OptedTab(1)"
            :class="{ ' bg-sky-200 border-white': tabValue === 1 }"
            class=" hover:bg-sky-100 text-gray-700 font-semibold rounded-t focus:outline-none mx-px py-2 px-20"
            type="button"
          >
            Create Medium Banner 
          </button>
          <button
            @click="OptedTab(2)"
            :class="{ ' bg-sky-200 border-white': tabValue === 2 }"
            class=" hover:bg-sky-100 text-gray-700 font-semibold rounded-t focus:outline-none mx-px py-2 px-20"
            type="button"
          >
           Medium banner Action
          </button>
          
        </div>
        <ul class="bg-white text-sm rounded-b p-4">
          <li v-show="tabValue === 0">
            <div class=" w-full h-full bg-gray-100 container px-4 py-2">
              <!-- Search Input -->
              <div class="mx-auto  bg-white border rounded-md lg:w-96 focus-within:ring ring-primary focus-within:border-blue-300">
                <form
                  action="/search"
                  class="flex flex-wrap justify-between md:flex-row"
                >
                  <input
                    value=""
                    type="search"
                    name="query"
                    placeholder="Search Item..."
                    class="flex-1 p-1 m-1 text-gray-700 placeholder-gray-400 bg-transparent border-none appearance-none dark:text-gray-200 focus:outline-none focus:placeholder-transparent focus:ring-0"
                  />
                  <button
                    class="w-full p-1 m-1 text-white transition-colors duration-200 transform rounded-md bg-blue-200 lg:w-auto hover:bg-blue-300 focus:outline-none focus:bg-blue-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </button>
                </form>
              </div>
              <div class="flex flex-wrap">
                <banner-card />
              </div>
              <!-- End GRID -->
            </div>
          </li>
          <li v-show="tabValue === 1">
            <div class=" w-auto h-full bg-gray-100 container px-4 py-2 ">
            <!-- Form Create Post -->
             <banner-form />
            </div>
          </li>
          <li v-show="tabValue === 2">
            <div class=" w-full h-full bg-gray-100 container px-4 py-2 ">
            <!-- Form Create Post -->
             <banner-list />
            </div>
          </li>
        
        </ul>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
