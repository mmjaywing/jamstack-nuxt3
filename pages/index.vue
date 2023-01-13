<template>
    <HomeHero :image="`${config.API_ASSETS_URL}/${page.data.imageHero.iv}`" :title="page.data.title.iv"
        :excerpt="page.data.excerpt.iv" />
    <HomePosts limit="4" />
    <HomeContentOne :image="`${config.API_ASSETS_URL}/${page.data.imageComponentOne.iv}`"
        :title="page.data.titleComponentOne.iv" :excerpt="page.data.excerptComponentOne.iv" />
    <HomeContentTwo :image="`${config.API_ASSETS_URL}/${page.data.imageComponentTwo.iv}`"
    :imageSmall="`${config.API_ASSETS_URL}/${page.data.imageComponentTwoSmall.iv}`"
        :title="page.data.titleComponentTwo.iv" :excerpt="page.data.excerptComponentTwo.iv" />
</template>

<script setup>
definePageMeta({
    layout: 'page-wide',
})

useHead({
    title: 'SEO title',
    meta: [
        { name: 'description', content: 'Jaywing Nuxt3 Tailwind Squidex' }
    ],
})

const config = useRuntimeConfig();
const { data: page } = await useFetch(`${config.API_BASE_URL}/home/e645cdda-04e7-41f2-8d89-a3e21fd18b25`)
</script>
