<script setup>
const route = useRoute()
useHead({
    title: 'Competition profile'
})
const formData = ref({
    applicationCode: route.params.id,
    competitors:'',
    competitiveAdvantage:'',
    marketStrategy:'',
    teamCapacity:'',
})
const hasError = ref(false);
const validationError = ref(null);
const businessProfile = useCompetitionStore()
const appData = useAppDataStore()
// handle the form
const  handleForm = async ()=> {
    await businessProfile.createCompetitionDetail(formData.value)
    if(businessProfile.saveError){
        validationError.value = businessProfile.saveError
        hasError.value = true
    }
    else{
        validationError.value = null
        hasError.value = false;
        // formData.value = null
    }
//   console.log(formData.value)
}

</script>
<template>
    <!-- Start  Form -->
<div class="absolute top-10 left-5">
    <template v-if="hasError">
        <toasting-tip :message=" error[0]" v-for="error in validationError" :key="error" :is-failed="hasError" :is-succeed="hasError"/>
    </template>
</div>
<section class="contact-area">
    <div class="container">
        <progress-bar stage1="complete" stage2="complete"  stage3="current"/>
         <loading-bars v-if="appData.isloading" />
        <div class="row" v-if="!appData.isloading">
            <div class="col-lg-9">
                <div class="contact-form">
                    <h2>Competition Status <i class="fa-solid fa-people-group"></i></h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="row">
                            <div class="col-md-8">
                                <label for="competitors">Who are the competitors <span class="addNewInput">Add competitor <i class="fa-solid fa-plus"></i></span></label>
                                <input type="text" 
                                v-model="formData.competitors" id="competitors" placeholder="Competitor's Name">
                            </div>
                            <div class="col-md-12">
                                <label for="competitiveAdvantage">The competitive advantages</label>
                                <textarea v-model="formData.competitiveAdvantage" id="competitiveAdvantage" 
                                placeholder="Brief: What are the competitive advantages of your products"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="marketStrategy">The marketing strategies</label>
                                <textarea v-model="formData.marketStrategy" id="marketStrategy" 
                                placeholder="Brief: What will be your marketing strategies and channel of distribution"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="teamCapacity">The skills, expertise of Management Team</label>
                                <textarea v-model="formData.teamCapacity" id="teamCapacity" 
                                placeholder="Describe the skills, expertise and functions/duties of your management team. Team skills, experience and qualification."></textarea>
                            </div>
                            <div class="col-12">
                                <button class="button-1" type="submit">Save and Continue</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <!-- Contact Form Sidebar -->
            <div class="col-lg-3">
                <contact-card />
            </div>
        </div>
    </div>
</section>
<!-- End Form Section -->
</template>
