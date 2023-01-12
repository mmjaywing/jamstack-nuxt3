 
<template>


    <!--<div class="bg-[#1F2128] mb-20">
        <div class="flex flex-col px-8 py-20 gap-6 text-center min-w-full items-center justify-center">
            <h2 class="text-3xl">Cras mattis consectetur purus sit amet fermentum.</h2>
        </div>
        <div class="grid grid-cols-4 px-8 gap-6">
            <div class="flex flex-col gap-6">
                <nuxt-img
                    src="https://images.unsplash.com/photo-1630771496884-46ce7c270a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                    alt="test" sizes="sm:200px lg:400px" class="w-full h-100 object-cover !mb-0" />
                <h3 class="text-2xl">Fusce Ultricies Vehicula</h3>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>More</span>
                </NuxtLink>
            </div>
            <div>
                <nuxt-img
                    src="https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="test" sizes="sm:200px lg:400px" class="w-full h-100 object-cover" />
            </div>
            <div>ITEM</div>
            <div>ITEM</div>
        </div>
    </div>-->





    <div class="flex flex-col mb-20 bg-[#1F2128]">

        <div class="flex flex-col px-8 py-20 gap-6 text-center min-w-full items-center justify-center">
            <h2 class="text-3xl">Cras mattis consectetur purus sit amet fermentum.</h2>
        </div>

        <div v-if="pending">
            Loading ...
        </div>

        <div v-else class="grid grid-cols-4 gap-8 px-8">
            <div v-for="post in posts.items" :key="post" :style="`background: ${post.data.backgroundColor.iv}`">


                <NuxtLink :to="`/posts/${post.data.slug.iv}`" class="">
                    <nuxt-img :src="`${config.API_ASSETS_URL}/${post.data.image.iv[0]}`" :alt="post.data.title.iv"
                        sizes="sm:200px lg:400px" class="w-full h-100 object-cover" />
                </NuxtLink>


                <div class="p-8 flex flex-col gap-6">
                    <div class="flex flex-row justify-between">
                        <h3 class="text-2xl text-[#101014]" :style="`color: ${post.data.textColor.iv}`"> {{
                            post.data.title.iv
                        }}</h3>
                        <h4 class="text-lg text-[#101014]" :style="`color: ${post.data.textColor.iv}`">£{{
                            post.data.price.iv
                        }}</h4>
                    </div>
                    <p class="h-20" :style="`color: ${post.data.textColor.iv}`">{{ post.data.excerpt.iv }}</p>
                    <div class="flex flex-row gap-4">
                        <NuxtLink :to="`/posts/${post.data.slug.iv}`" class="  btn">Find out
                            more</NuxtLink>
                        <!-- <button @click="store.hit()" class="!bg-[#101014] !text-white btn">Add to basket</button> -->

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

</script>