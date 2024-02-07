type LeaderInfo = {
    name:string,
    id:number,
    designation:string,
    imgPath:string,
    order:string,
    email:string,
}


export const useLeaderStore = defineStore('leader', () => {
    const leaders = ref < LeaderInfo | null>(null)
    const hasLeaders = computed(() => !!leaders.value)
    const blogError = ref <any>(null)

    //Create Blog
    async function addLeader(info: LeaderInfo){
        const response = await useApiFetch('/api/auth/commission-leader',{
          method: 'POST',
          body: info as LeaderInfo
        });
        console.log(response)
        navigateTo('/auth/leaders/collection')
        retriveLeaders()
        return response;
    }
    async function retriveLeaders(){
        const {data,error,status} =  await useApiFetch('/api/auth/commission-leader');
        leaders.value = data.value
        return {
            data,error,status
        }
    }
   
  
    return { addLeader, leaders, blogError, retriveLeaders,hasLeaders}
  })