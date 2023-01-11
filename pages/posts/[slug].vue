<template>


    <nuxt-img
        :src="`https://cloud.squidex.io/api/assets/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/${postData.items[0].data.image.iv[0]}`"
        alt="image" class="w-full h-120 object-cover" />

    {{ $route.params.slug }} /
    {{ postData.items[0].data.title.iv }} /
    <p class="text-white"> {{ postData.items[0].data.text.iv }} xx</p>

    <pre class="text-white">{{ postData }} </pre>
</template>

<script setup>
definePageMeta({
    layout: 'page-wide',
})

const route = useRoute();

let { data: data } = {}

const { data: postData } = await useFetch(`https://cloud.squidex.io/api/content/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/posts?$filter=data/slug/iv%20eq%20%27${route.params.slug}%27`)
console.log(postData)



</script>

<!-- 
<script>
export default {

    data() {
        return {
            post: ''
        }
    },

    async mounted() {
        alert(this.$route.params.id)
        const { data: postData } = await useFetch(`https://cloud.squidex.io/api/content/87972021-6ff5-47f5-bb6f-a2a9ea899fd4/posts/${this.$route.params.id}`)


        console.log(postData)

    }
}
</script>
-->