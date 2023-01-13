<template>
    <div class="flex flex-col md:flex-row md:h-hero min-h-[600px]">
        <div class="md:w-1/2 ">
            <nuxt-img :src="image" :alt="title" sizes="sm:200px lg:400px"
                class="w-full md:h-hero min-h-[600px] object-cover" />
        </div>
        <div class="md:w-1/2 flex items-center justify-center px-8 py-20">
            <div class="w-full max-w-[600px] gap-6 flex flex-col">
                <h1 class="text-5xl md:text-7xl">{{ title }}</h1>
                <p>{{ excerpt }}</p>
            </div>
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