 <template>
    <div class=" h-hero min-h-[600px] w-full flex relative">
        <nuxt-img :src="image" alt="test" sizes="sm:200px lg:400px"
            class="w-full h-hero object-cover h-hero min-h-[600px] absolute top-0 left-0" />
        <div
            class="bg-gradient-to-t from-[#16171D] to-transparent h-hero min-h-[600px] w-full absolute t-0 l-0 z-10 bg-opacity-30">
        </div>

        <div class="container mx-auto px-4 flex items-end py-8 relative z-20">
            <div class="text-white flex gap-10 flex-col md:max-w-[600px]">
                <h1 class="text-5xl md:text-7xl">{{ title }}</h1>
                <p class="text-xl serif">{{ excerpt }}</p>

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