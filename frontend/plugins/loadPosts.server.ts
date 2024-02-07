import { useAuthStore } from "~/stores/useAuthStore"

export default defineNuxtPlugin(async (nuxtApp) => {
    const blog = useBlogStore()
    if(blog.hasBlogPosts ){
        await blog.getAllPost();
    }
})
