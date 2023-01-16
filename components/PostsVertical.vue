 
<template>

    <div class="flex flex-col gap-20 mb-20">
        <div v-if="pending">
            Loading ...
        </div>
        <div v-else class="flex flex-col md:grid md:grid-cols-2 gap-8 md:px-8">
            <div v-for="post in posts.items" :key="post" class="bg-white">
                <div class="w-full h-[400px] md:h-[620px] overflow-hidden relative">
                    <NuxtLink :to="`/posts/${post.data.slug.iv}`" class="">
                        <nuxt-img :src="`${config.API_ASSETS_URL}/${post.data.image.iv[0]}`" :alt="post.data.title.iv"
                            sizes="sm:200px lg:400px"
                            class="w-full h-[400px] md:h-[620px] object-cover transform duration-200 hover:scale-105" />
                    </NuxtLink>
                </div>
                <div class="p-8 flex flex-col gap-6" :style="`background: ${post.data.backgroundColor.iv}`">
                    <div class="flex flex-row justify-between gap-6">
                        <h3 class="text-2xl" :class="(post.data.hasWhiteText.iv) ? '!text-white' : '!text-black'">
                            {{
                                post.data.title.iv
                            }}</h3>
                        <h4 class="text-lg]" :class="(post.data.hasWhiteText.iv) ? '!text-white' : '!text-black'">
                            £{{
                                post.data.price.iv
                            }}</h4>
                    </div>
                    <p :class="(post.data.hasWhiteText.iv) ? '!text-white' : '!text-black'">{{
                        post.data.excerpt.iv
                    }}</p>
                    <div class="flex flex-col md:flex-row gap-4">
                        <NuxtLink :to="`/posts/${post.data.slug.iv}`" class="btn w-full md:w-auto">Find out
                            more</NuxtLink>
                        <button @click="store.hit()" class="!bg-black !text-white btn w-full md:w-auto">Add to
                            basket</button>
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

const { pending, data: posts } = useLazyFetch(`${config.API_BASE_URL}/posts?$orderby=created desc`)
watch(posts, (newPosts) => {
    // console.log(newPosts.items)
})
</script>