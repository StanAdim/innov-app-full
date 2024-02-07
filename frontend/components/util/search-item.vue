<script setup>

</script>
<template>
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
                    class="p-1 m-1 text-white transition-colors duration-200 transform rounded-md bg-blue-200 lg:w-auto hover:bg-blue-300 focus:outline-none focus:bg-blue-100"
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
</template>