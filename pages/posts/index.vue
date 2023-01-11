 
<template>
    <div class="flex flex-col gap-20 py-20">
        <div class="text-center">
            <h1 class=""> {{ page.data.title.iv }} </h1>
            <div v-html="page.data.text.iv"></div> 
        </div>
        <div v-if="pending">
            Loading ...
        </div>
        <div v-else class="grid grid-cols-2 gap-8 px-8">
            <div v-for="post in posts.items" :key="post" class="bg-white">
                <NuxtLink :to="`/posts/${post.data.slug.iv}`" class="">
                    <nuxt-img :src="`${config.API_ASSETS_URL}/${post.data.image.iv[0]}`" :alt="post.data.title.iv"
                        sizes="sm:200px lg:400px" class="w-full h-[620px] object-cover" />
                    {{ post.data.title.iv }}
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig();
definePageMeta({
    layout: 'page-wide',
})
const { pending, data: posts } = useLazyFetch(`${config.API_BASE_URL}/posts?$orderby=created desc`)
watch(posts, (newPosts) => {
    // console.log(newPosts.items)
})

const { data: page } = await useFetch(`${config.API_BASE_URL}/pages/8b45ca29-a0f8-468b-8b80-7432c76fa160`)
</script>