<template>
    <div class="bg-cover h-hero min-h-[600px] w-full flex">
        <div class="container mx-auto px-4 flex items-end py-8">
            <div class="text-white flex gap-6 flex-col">
                <h1 class="text-5xl md:text-7xl"> {{ store.counter }} items in your basket</h1>
                <p class="text-xl max-w-[600px] serif">Praesent commodo cursus magna, vel scelerisque nisl consectetur
                    et. Vestibulum id ligula porta felis euismod semper.</p>
                    <button v-if="store.counter" class="btn" @click="store.clear()">
                    <span>Clear basket</span>
                </button> 
                <NuxtLink v-if="!store.counter" to="/posts/" aria-label="content" class="btn">
                    <span>View wines</span>
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

// ALTERNATIVE TO '@click="store.clear()'
// let updateCount = () => {
//    store.$patch({
//        counter: store.counter + 1
//    })
// };
</script>
