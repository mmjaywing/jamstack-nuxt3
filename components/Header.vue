<template>
  <div class="flex w-full bg-black text-white justify-between h-[60px] px-8 items-center gap-8 fixed top-0 z-40">
    <NuxtLink to="/" aria-label="logo">
      <nuxt-img src="/logo.svg" alt="logo" class="w-[20px] h-[30px]" sizes="sm:30px lg:30px" width="20px"
        height="30px" />
    </NuxtLink>
    <div class="flex gap-4">
      <NuxtLink to="/about/">
        About</NuxtLink>
      <NuxtLink to="/posts/">
        Wines</NuxtLink>
      <NuxtLink to="/basket/" class="flex flex-row gap-2 items-center justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        {{ store.counter }} Basket
      </NuxtLink>
    </div>
  </div>
</template>


<script setup>
import { useStore } from '~/store/store'
const store = useStore()
</script>
