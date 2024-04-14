<script setup>
defineProps({
    keyName:String,
    data: [String,Number],
    hasHr: {
        type: Boolean,
        default: true
    }
})
</script>
<template>
<p class="mb-0.5 p-0"><span class="deadline">{{keyName}}</span> {{ data }}</p>
<template v-if="hasHr">
    <hr class=" py-0.5 bg-rose-200" />
</template>
</template>