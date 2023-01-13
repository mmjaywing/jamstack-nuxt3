<template>

    <HomeHero :image="`${config.API_ASSETS_URL}/${page.data.imageHero.iv}`" :title="page.data.title.iv"
        :excerpt="page.data.excerpt.iv" />

    <HomePosts limit="4" />

    <HomeContentOne />






    <div class="flex flex-col md:flex-row md:h-hero min-h-[600px] bg-[#16171D] ">
        <div class="md:w-3/4">
            <nuxt-img
                src="https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="test" sizes="sm:200px lg:400px" class="w-full h-hero object-cover" />
        </div>
        <div class="md:w-1/4 flex justify-between flex-col gap-6">
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
