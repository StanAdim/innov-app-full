type BannerInfo = {
    title: string,
    slug: string,
    cagegoryId: string,
    description: string,
    imgPath: string,
}


export const useBannerStore = defineStore('banner', () => {
    const banners = ref < BannerInfo | null>(null)
    const hasBanners = computed(() => !!banners.value)
    // const bannerError = ref <any>(null)

    //Create Banner
    async function createBanner(info: BannerInfo){
        const bannerResponse = await useApiFetch('/api/auth/medium-banner',{
          method: 'POST',
          body: info as BannerInfo
        });
        // console.log(bannerResponse)
        navigateTo('/auth/banners/collection')
        retriveBanners()
        return bannerResponse;
    }
    //Retrive the banners
    async function retriveBanners(){
        const {data,error,status} =  await useApiFetch('/api/auth/medium-banner');
        banners.value = data.value
        return {
            data,error,status
        }
    }
   
  
    return { createBanner, banners, retriveBanners,hasBanners}
  })