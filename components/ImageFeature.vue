<template>
    <div class="flex flex-col md:flex-row md:h-hero min-h-[600px] bg-eigengrau">
        <div class="md:w-3/4">
            <nuxt-img :src="image" alt="test" sizes="sm:200px lg:400px" class="w-full h-hero object-cover" />
        </div>
        <div class="md:w-1/4 flex justify-between flex-col p-8 gap-6">
            <h3 class="text-4xl">{{ title }}</h3>
            <div class="flex flex-col gap-6">
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