
type ProjectionDetail = {
    message: string,
    data: ProjectionData
}
type ProjectionData = {
    applicationCode:string,
    expectedRevenue:string,
    machineEquipment:string,
    workingCapital:string,
    investmentPlan:string,
    financingSource:string,
    supportNeeded:string,
    challenges:string,
}

export const useProjectionStore = defineStore('projectionStore', () => {
    const projectionDetail = ref < ProjectionDetail | null>(null)
    const saveError = ref <any>(null)
    const appData = useAppDataStore()
    const  applicantStore = useApplicantStore()

    //Saving Competions  Info 
    async function createProjectionDetail(info: ProjectionData){
        appData.toogleLoading()
        await useApiFetch('/sanctum/csrf-cookie');                
        const {data,error} = await useApiFetch(`/api/create-business-projection/${info.applicationCode}`,{
          method: 'POST',
          body: info as ProjectionData
        });
        // console.log(ProjectionDetailRespose?.data.value);
        if(data.value){
            appData.toogleLoading()
            projectionDetail.value = data.value as ProjectionDetail
            saveError.value = null
            //Move next Form
            const applicantStore = useApplicantStore();
            appData.AssignNotificationMessage(projectionDetail.value?.message)
            await applicantStore.applicationBeforeSubmit(info.applicationCode);
            navigateTo(`/sido/profile-submission-${projectionDetail.value.data?.applicationCode}`)
          }
          else{
            appData.toogleLoading()
            if( error.value?.data) saveError.value = error.value?.data.errors
        }
        return { data,error};
    }

    return { projectionDetail, saveError, createProjectionDetail}
  })