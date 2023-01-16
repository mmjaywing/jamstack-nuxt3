<template>
    <div class="flex flex-col md:flex-row md:h-hero min-h-[600px] bg-[#16171D] ">
        <div class="md:w-3/4">
            <nuxt-img :src="image" alt="test" sizes="sm:200px lg:400px" class="w-full h-hero object-cover" />
        </div>
        <div class="md:w-1/4 flex justify-between flex-col gap-6">
            <nuxt-img :src="imageSmall" alt="test" sizes="sm:200px lg:400px" class="w-full h-100 object-cover" />
            <div class="flex flex-col gap-6 p-8">
                <h3 class="text-2xl">{{ title }}</h3>
                <p>{{ excerpt }}</p>
                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
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
    imageSmall: {
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