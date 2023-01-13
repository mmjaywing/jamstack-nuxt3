<template>


    <PostHero :image="`${config.API_ASSETS_URL}/${post.items[0].data.image.iv}`" :title="post.items[0].data.title.iv"
        :excerpt="post.items[0].data.excerpt.iv" />


    <div class="h-hero min-h-[600px] w-full flex relative"
        :style="`background: ${post.items[0].data.backgroundColor.iv}`">
        <div class="container mx-auto px-4 flex items-end py-8 relative z-20">
            <div class="text-white flex gap-6 flex-col">
                <h1 class="text-5xl md:text-7xl mb-4"
                    :class="(post.items[0].data.hasWhiteText.iv) ? '!text-white' : '!text-[#101014]'">More</h1>
                <div v-html="post.items[0].data.text.iv" class="text-xl max-w-[900px] serif"
                    :class="(post.items[0].data.hasWhiteText.iv) ? '!text-white' : '!text-[#101014]'"></div>
            </div>
        </div>
    </div>

    <div class="flex flex-col py-20 px-4">
        <div class="container mx-auto  flex flex-col  relative z-20 items-center gap-6">
            <h3 class="text-2xl">Nulla vitae elit libero</h3>
            <p class="md:columns-2">Donec sed odio dui. Curabitur blandit tempus porttitor. Vestibulum id ligula porta
                felis euismod semper.
                Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus
                vel
                augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor
                auctor. natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis
                lacus vel
                augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor
                auctor.</p>
        </div>
    </div>



    <div class="flex flex-col py-20 px-4 bg-white">
        <div class="container mx-auto  flex flex-col  relative z-20 items-center gap-6">
            <h3 class="text-2xl">Nulla vitae elit libero</h3>
            <p class="">Donec sed odio dui. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod
                semper.
                Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis lacus
                vel
                augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor
                auctor. natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus sagittis
                lacus vel
                augue laoreet rutrum faucibus dolor auctor. Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                dolor
                auctor.</p>
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

const route = useRoute();
const { data: post } = await useFetch(`${config.API_BASE_URL}/posts?$filter=data/slug/iv%20eq%20%27${route.params.slug}%27`)

/* 
const data = reactive({
    title: 'TEST TITLE' // await post.items[0].data.title.iv
})
*/
</script>