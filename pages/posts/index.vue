 
<template>
    <div class="flex flex-col justify-center items-center px-8 py-20">
        <div class="text-center flex flex-col gap-6 w-full max-w-[600px]">
            <h1 class="text-4xl"> {{ page.data.title.iv }} </h1>
            <div class="flex flex-col gap-4" v-html="page.data.text.iv"></div>
        </div>
    </div>

    <div class="flex flex-col gap-20 mb-20">
        <div v-if="pending">
            Loading ...
        </div>
        <div v-else class="grid grid-cols-2 gap-8 px-8">
            <div v-for="post in posts.items" :key="post" class="bg-white">
                <NuxtLink :to="`/posts/${post.data.slug.iv}`" class="">
                    <nuxt-img :src="`${config.API_ASSETS_URL}/${post.data.image.iv[0]}`" :alt="post.data.title.iv"
                        sizes="sm:200px lg:400px" class="w-full h-[620px] object-cover" />

                </NuxtLink>
                <!-- :style="`background: ${project.data.color.iv}`" -->
                <div class="p-8 flex flex-col gap-6" style="background: red">
                    <div class="flex flex-row justify-between">
                        <h3 class="text-2xl text-[#101014]">Nulla vitae elit libero</h3>
                        <h4 class="text-lg text-[#101014]">£345</h4>
                    </div>
                    {{ post.data.title.iv }}
                    <button @click="store.hit()" class="!bg-[#101014] !text-white btn">Add to basket</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { useStore } from '~/store/store'
const store = useStore()


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