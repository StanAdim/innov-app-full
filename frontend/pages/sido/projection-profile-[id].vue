<script setup>
const route = useRoute()
useHead({
    title: 'Business Projection profile'
})
const formData = ref({
    applicationCode: route.params.id,
    expectedRevenue:'',
    machineEquipment:'',
    workingCapital:'',
    investmentPlan:'',
    financingSource:'',
    supportNeeded:'',
    challenges:'',
})
const hasError = ref(false);
const validationError = ref(null);
const businessProjection = useProjectionStore()
const appData = useAppDataStore()
// handle the form
const  handleForm = async ()=> {
    await businessProjection.createProjectionDetail(formData.value)
    if(businessProjection.saveError){
        validationError.value = businessProjection.saveError
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
    <progress-bar stage1="complete" stage2="complete"  stage3="complete" stage4="current"/>
      <loading-bars v-if="appData.isloading" />
        <div class="row" v-if="!appData.isloading">
            <div class="col-lg-9">
                <div class="contact-form">
                    <h2>Business Projections <i class="fa-solid fa-arrow-up-right-dots"></i></h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="row">
                            <div class="col-md-6">
                                <label for="expectedRevenue">How much will your business generate</label>
                                <input type="number" 
                                v-model="formData.expectedRevenue" id="expectedRevenue" placeholder="Revenue Projection">
                            </div>
                            <div class="col-md-6">
                                <label for="workingCapital">The current working capital invested</label>
                                <input type="text" 
                                v-model="formData.workingCapital" id="workingCapital" placeholder="The working capital invested and value">
                            </div>

                            <div class="col-md-12">
                                <label for="investmentPlan">The future investment plan</label>
                                <textarea v-model="formData.investmentPlan" id="investmentPlan" 
                                placeholder="Brief: How much do you plan to invest"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="financingSource">The financing sources</label>
                                <textarea v-model="formData.financingSource" id="financingSource" 
                                placeholder="Brief: What will be the financing sources and how much you plan to source"></textarea>
                            </div>
                            <div class="col-md-12">
                                <label for="supportNeeded">The support needed</label>
                                <textarea v-model="formData.supportNeeded" id="supportNeeded" 
                                placeholder="Brief: What support do you envisage you will need?"></textarea>
                            </div>
                            <div class="col-md-6">
                                <label for="machineEquipment">Business Tools <span class="addNewInput">Add Equipment <i class="fa-solid fa-plus"></i></span></label>
                                <input type="text" 
                                v-model="formData.machineEquipment" id="machineEquipment" placeholder="Add current machines and equipment and its value">
                            </div>
                            <div class="col-md-6">
                                <label for="challenges"> The challenges you foresee <span class="addNewInput">Add Chanllenge <i class="fa-solid fa-plus"></i></span></label>
                                <input type="text" 
                                v-model="formData.challenges" id="challenges" placeholder="Add challenge">
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
