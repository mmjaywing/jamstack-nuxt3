
<template>
    <!--<pre>{{ posts }} </pre>-->
    total {{ posts.total }}
    <div v-if="pending">
        Loading ...
    </div>
    <div v-else>
        <div v-for="post in posts.items" :key="post">
            <!-- do something -->
            {{ post.data.title }}
        </div>
    </div>

</template>
 
<script setup>

// useFetch
const { pending, data: posts } = useLazyFetch('https://cloud.squidex.io/api/content/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/posts')
watch(posts, (newPosts) => {
    // Because posts starts out null, you will not have access
    // to its contents immediately, but you can watch it.
    // console.log(newPosts.items)
})
console.log(posts)
</script>
 