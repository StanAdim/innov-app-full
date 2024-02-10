type BlogInfo = {
    title: string,
    slug: string,
    cagegoryId: string,
    body: string,
    imgPath: string,
}


export const useBlogStore = defineStore('blog', () => {
    const app = useAppStore();
    const blogPosts = ref < BlogInfo | null>(null)
    const hasBlogPosts = computed(() => !!blogPosts.value)
    const blogError = ref <any>(null)

    //Create Blog
    async function createPost(info: BlogInfo){
        const blogResponse = await useApiFetch('/api/auth/blog-post',{
          method: 'POST',
          body: info as BlogInfo
        });
        if(blogResponse.status?.value === "success"){
            app.toogleLoading();
        }
        // console.log(blogResponse.status)
        navigateTo('/auth/posts/collection')
        getAllPost()
        return blogResponse;
    }
    async function getAllPost(){
        const {data,error,status} =  await useApiFetch('/api/auth/blog-post');
        blogPosts.value = data.value
        return {
            data,error,status
        }
    }
   
  
    return { createPost, blogPosts, blogError, getAllPost,hasBlogPosts}
  })