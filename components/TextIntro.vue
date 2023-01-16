<template>
    <div class="flex flex-col justify-center items-center px-8 py-20">
        <div class="text-center flex flex-col gap-6 w-full max-w-[600px]">
            <h1 class="text-4xl"> {{ title }} </h1>
            <div class="flex flex-col gap-4" v-html="excerpt"></div>
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