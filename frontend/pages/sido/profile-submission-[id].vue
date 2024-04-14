<script setup>
useHead({
  title: "Application Submission",
});
definePageMeta({})
const appData = useAppDataStore();
const router = useRoute();
const id = router.params.id;
const application = ref({})
const openPersonal = ref(false);
const openBusiness = ref(true);
const openCompetition = ref(true);
const openProjection = ref(true);
const  submittionButton = ref(false)

const nowDate = new Date()

function toogleAccordion() {
  openBusiness.value = true;
  openCompetition.value = true;
  openProjection.value = true;
  submittionButton.value = false
  return (openPersonal.value = false);
}
function toogleAccordion2() {
  openPersonal.value = true;
  openCompetition.value = true;
  openProjection.value = true;
  submittionButton.value = false
  return (openBusiness.value = false);
}
function toogleAccordion3() {
  openPersonal.value = true;
  openBusiness.value = true;
  openProjection.value = true;
  submittionButton.value = false
  return (openCompetition.value = false);
}
function toogleAccordion4() {
  openPersonal.value = true;
  openCompetition.value = true;
  openBusiness.value = true;
  submittionButton.value = true
  return (openProjection.value = false);
}
const applicantStore = useApplicantStore();
await applicantStore.applicationBeforeSubmit(id)
application.value = applicantStore.OnSubmitApplication


</script>
<template>
  <section class="dosoft-faq-section">
    <div class="container" >
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title mb-20 text-center">
            <h2>
              <i class="fa-regular fa-face-smile"></i>
              {{ application?.data?.fullName }} Application Overview
              <i class="fa-regular fa-face-smile"></i>
            </h2>
            <div class="section-devider"></div>
            <p v-if="application">Kindly, Review your informantion before you submit</p>
            <p v-else>Wait data is loading ...</p>
          </div>
        </div>
      </div>

      <div class="row m-auto mb-4 bg-cyan-100">
        <div class="col-lg-12" v-if="application">
          <div class="md:flex py-2">
            <ul
              class="flex-column space-y space-y-4 text-sm font-medium dark:text-lime-900-400 md:me-4 mb-4 md:mb-0"
            >
              <li @click.prevent="toogleAccordion()">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-teal-50 dark:hover:bg-gray-700 dark:hover:text-white"
                  aria-current="page"
                >
                  Personal Profile
                </a>
              </li>
              <li @click.prevent="toogleAccordion2()">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-teal-50 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Business Details
                </a>
              </li>
              <li @click.prevent="toogleAccordion3()">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-teal-50 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Competitors Status
                </a>
              </li>
              <li @click.prevent="toogleAccordion4()">
                <a
                  href="#"
                  class="inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 bg-gray-50 hover:bg-gray-100 w-full dark:bg-teal-50 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  Business Projection
                </a>
              </li>
            </ul>
            <div
              class="p-6 bg-gray-50 text-medium dark:text-lime-900 dark:bg-teal-50 rounded-lg"
              :class="{ hide: openPersonal }"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Personal Information
              </h3>
              <UsableParagraph key-name="Name" :data="application?.data.fullName" :has-hr="false" />
              <template v-if="application?.data"><UsableParagraph  key-name="Age" :data="nowDate.getFullYear() - application?.data.birthYear" :has-hr="false" /></template>
              <UsableParagraph key-name="NIDA Number" :data="application?.data.nidaNumber" :has-hr="false" />
              <UsableParagraph key-name="Email" :data="application?.data.email" :has-hr="false" />
              <UsableParagraph key-name="Phone" :data="application?.data.phoneNumber" :has-hr="false" />
              <UsableParagraph key-name="Education level:" :data="application?.data.educationLevel" :has-hr="false" />
            </div>
            <div
              class="p-6 bg-gray-50 text-medium dark:text-lime-900-400 dark:bg-teal-50 rounded-lg"
              :class="{ hide: openBusiness }"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Business Details
              </h3>
              <template v-if="application?.data.BusinessRegStatus != '0' ">
                <UsableParagraph key-name="Business Name" :data="application?.data.businessName" :has-hr="false" />
                <UsableParagraph key-name="Business Sector" :data="application?.data.businessSector" :has-hr="false" />
                <UsableParagraph key-name="Business Location" :data="application?.data.businessLocation" :has-hr="true" />
              </template>

                <UsableParagraph key-name="Background " :data="application?.data.businessDetails.background" />
                <UsableParagraph key-name="Market | Social Problem " :data="application?.data.businessDetails.marketProblem" />
                <UsableParagraph key-name="Prototype | Model " :data="application?.data.businessDetails.prototypeDescription" />
                <UsableParagraph key-name="Market Base" :data="application?.data.businessDetails.marketBase" />
                <UsableParagraph key-name="Market Size" :data="application?.data.businessDetails.marketSize" />
                  
            </div>
            <div
              class="p-6 bg-gray-50 text-medium dark:text-lime-900-400 dark:bg-teal-50 rounded-lg"
              :class="{ hide: openCompetition }"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Competitors Information
              </h3>
              <UsableParagraph key-name="Competitors " :data="application?.data.competitorsDetails.competitors" />
              <UsableParagraph key-name="Competitive Advantage" :data="application?.data.competitorsDetails.competitiveAdvantage" />
              <UsableParagraph key-name="Unique Strategy " :data="application?.data.competitorsDetails.marketStrategy" />
              <UsableParagraph key-name="Team Management " :data="application?.data.competitorsDetails.teamCapacity" />

            </div>
            <div
              class="p-6 bg-gray-50 text-medium dark:text-lime-900-400 dark:bg-teal-50 rounded-lg"
              :class="{ hide: openProjection }"
            >
              <h3 class="text-lg font-bold text-gray-900 mb-2">
                Business Projections
              </h3>
              <UsableParagraph key-name="Expected Revenue " :data="application?.data.projectionDetails.expectedRevenue" />
              <UsableParagraph key-name="Financial Sources " :data="application?.data.projectionDetails.financingSource" />
              <UsableParagraph key-name="Machines | Equipment " :data="application?.data.projectionDetails.machineEquipment" />
              <UsableParagraph key-name="Working Capital " :data="application?.data.projectionDetails.workingCapital" />
              <UsableParagraph key-name="Investment Plan " :data="application?.data.projectionDetails.investmentPlan" />
              <UsableParagraph key-name="Challenges " :data="application?.data.projectionDetails.challenges" />
              <UsableParagraph key-name="Support Needed " :data="application?.data.projectionDetails.supportNeeded" />
            </div>
          </div>
          <div class="m-2" v-if="submittionButton">
            <button class="button-1" type="submit">Submit Application</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hide {
  @apply hidden;
}
</style>