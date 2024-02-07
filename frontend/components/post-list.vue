<script lang="ts" setup>
const blog = useBlogStore();
const appData = useAppStore()
const { data } = await blog.getAllPost();
</script>
<template>

</template>

<style scoped></style>
