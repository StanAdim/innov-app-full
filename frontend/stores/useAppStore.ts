
type GlobalData = {
    isDialogOpen:boolean
}
export const useAppStore = defineStore('app', () => {
    const drawerState = ref(true)
    const tabValue = ref(0)
    const drawerIsOpen = computed(() => !drawerState.value)
    const drawerIsClose = computed(() => drawerState.value)
    const globalData = ref<GlobalData>({
        isDialogOpen: false
    })

    //Toogle the Draw
    function toogleDrawerState() {
        drawerState.value ? drawerState.value = !drawerState.value : drawerState.value = !drawerState.value
    }
    //Toogle the Open and Close
    function closeAndOpen() {
        globalData.isDialogOpen.value ? globalData.isDialogOpen.value = !globalData.isDialogOpen.value : globalData.isDialogOpen.value = !globalData.isDialogOpen.value
    }
    // Switch tab
    function switchTab(key:number){
        tabValue.value = key
    }
  
    return { globalData,closeAndOpen, drawerState, toogleDrawerState, drawerIsOpen, drawerIsClose, tabValue,switchTab }
  })