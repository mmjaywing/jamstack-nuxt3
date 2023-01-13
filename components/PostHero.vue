<template>
    <div class="flex flex-col md:flex-row h-hero min-h-[600px]">
        <div class="w-1/2 flex items-center justify-center px-8">
            <div class="w-full max-w-[600px] gap-6 flex flex-col">
                <h1 class="text-3xl">{{ title }}</h1>
                <p>{{ excerpt }}</p>
                <button @click="store.hit()" class="btn">Add to basket</button>
            </div>
        </div>
        <div class="w-1/2">
            <nuxt-img :src="image" :alt="title" sizes="sm:200px lg:400px"
                class="w-full h-hero min-h-[600px] object-cover" />
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: {
        type: String,
        default: undefined,
    },
    title: {
        type: String,
        default: undefined,
    },
    excerpt: {
        type: String,
        default: undefined,
    },
})
</script>