 
<template>
    <!--<pre>{{ posts }} </pre>-->

    <div class="flex flex-col gap-20 py-20">
        <div class="text-center prose max-w-full">
            <h1 class="!text-white">Some content</h1>
            <p class="!text-white">Some mroe content</p>
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
                <NuxtLink :to="`/posts/${post.data.slug.iv}`" class=""> {{
                        post.data.title.iv
                }}
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
</script>
 
