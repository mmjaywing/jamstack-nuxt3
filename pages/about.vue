<template>
    <HeroBlockColor :title="page.data.title.iv" :excerpt="page.data.text.iv" />

</template>

<script setup>
definePageMeta({
    layout: 'page-wide',
})

const config = useRuntimeConfig();

const { data: page } = await useFetch(`${config.API_BASE_URL}/pages/4b03fd70-71bb-4506-bc5e-e91f91ddd76a`)
</script>
