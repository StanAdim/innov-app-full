
type GlobalData = {
    isDialogOpen:boolean,
}
type AppItem ={
    users:string,
    leaders:string,
    posts:string,
    features:string,
    banners:string
}

export const useAppStore = defineStore('app', () => {
    const appItemCount  = ref< AppItem | null >(null)
    const loading = ref(false)
    const drawerState = ref(true)
    const tabValue = ref(0)
    const drawerIsOpen = computed(() => !drawerState.value)
    const drawerIsClose = computed(() => drawerState.value)
    const globalData = ref<GlobalData>({
        isDialogOpen: false,
    })
    //Toogle the Draw
    function toogleDrawerState() {
        drawerState.value ? drawerState.value = !drawerState.value : drawerState.value = !drawerState.value
    }
    //Toogle the loading
    function toogleLoading() {
        loading.value ? loading.value = !loading.value : loading.value = !loading.value
    }
    // Switch tab
    
    function switchTab(key:number){
        tabValue.value = key
    }
    async function retrieveAppitems(){
        const response = await useApiFetch('/api/app/count-items')
        appItemCount.value = response.data.value?.data
        // console.log(response.data.value?.data);
        return response.data.value
    }
  
    return { loading,globalData,toogleLoading,
            drawerState, retrieveAppitems,appItemCount,
            toogleDrawerState, drawerIsOpen, 
            drawerIsClose, tabValue,switchTab }
  })