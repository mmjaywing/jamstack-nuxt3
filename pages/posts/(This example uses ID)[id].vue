<template>
    {{ $route.params.id }} /
    {{ postData.data.title.iv }} /
    {{ postData.data.text.iv }}
</template>
<script setup>
const route = useRoute();
const { data: postData } = await useFetch(`${config.API_BASE_URL}/posts/${route.params.id}`)
console.log(postData)
</script>