<template>
    <div class="md:h-hero min-h-[600px] w-full flex relative" :style="`background: ${color}`">
        <div class="container mx-auto px-4 flex py-20 relative z-20">
            <div class="text-white flex gap-6 flex-col justify-between ">
                <h1 class="text-5xl md:text-7xl mb-4" :class="hasWhiteText ? '!text-white' : '!text-black'">{{
                    title
                }}</h1>
                <div v-html="excerpt" class="text-xl md:text-2xl max-w-[900px] serif"
                    :class="hasWhiteText ? '!text-white' : '!text-black'"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    color: {
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
    hasWhiteText: {
        type: Boolean,
        default: false,
    },
})
</script>