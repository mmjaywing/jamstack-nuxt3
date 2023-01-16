 
<template>
    <div class="flex flex-col justify-center items-center px-8 py-20">
        <div class="text-center flex flex-col gap-6 w-full max-w-[600px]">
            <h1 class="text-4xl"> {{ page.data.title.iv }} </h1>
            <div class="flex flex-col gap-4" v-html="page.data.text.iv"></div>
        </div>
    </div>

    <PostsVertical />


</template>

<script setup>
definePageMeta({
    layout: 'page-wide',
})

const config = useRuntimeConfig();

const { data: page } = await useFetch(`${config.API_BASE_URL}/pages/8b45ca29-a0f8-468b-8b80-7432c76fa160`)
</script>