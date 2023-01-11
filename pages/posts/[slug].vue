<template>
    <nuxt-img :src="`${config.API_ASSETS_URL}/${postData.items[0].data.image.iv[0]}`" alt="image"
        class="w-full h-120 object-cover" />
    {{ $route.params.slug }} /
    {{ postData.items[0].data.title.iv }} /
    <p class="text-white"> {{ postData.items[0].data.text.iv }} xx</p>

    <pre class="text-white">{{ postData }} </pre>
</template>

<script setup>

const config = useRuntimeConfig();

definePageMeta({
    layout: 'page-wide',
})

const route = useRoute();

//let { data: data } = {}

const { data: postData } = await useFetch(`${config.API_BASE_URL}/posts?$filter=data/slug/iv%20eq%20%27${route.params.slug}%27`)
console.log(postData)

</script>