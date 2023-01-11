<template>
    <div>
        <div class="flex flex-col min-h-screen">
            <slot name="header">
                <Header />
            </slot>

            <div class="mt-[60px]">
                <slot />
            </div>

            <slot name="footer">
                <Footer />
            </slot>
        </div>
    </div>
</template>
 

