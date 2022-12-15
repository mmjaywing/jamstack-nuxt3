 
<template>
    <!--<pre>{{ posts }} </pre>-->
   
    <div v-if="pending">
        Loading ...
    </div>
    <div v-else>
        <div v-for="post in posts.items" :key="post">
            <!--<NuxtLink :to="`/posts/${post.id}`" class=""> {{
                    post.data.title.iv 
            }}  
            </NuxtLink>-->
            <NuxtLink :to="`/posts/${post.data.slug.iv }`" class=""> {{
                    post.data.title.iv 
            }}  
            </NuxtLink>
        </div>
    </div>

</template>
 
<script setup>

definePageMeta({
    layout: 'page',
})

// useFetch
// const headers = useRequestHeaders(['cookie'])
const { pending, data: posts } = useLazyFetch('https://cloud.squidex.io/api/content/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/posts'/* , { headers }*/ )
watch(posts, (newPosts) => {
    // Because posts starts out null, you will not have access
    // to its contents immediately, but you can watch it.
    console.log(newPosts.items)
})
console.log(posts)
</script>
 
