
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
    const isloading = ref(false);
    const notificationMessage = ref('')
    const showMessage = ref(false)
    const eduLevels = [
          'Primary School',
          'Secondary School',
          'Certificate',
          'Diploma',
          'Bachellor',
          'Masters',
        ];
  
      const economySector = [
        'E-commerce',
        'Fin Tech',
        'Edu Tech',
        'Agro Tech',
        'Health Tech',
        'Artificial Intelligence',
      ];

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
    // function toogleLoading() {
    //     loading.value ? loading.value = !loading.value : loading.value = !loading.value
    // }
    // Switch tab
    
    function switchTab(key:number){
        tabValue.value = key
    }
    const getYearsArray = computed(() => {
        // const currentYear = new Date().getFullYear();
        const startYear = 1984;
        const yearsArray = [];
        for (let year = startYear; year <= 2006; year++) {
          yearsArray.push(year);
        }
        return yearsArray;
      })
      // toogle laoding 
      const toogleLoading = ()=> isloading.value ? isloading.value = false : isloading.value = true
      const toogleShowMessage = ()=> {
        showMessage.value ? showMessage.value = false : showMessage.value = true
        setTimeout(function() {
          showMessage.value ? showMessage.value = false : showMessage.value = true
        }, 4000);
      }
      const AssignNotificationMessage = (message : string)=> {
        notificationMessage.value = message
        toogleShowMessage();
      }  
    // async function retrieveAppitems(){
    //     const response = await useApiFetch('/api/app/count-items')
    //     appItemCount.value = response.data.value?.data
    //     // console.log(response.data.value?.data);
    //     return response.data.value
    // }
  
    return { loading,globalData,toogleLoading,
        toogleShowMessage,AssignNotificationMessage,
        getYearsArray,
            drawerState,appItemCount,
            eduLevels,economySector,
            toogleDrawerState, drawerIsOpen, 
            drawerIsClose, tabValue,switchTab }
  })