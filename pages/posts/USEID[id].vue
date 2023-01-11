<template>
    {{ $route.params.id }} /
    {{ postData.data.title.iv }} /
    {{ postData.data.text.iv }}
</template>
<script setup>
const route = useRoute();
const { data: postData } = await useFetch(`https://cloud.squidex.io/api/content/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/posts/${route.params.id}`)
console.log(postData)
</script>