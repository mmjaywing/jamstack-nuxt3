
<template>
    GET POSTS
</template>

<script  >
export default {
    // fetch data from server/api

    methods: {


    },

    async mounted() {
        const { data } = await useAsyncData('https://cloud.squidex.io/api/content/garpunkaldev/experience', () => {
            return $fetch('https://cloud.squidex.io/api/content/garpunkaldev/experience', {
                params: {
                    name: 'world'
                }
            })
        })

        console.log("DATA", data)
    }

}


</script>