<template>
    <div class="bg-hero bg-cover h-hero min-h-[600px] w-full flex ">
        <div class="container mx-auto px-4 flex items-end py-8">
            <div class="text-white flex gap-6 flex-col">
                <h1 class="text-7xl">Welcome</h1>
                <p class="text-xl max-w-[600px] serif">Praesent commodo cursus magna, vel scelerisque nisl consectetur
                    et. Vestibulum id ligula porta felis euismod semper.</p>

                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
            </div>
        </div>
    </div>

    <div class="bg-[#1F2128] mb-20">
        <div class="flex flex-col px-8 py-20 gap-6 text-center min-w-full items-center justify-center">
            <h2 class="text-3xl">Cras mattis consectetur purus sit amet fermentum.</h2>
        </div>

        <div class="grid grid-cols-4 px-8 gap-6">
            <div class="flex flex-col gap-6">
                <nuxt-img
                    src="https://images.unsplash.com/photo-1630771496884-46ce7c270a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                    alt="test" sizes="sm:200px lg:400px" class="w-full h-100 object-cover !mb-0" />
                <h3 class="text-2xl">Fusce Ultricies Vehicula</h3>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies
                    vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                <NuxtLink to="/posts/" aria-label="content" class="btn">
                    <span>Wines</span>
                </NuxtLink>
            </div>
            <div>
                <nuxt-img
                    src="https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt="test" sizes="sm:200px lg:400px" class="w-full h-100 object-cover" />
            </div>
            <div>ITEM</div>
            <div>ITEM</div>
        </div>
    </div>


    <div class="flex h-hero min-h-[600px] bg-[#16171D] ">
        <div class="w-3/4">
            <nuxt-img
                src="https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="test" sizes="sm:200px lg:400px" class="w-full h-hero object-cover" />
        </div>
        <div class="w-1/4 flex justify-between flex-col p-8 gap-6">
            <h3 class="text-2xl">Vestibulum Lorem Commodo</h3>
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




    <div class="flex h-hero min-h-[600px] bg-[#16171D]">
        <div class="w-3/4">
            <nuxt-img
                src="https://images.unsplash.com/photo-1521512233585-c0bb78faee37?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                alt="test" sizes="sm:200px lg:400px" class="w-full h-hero object-cover" />
        </div>
        <div class="w-1/4 flex justify-between flex-col  gap-6">
            <nuxt-img
                src="https://images.unsplash.com/photo-1630771496884-46ce7c270a52?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80"
                alt="test" sizes="sm:200px lg:400px" class="w-full h-100 object-cover" />


            <div class="flex flex-col gap-6 p-8">
                <h3 class="text-2xl">Vestibulum Lorem Commodo</h3>
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
 
import { useStore } from '~/store/store'


definePageMeta({
    layout: 'page-wide',
})

const store = useStore()

console.log("STORE = ", store.name)

</script>
