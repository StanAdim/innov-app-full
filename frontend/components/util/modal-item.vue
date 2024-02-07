<script setup>
const appData = useAppStore();

</script>
<template>
         <div
        :class="{ hidden: appData.globalData.isDialogOpen }"
        class="modal fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center"
      >
        <div class="bg-white p-8 rounded shadow-lg w-1/4">
          <p>Are you sure about this</p>
          <div class="flex gap-2">
            <button
            @click="appData.closeAndOpen()"
            class="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >
            Close
          </button>
          <button
            @click="appData.closeAndOpen()"
            class="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
          ❌ Delete
          </button>
          </div>
        </div>
      </div>
</template>