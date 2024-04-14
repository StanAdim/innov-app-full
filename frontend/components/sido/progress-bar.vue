<script setup>
defineProps({
    stage1: {
      type:String,
      default: 'incomplete'
    },
    stage2: {
      type:String,
      default: 'incomplete'
    },
    stage3: {
      type:String,
      default: 'incomplete'
    },
    stage4: {
      type:String,
      default: 'incomplete'
    },
})
</script>
<template>
  <section style="padding: .4rem">
    <!-- data values complete , current , incomplete  -->
    <ol class="my-progress-bar">
      <li class="my-progress-bar--step"  :data-my-progress-bar-step="stage1">
        <div class="my-progress-bar--step--symbol">
          <i class="fa-solid fa-check"></i>
        </div>
        <span class="my-progress-bar--step-text">Stage 1</span>
      </li>

      <li class="my-progress-bar--step" :data-my-progress-bar-step="stage2">
        <div class="my-progress-bar--step--symbol">
          <i class="fa-solid fa-check"></i>
        </div>
        <span class="my-progress-bar--step-text">Stage 2</span>
      </li>

      <li class="my-progress-bar--step" :data-my-progress-bar-step="stage3">
        <div class="my-progress-bar--step--symbol">
          <i class="fa-solid fa-check"></i>
        </div>
        <span class="my-progress-bar--step-text">Stage 3</span>
      </li>

      <li class="my-progress-bar--step" :data-my-progress-bar-step="stage4">
        <div class="my-progress-bar--step--symbol">
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <span class="my-progress-bar--step-text">Stage 4</span>
      </li>
    </ol>
  </section>
</template>