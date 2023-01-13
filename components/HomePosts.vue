 
<template>

    <div class="flex flex-col mb-20 bg-[#1F2128]">
        <div class="flex flex-col px-8 py-20 gap-6 text-center min-w-full items-center justify-center">
            <h2 class="text-3xl">Cras mattis consectetur purus sit amet fermentum.</h2>
        </div>
        <div v-if="pending">
            Loading ...
        </div>
        <div v-else class="flex flex-col md:grid md:grid-cols-4 gap-8 md:px-8">
            <div v-for="post in posts.items" :key="post" :style="`background: ${post.data.backgroundColor.iv}`">

                <NuxtLink :to="`/posts/${post.data.slug.iv}`" class="">
                    <nuxt-img :src="`${config.API_ASSETS_URL}/${post.data.image.iv[0]}`" :alt="post.data.title.iv"
                        sizes="sm:200px lg:400px" class="w-full h-100 object-cover" />
                </NuxtLink>
                <div class="p-8 flex flex-col gap-6">
                    <div class="flex flex-row justify-between">
                        <h3 class="text-2xl " :class="(post.data.hasWhiteText.iv) ? '!text-white' : '!text-[#101014]'">
                            {{
                                post.data.title.iv
                            }}</h3>
                        <h4 class="text-lg" :class="(post.data.hasWhiteText.iv) ? '!text-white' : '!text-[#101014]'">£{{
                            post.data.price.iv
                        }}</h4>
                    </div>
                    <p class="h-20" :class="(post.data.hasWhiteText.iv) ? '!text-white' : '!text-[#101014]'">{{
                        post.data.excerpt.iv
                    }}</p>
                    <div class="flex flex-row gap-4">
                        <NuxtLink :to="`/posts/${post.data.slug.iv}`" class="  btn">Find out
                            more</NuxtLink>
                    </div>
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


const props = defineProps({
    foobar: {
        type: String,
        default: undefined,
    },
})
</script>