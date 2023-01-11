<template>
    <div>
        <div class="flex flex-col min-h-screen bg-neutral-900">
            <slot name="header">
                <Nav />
            </slot>

            <slot />

            <slot name="footer">
                <Footer />
            </slot>
        </div>
    </div>
</template>
  

 