<script lang="ts" setup>
useHead({
  title: "ICTC - SIDO Incubation Programme",
});
const businessPlanSections = [
    "The uniqueness of the proposed service/product and its commercialization potential.",
    "Clearly defined target markets preferably large markets with high growth potential.",
    "A well-defined competitors analysis.",
    "The competitive advantage of the service/product.",
    "The skills and expertise of the management team.",
    "The model or prototype maturity.",
    "The submitted concept should at least include a clear understanding of the following.",
    "Problem and/or gap in the market and/or need and/or opportunity.",
    "The Solution with all its features/description and its current status.",
    "The prototype current status (include all images and links).",
    "Market size, core and adjacent markets and the targeted market.",
    "Competitors and the start-up competitive edge.",
    "Teams skills, experience and qualification.",
    "The business model, revenue streams and value proposition.",
    "Got to market, sales, marketing strategies, channels and the plan to acquire the targeted market.",
    "Financial projection.",
    "At least one year business and technical comprehensive milestones."
];

</script>

<template>
  <!-- <section class="hero-area">
    <div class="shap-1"></div>
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="hero-caption">
            <div class="hero-caption-full pt-100">
              <h2>SIDO Incubation Programme</h2>
              <div class="partner-logo">
                <nuxt-link to="/">
                  <img src="/logo/sido.png" alt="" />
                </nuxt-link>
              </div>
              <p>Application for individuals with Innovative Ideas to participate in SIDO incubation Program.</p>
              <div class="hero-btn mt-30">
                <nuxt-link to="/sido/applicant-profile" class="button-1">Start Now</nuxt-link>
                </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="hero-img">
            <img src="assets/img/banner.svg" alt="hero-img" />
          </div>
        </div>
      </div>
    </div>
  </section> -->
  <!-- Start Features Box Area -->
  <section class="awesome-features ">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 offset-lg-2">
          <div class="section-title text-center">
            <h2>Programme Admission Criteria</h2>
            <div class="section-devider"></div>
                <p>Before you apply for SIDO Incubation Programme its important you read <span class="deadline">Careful and Prepare</span> the following Programme Criteria</p>
          </div>
        </div>
      </div>



      <div class="row justify-content-center">
        <div class="col-md-6 my-2 bg">    
          <ul class="space-y-2 text-left text-gray-700 ">
              <li class="flex items-center space-x-3 rtl:space-x-reverse" v-for="item in businessPlanSections" :key="item">
                  <svg class="flex-shrink-0 w-3.5 h-3.5 text-amber-700 dark:text-amber-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                  </svg>
                  <span>{{item}}</span>
                </li>
          </ul>
          <div class="hero-btn mt-30">
            <nuxt-link to="/sido/applicant-profile" class="button-1">Start now</nuxt-link>
            <nuxt-link to="/sido/applicant-profile" class="button-1">Update</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
.partner-logo {
  height: 160px;
  width: 200px;
  margin-bottom: 1rem;
}
</style>
