<script lang="ts" setup>

const feature = useFeatureStore()
const {data} = await feature.retrieveFeatures()

</script>
<template>
  <div class="grid gap-2 md:grid-cols-2 lg:gap-12 p-3 md:p-10 mt-2">
    <div v-for="item in data?.data" :key="item.id"
        class="flex flex-col p-6 space-y-6 transition-all duration-500 bg-white border border-indigo-100 rounded-lg shadow hover:shadow-xl lg:p-8 lg:flex-row lg:space-y-0 lg:space-x-6">
        <div
            class="flex items-center justify-center w-16 h-16 bg-green-100 border border-green-200 rounded-full shadow-inner lg:h-20 lg:w-20">
            <svg class="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z">
                </path>
            </svg>
        </div>
        <div class="flex-1">
            <h5 class="mb-3 text-xl font-bold lg:text-2xl">{{item.title}}</h5>
            <p class="mb-6 text-lg text-gray-600">{{item.brief}}</p>
            <span class="flex items-baseline text-sm font-bold text-indigo-600">
              Link
            </span>
        </div>
    </div>
    
</div>
</template>

<style scoped></style>
