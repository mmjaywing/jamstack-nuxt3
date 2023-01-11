<template>
  <div class="flex w-full bg-[#101014] text-white justify-between h-[60px] px-8 items-center gap-4 fixed top-0">
    <NuxtLink to="/" aria-label="logo">
      <nuxt-img src="/logo.svg" alt="logo" class="w-8" />
    </NuxtLink>

    <div class="flex gap-4">
      
      <NuxtLink to="/about/">
        About</NuxtLink>
        <NuxtLink to="/posts/">
        Wines</NuxtLink>
    </div>
  </div>

</template>

<script>
export default {

}
</script>

<style>

</style>