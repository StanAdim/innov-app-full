

export const useAppStore = defineStore('app', () => {
    const drawerState = ref(true)
    const drawerIsOpen = computed(() => !drawerState.value)
    const drawerIsClose = computed(() => drawerState.value)

    //Toogle the Draw
    function toogleDrawerState() {
        drawerState.value ? drawerState.value = !drawerState.value : drawerState.value = !drawerState.value
    }
  
    return { drawerState, toogleDrawerState, drawerIsOpen, drawerIsClose }
  })