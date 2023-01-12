<template>
    <div class="bg-hero bg-cover h-hero min-h-[600px] w-full flex relative" :style="`background: url(${config.API_ASSETS_URL}/${page.data.imageHero.iv}) no-repeat center center`">
        <div class="bg-gradient-to-t from-[#16171D] to-transparent h-hero min-h-[600px] w-full absolute t-0 l-0 z-10 bg-opacity-50"></div>
        <div class="container mx-auto px-4 flex items-end py-8 relative z-20">
            <div class="text-white flex gap-10 flex-col">
                <h1 class="text-7xl">{{ page.data.title.iv }}</h1>
                <p class="text-xl max-w-[600px] serif">{{ page.data.excerpt.iv }}</p>

                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
            </div>
        </div>
    </div>


    <!-- 
                <nuxt-img :src="`${config.API_ASSETS_URL}/${page.data.imageHero.iv}`" :alt="page.data.title.iv"
                        sizes="sm:200px lg:400px" class="w-full h-hero min-h-[600px] object-cover  top-0 left-0" />

    -->


    <HomePosts />

    

    <div class="flex h-hero min-h-[600px] bg-[#16171D] ">
        <div class="w-3/4">
            <nuxt-img
                src="https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="test" sizes="sm:200px lg:400px" class="w-full h-hero object-cover" />
        </div>
        <div class="w-1/4 flex justify-between flex-col p-8 gap-6">
            <h3 class="text-4xl">Vestibulum Lorem Commodo</h3>
            <div class="flex flex-col gap-6">
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="flex h-hero min-h-[600px] bg-[#16171D]">
        <div class="w-3/4">
            <nuxt-img
                src="https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="test" sizes="sm:200px lg:400px" class="w-full h-hero object-cover" />
        </div>
        <div class="w-1/4 flex justify-between flex-col  gap-6">
            <nuxt-img
                src="https://images.unsplash.com/photo-1630771496884-46ce7c270a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt="test" sizes="sm:200px lg:400px" class="w-full h-100 object-cover" />


            <div class="flex flex-col gap-6 p-8">
                <h3 class="text-2xl">Vestibulum Lorem Commodo</h3>
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
            </div>
        </div>
    </div>

    <!--STORE NAME = {{ store.name }} / {{ store.counter }}

    <button @click="clickMe()">CLICK ME</button>
    <button @click="store.hit()">CLICK ME 2</button>-->


</template>

<script setup>

import { useStore } from '~/store/store'
definePageMeta({
    layout: 'page-wide',
})

 


const store = useStore()

console.log("STORE = ", store)
console.log("STORE = ", store.name)


let clickMe = () => {
    store.$patch({
        counter: store.counter + 1
    })
};

const config = useRuntimeConfig();
const { data: page } = await useFetch(`${config.API_BASE_URL}/home/e645cdda-04e7-41f2-8d89-a3e21fd18b25`)
console.log(page)

useHead({
    title: 'My App',
    meta: [
        { name: 'description', content: 'My amazing site.' }
    ],
}) 


</script>
