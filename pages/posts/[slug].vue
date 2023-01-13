<template>
    <PostHero :image="`${config.API_ASSETS_URL}/${post.items[0].data.image.iv}`" :title="post.items[0].data.title.iv"
        :excerpt="post.items[0].data.excerpt.iv" />

    <PostContentOne :color="post.items[0].data.backgroundColor.iv" :hasWhiteText="post.items[0].data.hasWhiteText.iv"
        :title="post.items[0].data.title.iv" :excerpt="post.items[0].data.text.iv" />

     
    <PostContentTwo :image="`${config.API_ASSETS_URL}/${post.items[0].data.image.iv}`"
        :title="post.items[0].data.title.iv" :excerpt="post.items[0].data.excerpt.iv" />


    <!-- 
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
    </div> -->


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