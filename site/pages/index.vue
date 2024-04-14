<script lang="ts" setup>
let blogs = ref({})
async function callPosts(){
  await useFetch('http://localhost:8000/public/sanctum/csrf-cookie',{
    credentials:'include'
  })
  const {data,status} = await useFetch('http://localhost:8000/public/api/site/posts',{
    credentials:'include'
  });
  blogs.value = data.value?.posts
  console.log(data.value?.posts,status)
}

</script>


<template>
  <div>
   <button @click="callPosts()">Call Post</button>
   <ul>
    <li v-for="item in blogs" :key="item.id">{{item.title}}</li>
   </ul>
  </div>
</template>

<style scoped></style>
