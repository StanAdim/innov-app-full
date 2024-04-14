<script  setup>

definePageMeta({
  layout: 'default',
}) 
useHead({
  title:'Applicant profile'
})
const formData = ref({
  fullName: '',
  birthYear: 'none',
  nidaNumber: '',
  educationLevel: 'none',
  BusinessRegStatus: '0',
  phoneNumber: '',
  email: '',
  businessSector: 'none',
  businessName: '',
  businessLocation: '',
})
const hasError = ref(false);
const validationError = ref(null);
const appData = useAppDataStore()
const applicantProfile = useApplicantStore()
// handle the form
const  handleForm = async ()=> {
   await applicantProfile.createApplicantProfile(formData.value)
  if(applicantProfile.saveError){
    hasError.value = true
    validationError.value = applicantProfile.saveError
  }
  else{
    validationError.value = null
    hasError.value = false;
    // formData.value = null
  }
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
    <progress-bar stage1="current" />
      <loading-bars v-if="appData.isloading" />
        <div class="row" v-if="!appData.isloading">
            <div class="col-lg-9">
                <div class="contact-form">
                    <h2>Applicant Personal Profile <i class="fa-solid fa-address-card"></i></h2>
                    <form id="contact-form" @submit.prevent="handleForm()">
                        <div class="row">
                            <div class="col-md-6">
                              <label for="fullName">Applicant Full Name </label>
                                <input type="text" 
                                v-model="formData.fullName" id="fullName" placeholder="Your name">
                            </div>
                            <div class="col-md-6">
                              <label for="birthYear">Birth Year</label>
                              <select v-model="formData.birthYear" id="birthYear">
                                <option value="none" disabled>Choose birth Year</option>
                                <option v-for="year in appData.getYearsArray" 
                                :key="year">{{year}}</option>
                              </select>                            
                            </div>
                            <div class="col-md-6">
                              <label for="nidaNumber">Nida Number</label>
                                <input type="text" id="nidaNumber"
                                v-model="formData.nidaNumber" placeholder="Your name">
                            </div>
                            <div class="col-md-6">
                              <label for="educationLevel">Education Level</label>
                              <select v-model="formData.educationLevel" id="educationLevel">
                                <option value="none" disabled>Choose Education Level</option>
                                <option v-for="level in appData.eduLevels" :key="level">{{level}}</option>
                              </select>                            
                            </div>
                            <div class="col-md-6">
                                <label for="phoneNumber">Phone Number</label>
                                <input type="text" id="phoneNumber"
                                 v-model="formData.phoneNumber" placeholder="+255..">
                            </div>
                            <div class="col-md-6">
                                <label for="email">E-mail</label>
                                <input type="text" id="email"
                                v-model="formData.email" placeholder="Your Email">
                            </div>
                            <div class="col-md-12">
                              <label for="BusinessRegStatus">Business Registration Status</label>
                              <select v-model="formData.BusinessRegStatus" id="BusinessRegStatus">
                                <option value="0">NO</option>
                                <option value="1">YES</option>
                              </select>
                            </div>
                            <template v-if="formData.BusinessRegStatus === '1' ">
                              <div class="col-md-4">
                                <label for="businessName">Business Name</label>
                                <input type="text" id="businessName"
                                v-model="formData.businessName" placeholder="Business Name">
                              </div>
                              <div class="col-md-4">
                                <label for="businessLocation">Business Location</label>
                                <input type="text" id="businessLocation"
                                v-model="formData.businessLocation" placeholder="Business Location">
                              </div> 
                              <div class="col-md-4">
                                  <label for="businessSector">Business Sector</label>
                                  <select v-model="formData.businessSector" id="businessSector">
                                    <option value="none" disabled>Choose Economic Sector</option>
                                    <option v-for="sector in appData.economySector" :key="sector">{{sector}}</option>
                                  </select>                                    
                              </div>
                            </template>
                            <!-- <div class="col-md-12">
                              <label for="">Business Economy Sector</label>
                                <textarea v-model="formData.name" placeholder="Write out"></textarea>
                            </div> -->
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

<style scoped></style>
