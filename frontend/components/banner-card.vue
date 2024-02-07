<script lang="ts" setup>

const banner = useBannerStore()
const {data} = await banner.retriveBanners()
</script>

<template>
<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 m-1">
<!-- CARD 1 -->
<div v-for="item in data?.data" :key="item.id"
  class="rounded overflow-hidden shadow-lg flex flex-col">
    <div class="">
      <img class="w-full"
                src="https://images.pexels.com/photos/61180/pexels-photo-61180.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                alt="Sunset in the mountains">            
    </div>
    <div class="px-6 py-4 mb-auto">
        <nuxtLink to="/auth/banners/collection#"
            class="font-medium text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2">
            {{ item.title }}
          </nuxtLink>
        <p class="text-gray-500 text-sm">
            {{item.description}}
        </p>
    </div>
    <div class="px-6 py-3 flex flex-row items-center justify-between bg-gray-100">
        <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <svg height="13px" width="13px" version="1.1" id="Layer_1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;"
                xml:space="preserve">
                <g>
                    <g>
                        <path
                            d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                        </path>
                    </g>
                </g>
            </svg>
            <span class="ml-1">6 mins ago</span>
        </span>

        <span href="#" class="py-1 text-xs font-regular text-gray-900 mr-1 flex flex-row items-center">
            <span class="ml-1">39 Comments</span>
        </span>
    </div>
</div>



</div>
</template>

<style scoped></style>
