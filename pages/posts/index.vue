 
<template>
    <TextIntro :title="page.data.title.iv" :excerpt="page.data.text.iv" />
    <PostsVertical />
</template>

<script setup>
definePageMeta({
    layout: 'page-wide',
})

const config = useRuntimeConfig();
const { data: page } = await useFetch(`${config.API_BASE_URL}/pages/8b45ca29-a0f8-468b-8b80-7432c76fa160`)
</script>