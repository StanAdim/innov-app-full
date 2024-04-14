<script setup>

const auth = useAuthStore()
const app = useAppStore()
async function handleLogout(){
  await auth.logout()
}



</script>

<template>
<div class="bg-gray-100">

<div class="h-screen flex overflow-hidden bg-gray-200">
    <!-- Sidebar -->
    <div @click="app.toogleDrawerState()" class="absolute bg-gray-800 text-white w-56 
        min-h-screen overflow-y-auto transition-transform transform  ease-in-out duration-300"
        :class="{'-translate-x-full':app.drawerState}"
        id="sidebar">
        <!-- Your Sidebar Content -->
       <sidepanel />
    </div>
    <!-- Content -->
    <div class="flex-1 flex flex-col overflow-hidden">
        <!-- Navbar -->
        <div class="bg-white shadow">
            <div class="container mx-auto">
                <div class="flex justify-end items-center py-4 px-6 space-x-4">
                    
                    <h1 class="text-xl font-semibold">
                      <NuxtLink to="/">ICTC - <small>Admin</small></NuxtLink>
                    </h1>
                    <nuxtLink v-if="!auth.isLoggedIn" to="/guest/login" class="text-gray-500 hover:text-gray-600" >
                        Login
                    </nuxtLink>
                    <nuxtLink v-if="auth.isLoggedIn" to="/auth/dashboard" class="text-gray-500 hover:text-gray-600" >
                        Dashboard
                    </nuxtLink>
                    <button v-if="auth.isLoggedIn" @click="handleLogout()" class="text-gray-500 hover:text-gray-600" >
                        Logout
                    </button>
                    <button v-if="auth.isLoggedIn" @click="app.toogleDrawerState()" class="text-gray-500 hover:text-gray-600" >
                        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                   
                </div>
            </div>
        </div>
        <!-- Content Body -->
        <div class="flex-1 overflow-auto p-10 bg-sky-100">
            <div class="container" v-show="app.loading">
                <UtilLoading  />
            </div>
            <div v-show="!app.loading" class="container">
                <slot />
            </div>
        </div>
    </div>
</div>
</div>
</template>

<style>
.pageHeading{
  @apply w-full bg-sky-300  h-12 py-2 flex flex-wrap justify-between md:flex-row
}
</style>
