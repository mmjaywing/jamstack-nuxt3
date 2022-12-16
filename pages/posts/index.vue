 
<template>
    <!--<pre>{{ posts }} </pre>-->

    <div class="flex flex-col gap-20 py-20">
        <div class="text-center prose max-w-full">
            <h1 class="!text-white"> {{ page.data.title.iv }} </h1>
            <p class="!text-white">{{ page.data.text.iv }}</p>
        </div>
        <div v-if="pending">
            Loading ...
        </div>
        <div v-else class="grid grid-cols-2 gap-8">
            <div v-for="post in posts.items" :key="post" class="bg-white">
                <!--<NuxtLink :to="`/posts/${post.id}`" class=""> {{
                post.data.title.iv 
            }}  
            </NuxtLink>-->
                <NuxtLink :to="`/posts/${post.data.slug.iv}`" class="">
                    <nuxt-img
                        :src="`https://cloud.squidex.io/api/assets/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/${post.data.image.iv[0]}`"
                        :alt="post.data.title.iv" sizes="sm:200px lg:400px" class="w-full h-80 object-cover" />

                    {{ post.data.title.iv }}
                </NuxtLink>
            </div>
        </div>
    </div>

</template>
 
<script setup>

definePageMeta({
    layout: 'page',
})

// useFetch
// const headers = useRequestHeaders(['cookie'])
const { pending, data: posts } = useLazyFetch('https://cloud.squidex.io/api/content/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/posts'/* , { headers }*/)
watch(posts, (newPosts) => {
    // Because posts starts out null, you will not have access
    // to its contents immediately, but you can watch it.
    console.log(newPosts.items)
})
console.log(posts)


const { data: page } = await useFetch(`https://cloud.squidex.io/api/content/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/pages/8b45ca29-a0f8-468b-8b80-7432c76fa160`)


</script>
 

 