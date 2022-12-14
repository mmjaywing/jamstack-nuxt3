
<template>

    <ul>
        <li v-for="user in users"
          :key="user">{{ user.name }}</li>
    </ul>
    
   {{ users }}
</template>



<script setup>
const { data: users } = await useFetch('https://gorest.co.in/public/v2/users')

console.log(users)
</script>

<!--
<script  >
export default {
    // fetch data from server/api

    methods: {


    },

    /* async mounted() {


        const { data } = await useAsyncData('https://cloud.squidex.io/api/content/garpunkaldev/experience', () => {
            return $fetch('https://cloud.squidex.io/api/content/garpunkaldev/experience', {
                params: {
                    name: 'world'
                }
            })
        })

        console.log("DATA", data)
    } */ 





}


</script> -->