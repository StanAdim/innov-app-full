<script lang="ts" setup>
const isDialogOpen  = ref(false);
const isHamburgerOpen  = ref(false);

</script>
<template>
<main
      class="mx-auto max-w-4xl bg-gray-200 h-screen"
      x-data="{ 'isDialogOpen': false }"
      @keydown.escape="isDialogOpen = false"
>
  <section class="flex flex-wrap p-4">
    <table class="w-full">
      <thead>
        <tr class="border-b">
          <th class="p-2 text-left">Name</th>
          <th class="p-2 text-left">Email</th>
          <th class="p-2 text-right"></th>
        </tr>
      </thead>
      <tbody>
        <tr class="hover:bg-yellow-100">
          <td class="p-2 text-left flex flex-col">
            John Bob
          </td>
          <td class="p-2 text-left">
            jbob@example.com
          </td>
          <td class="text-right" x-data="{ 'isHamburgerOpen': false }">
            <button
              type="button"
              title="Open the actions menu"
              class="font-mono text-2xl px-2"
              @click="isHamburgerOpen = true"
              :class="{ 'bg-gray-100': isHamburgerOpen }"
            >
              &ctdot;
            </button>

            <ul
                x-show="isHamburgerOpen"
                x-cloak
                @click="isHamburgerOpen = false"
                class="absolute border bg-white shadow-md text-left -mt-10 -ml-12"
            >
              <li class="p-2 hover:bg-gray-200">✏ Edit</li>
              <li class="p-2 hover:bg-gray-200">❌ Delete</li>
              <li class="p-2 hover:bg-gray-200">🦄 Other action</li>
            </ul>
          </td>
        </tr>
        
      </tbody>
    </table>
  </section>
</main>
</template>

<style scoped></style>
