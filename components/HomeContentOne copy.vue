<template>
  <div class="flex flex-col md:flex-row md:h-hero min-h-[600px] bg-[#16171D] ">
        <div class="md:w-3/4">
            <nuxt-img
                src="https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="test" sizes="sm:200px lg:400px" class="w-full h-hero object-cover" />
        </div>
        <div class="md:w-1/4 flex justify-between flex-col p-8 gap-6">
            <h3 class="text-4xl">Vestibulum Lorem Commodo</h3>
            <div class="flex flex-col gap-6">
                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                    Integer
                    posuere erat a ante venenatis dapibus posuere velit aliquet.</p>
                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    image: {
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
})
</script>