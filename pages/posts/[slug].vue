<template>

    <div class="flex flex-col md:flex-row h-hero min-h-[600px]">
        <div class="w-1/2 flex items-center justify-center px-8">
            <div class="w-full max-w-[600px] gap-6 flex flex-col">
                <h1 class="text-3xl">Title</h1>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet,
                    consectetur adipiscing elit.</p>
                <button @click="store.hit()" class="btn">Add to basket</button>
            </div>
        </div>
        <div class="w-1/2">
            <nuxt-img :src="`${config.API_ASSETS_URL}/${post.items[0].data.image.iv}`" :alt="post.items[0].data.title.iv"
                        sizes="sm:600px lg:1440px" class="w-full h-[620px] object-cover" />
        </div>
    </div>

     



    <div class="bg-hero bg-cover h-hero min-h-[600px] w-full flex relative">
        <div
            class="bg-gradient-to-t from-[#16171D] to-transparent h-hero min-h-[600px] w-full absolute t-0 l-0 z-10 bg-opacity-50">
        </div>
        <div class="container mx-auto px-4 flex items-end py-8 relative z-20">
            <div class="text-white flex gap-6 flex-col">
                <h1 class="text-7xl">Welcome</h1>
                <p class="text-xl max-w-[600px] serif">Praesent commodo cursus magna, vel scelerisque nisl consectetur
                    et. Vestibulum id ligula porta felis euismod semper.</p>
                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="flex flex-col py-20 px-4">
        <div class="container mx-auto  flex flex-col  relative z-20 items-center gap-6">
        <h3 class="text-2xl">Nulla vitae elit libero</h3>
        <p class="md:columns-2">Donec sed odio dui. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.
            Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        </div>
    </div>



    <div class="flex flex-col py-20 px-4 bg-white">
        <div class="container mx-auto  flex flex-col  relative z-20 items-center gap-6">
        <h3 class="text-2xl">Nulla vitae elit libero</h3>
        <p class="">Donec sed odio dui. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.
            Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus vel
            augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.</p>
        </div>
    </div>


    <!-- <nuxt-img :src="`${config.API_ASSETS_URL}/${postData.items[0].data.image.iv[0]}`" alt="image"
        class="w-full h-120 object-cover" />
    {{ $route.params.slug }} /
    {{ postData.items[0].data.title.iv }} /
    <p class="text-white"> {{ postData.items[0].data.text.iv }} xx</p>

    <pre class="text-white">{{ postData }} </pre> -->


    <pre class="text-white">{{ post }} </pre>

  


    {{ post.items[0].data.image.iv }}
</template>

<script setup>
import { useStore } from '~/store/store'
const store = useStore()


const config = useRuntimeConfig();


definePageMeta({
    layout: 'page-wide',
})

const route = useRoute();

const { data: post } = await useFetch(`${config.API_BASE_URL}/posts?$filter=data/slug/iv%20eq%20%27${route.params.slug}%27`)
console.log(post)

</script>