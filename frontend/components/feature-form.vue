<script setup>
const formData = ref({
  title:'',
  brief:'',
  link:'--',
  order:'--',
})
const feature = useFeatureStore()
const appData = useAppStore();
async function handleForm(){
  appData.toogleLoading()
  const response = await feature.createFeature(formData.value)
  appData.switchTab(0)
}
</script>
<template>
  <div class="flex justify-center">
    <div class="w-full rounded-lg shadow-md py-8 shadow-gray/10 ring-[1px] ring-gray-600/10">
    <form class="space-y-8" @submit.prevent="handleForm">
        <div class="space-y-3 px-4">
          <div class="space-y-2">
            <label class="text-sm text-slate-600 font-normal">Featuring Title</label>
            <input
              type="text"
              placeholder="Title"
              v-model="formData.title"
              class="w-full text-sm p-2 rounded-md ring-[1px] ring-gray-600/10" />
          </div>
          <div class="space-y-2">
            <label class="text-sm text-slate-600 font-normal">Featuring Brief</label>
            <input
              type="text"
              placeholder="Summary"
              v-model="formData.brief"
              class="w-full text-sm p-2 rounded-md ring-[1px] ring-gray-600/10" />
          </div>
        </div>
        <hr />
        <div class="text-right px-4 text-sm space-x-8">
          <button class="bg-sky-500 px-8 py-2 text-white rounded-md hover:bg-sky-400">
            Create
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped></style>
