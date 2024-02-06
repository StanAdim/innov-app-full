<script setup>
const posts = ref([
  {id: 1,title: 'This is first Post',
  body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.`,
  tag: '#Software'  
},
  {id: 2,title: 'This is first Post',
  body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.`,
  tag: '#AI'  
},
  {id: 3,title: 'This is first Post',
  body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.`,
  tag: '#Technology'  
},
  {id: 4,title: 'This is first Post',
  body: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.`,
  tag: '#BigData'  
},
])

</script>
<template>
     <!-- Start CARD -->
     <div v-for="item in posts" :key="item.id" class="md:w-1/3 p-2">
          <div
            class="rounded overflow-hidden shadow-lg bg-white hover:bg-blue-300 hover:text-white"
          >
            <img
              class="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fassets.turbologo.com%2Fblog%2Fen%2F2019%2F11%2F19084854%2FMercedes-Benz-logo-today.png&f=1&nofb=1"
              alt="Sunset in the mountains"
            />
            <div class="px-6 pt-2 pb-2">
              <div class="pt-2 pb-1">
                <span
                  class="inline-block bg-blue-200 rounded-full px-3 py-1 text-sm font-semibold text-blue-700 mr-2 mb-2"
                  >{{ item.tag }}</span
                >
              </div>
              <div class="font-bold text-xl mb-2">{{ item.title }}</div>
              <p class="text-gray-700 text-base">
                {{ item.body }}
              </p>
            </div>
            <div class="mt-2 mb-4 mx-6 text-center">
              <a
                href=""
                class="py-2 px-3 w-full text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:shadow-outline inline-block"
                >More
                <svg
                  class="-mr-1 mb-1 h-4 w-4 inline"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <!-- Eng CARD -->
</template>