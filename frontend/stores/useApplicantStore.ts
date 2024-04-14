
type ApplicantProfile = {
    message: string,
    data: ApplicantInfo
}
type ApplicantInfo = {
  id: string
  fullName:string,
  birthYear:string,
  nidaNumber:string,
  educationLevel:string,
  BusinessRegStatus:string,
  phoneNumber:string,
  email:string,
  businessSector:string,
  businessName:string,
  businessLocation:string,
}
type Application = {
  message: String,
  data:{

  }
}


export const useApplicantStore = defineStore('applicantStore', () => {
    const applicantProfile = ref < ApplicantProfile | null>(null)
    const saveError = ref <any>(null)
    const dataOnSubmitApplication = ref<any>(null)
    
    const appData = useAppDataStore()

    //Saving Applicant Profile Info 
    async function createApplicantProfile(info: ApplicantProfile){
        appData.toogleLoading()
        await useApiFetch('/sanctum/csrf-cookie');
        const {data, error} = await useApiFetch('/api/create-applicant-profile',{
          method: 'POST',
          body: info as ApplicantProfile
        });
        // console.log(data.value);
        if(data.value){
            appData.toogleLoading()
            applicantProfile.value = data.value as ApplicantProfile
            saveError.value = null
            // next Form
            appData.AssignNotificationMessage(applicantProfile.value?.message)
            navigateTo(`/sido/business-profile-create-${applicantProfile.value?.data.id}`)
          }
          else{
            appData.toogleLoading()
            if( error.value?.data) saveError.value = error.value?.data.errors
        }
        return {data, error};
    }
    async function applicationBeforeSubmit (uuid :string){
      appData.toogleLoading()
      const {data, error} = useApiFetch(`/api/application-before-submission/${uuid}`)
      if(data.value){
        appData.toogleLoading()
        dataOnSubmitApplication.value = data.value as Application
        saveError.value = null
      }
      else{
        appData.toogleLoading()
        if( error.value?.data) saveError.value = error.value?.data.errors
    }
    return {data , error}
    }

    return { applicantProfile, dataOnSubmitApplication, saveError , createApplicantProfile, applicationBeforeSubmit}
  })