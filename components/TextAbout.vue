<template>
    <div class="flex flex-col py-20 px-4 bg-white">
        <div class="container mx-auto flex flex-col md:flex-row relative z-20 justify-between gap-6">
            <div class="md:w-1/2 flex flex-col gap-6">
                <h3 class="text-2xl text-black">Nulla vitae elit libero</h3>
                <p class="text-black">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Cras mattis
                    consectetur purus sit amet fermentum. Nulla vitae elit libero, a pharetra augue. Vivamus sagittis
                    lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p class="text-black">Nulla vitae elit libero, a pharetra augue. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros. Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.

                    Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis
                    ornare vel eu leo. Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculus mus. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>

                <NuxtLink to="/about/" aria-label="content" class="!bg-black !text-white btn w-full md:w-auto">
                    <span>About</span>
                </NuxtLink>
            </div>

            <div class="md:w-1/4 ">
                <nuxt-img src="/images/ali-nejatian-iTygyN6iaZU-unsplash.webp" alt="about" sizes="sm:200px lg:400px"
                    class="w-full  min-h-[400px] object-cover" />
            </div>
        </div>
    </div>
</template>