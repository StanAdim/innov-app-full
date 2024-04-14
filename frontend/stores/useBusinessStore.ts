
type BusinessProfile = {
    message: string,
    data : BusinessData
}
type BusinessData = {
    applicationCode:string,
    background:string,
    marketProblem:string,
    marketBase:string,
    prototypeDescription:string,
    marketSize:string,
}


export const useBusinessStore = defineStore('businesProfileStore', () => {
    const businessProfile = ref < BusinessProfile | null>(null)
    const saveError = ref <any>(null)
    const appData = useAppDataStore()

    //Saving Applicant Profile Info 
    async function createBusinessProfile(info: BusinessData){
        appData.toogleLoading()
        await useApiFetch('/sanctum/csrf-cookie');                
        const {data,error} = await useApiFetch(`/api/create-business-profile/${info.applicationCode}`,{
          method: 'POST',
          body: info as BusinessData
        });
        // console.log(BusinessProfileRespose?.data.value);
        if(data.value){
            appData.toogleLoading()
            businessProfile.value = data.value as BusinessProfile
            saveError.value = null
            //Move next Form
            appData.AssignNotificationMessage(businessProfile.value?.message)
            navigateTo(`/sido/competition-profile-${businessProfile.value?.data.applicationCode}`)
          }
          else{
            appData.toogleLoading()
            if( error.value?.data) saveError.value = error.value?.data.errors
        }
        return { data,error};
    }

    return { businessProfile,saveError , createBusinessProfile}
  })