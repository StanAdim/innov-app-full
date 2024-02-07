type FeatureInfo = {
    title:string,
    brief:string,
    link:string,
    order:string,
}


export const useFeatureStore = defineStore('feature', () => {
    const features = ref < FeatureInfo | null>(null)
    const hasFeatures = computed(() => !!features.value)
    const featureError = ref <any>(null)

    //Create Blog
    async function createFeature(info: FeatureInfo){
        const response = await useApiFetch('/api/auth/medium-feature',{
          method: 'POST',
          body: info as FeatureInfo
        });
        console.log(response)
        navigateTo('/auth/features/collection')
        retrieveFeatures()
        return response;
    }
    async function retrieveFeatures(){
        const {data,error,status} =  await useApiFetch('/api/auth/medium-feature');
        features.value = data.value
        return {
            data,error,status
        }
    }
   
  
    return { createFeature, features, featureError, retrieveFeatures,hasFeatures}
  })