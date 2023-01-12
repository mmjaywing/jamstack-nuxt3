<template>
    <div class="bg-[#A6307F] h-hero min-h-[600px] w-full flex ">
        <div class="container mx-auto px-4 flex items-end py-8">
            <div class="text-white flex gap-6 flex-col">
                <h1 class="text-7xl">About</h1>
                <p class="text-xl max-w-[600px] serif">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Curabitur blandit tempus porttitor. Donec ullamcorper nulla non metus auctor fringilla.</p>

                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
            </div>
        </div>
    </div>

 


 


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
 


</script>
