<template>
  <div class="flex w-full bg-black text-white justify-between h-[60px] px-8 items-center gap-4">
    <NuxtLink to="/" aria-label="logo">
      <nuxt-img src="/logo.svg" alt="logo" class="w-8" />
    </NuxtLink>

    <div class="flex gap-4">
      <NuxtLink to="/basket/">
        Basket</NuxtLink>
      <NuxtLink to="/posts/">
        Posts / Products</NuxtLink>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>