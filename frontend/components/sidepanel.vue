<script setup>
const auth = useAuthStore()
async function handleLogout (){
  await auth.logout()
}
</script>


<template>
    <div v-if="auth.isLoggedIn" class="p-4">
        <h1 class="text-2xl font-semibold">Menu</h1>
        <ul class="mt-4">
            <hr class=" bg-sky-400 py-0.5">
            <li class="my-1 text-center hover:bg-sky-300 hover:rounded-lg">
                <router-link to="/auth/dashboard" class="block hover:text-teal-900">Dashboard</router-link>
            </li>
            <li class="my-1 text-center hover:bg-sky-300 hover:rounded-lg">
                <router-link to="/auth/posts/collection" class="block hover:text-teal-900">Posts</router-link>
            </li>
            <li class="my-1 text-center hover:bg-sky-300 hover:rounded-lg">
                <router-link to="/auth/banners/collection" class="block hover:text-teal-900">Banners</router-link>
            </li>
            <li class="my-1 text-center hover:bg-sky-300 hover:rounded-lg">
                <router-link to="/auth/leaders/collection" class="block hover:text-teal-900">Leaders</router-link>
            </li>
            <li class="my-1 text-center hover:bg-sky-300 hover:rounded-lg">
                <router-link to="/guest/register" class="block hover:text-teal-900">Add New User</router-link>
            </li>
            <li @click="handleLogout" class="my-1 text-center hover:bg-rose-500 hover:rounded-lg">
                <router-link to="/auth/dashboard" class="block hover:text-white">Logout</router-link>
            </li>
            <hr class=" bg-sky-400 py-0.5">
           
        </ul>
    </div>
</template>