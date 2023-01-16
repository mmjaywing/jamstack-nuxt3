<template>
    <div class="bg-[#A6307F] h-hero min-h-[600px] w-full flex ">
        <div class="container mx-auto px-4 flex items-end py-8">
            <div class="text-white flex gap-6 flex-col">
                <nuxt-img src="/logo.svg" alt="logo" class="w-48 mb-8" />
                <h1 class="text-5xl md:text-7xl">{{ title }}</h1>

                <div v-html="excerpt" class="text-xl max-w-[600px] serif"></div>

                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
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