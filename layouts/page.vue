<template>
    <div>
        <div class="flex flex-col min-h-screen bg-neutral-900">
            <slot name="header">
                <Nav />
            </slot>
            <div class="container mx-auto px-4">
                <slot />
            </div>
            <slot name="footer">
                <Footer />
            </slot>
        </div>
    </div>
</template>
  

 