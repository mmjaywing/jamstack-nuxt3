<template>
    <HeroBasket :image="`${config.API_ASSETS_URL}/${post.items[0].data.image.iv}`" :title="post.items[0].data.title.iv"
        :excerpt="post.items[0].data.excerpt.iv" />

    <TextBlockColor :color="post.items[0].data.backgroundColor.iv" :hasWhiteText="post.items[0].data.hasWhiteText.iv"
        :title="post.items[0].data.title.iv" :excerpt="post.items[0].data.text.iv" />

    <TextAbout />

    <ImageFeatureLargeTitle :image="`${config.API_ASSETS_URL}/${post.items[0].data.imageTwo.iv}`"
        :title="post.items[0].data.title.iv" :excerpt="post.items[0].data.excerpt.iv" />

    <PostsHorizontal limit="4" />

    <TextSimple />

   
</template>

<script setup>
const config = useRuntimeConfig();

definePageMeta({
    layout: 'page-wide',
})

const route = useRoute();
const { data: post } = await useFetch(`${config.API_BASE_URL}/posts?$filter=data/slug/iv%20eq%20%27${route.params.slug}%27`)

/* 
const data = reactive({
    title: 'Reactive title test now available in <template>'
})
*/
</script>