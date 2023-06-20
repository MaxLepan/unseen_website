<script lang="ts" setup>

</script>

<template>
  <section class="bg-beige-200 grid sm:grid-cols-2 gap-1 lg:p-20 sm:p-10 p-5 rounded-lg h-full">
    <div class="bg-black-500 h-10 w-10 sm:block hidden"></div>
    <div class="z-10">
      <h1 class="font-extrabold font-title lg:text-8xl md:text-6xl text-4xl sm:block hidden">UNSEEN</h1>
      <h2 class="font-bold font-title lg:text-5xl md:text-3xl sm:block hidden">{{ $t('headline') }}</h2>
      <div class="sm:hidden">
        <h2 class="font-title text-4xl font-extrabold">{{ $t('mobileHeadline1') }}</h2>
        <h2 class="font-title text-4xl font-extrabold text-end">{{ $t('mobileHeadline2') }}</h2>
        <h2 class="font-title text-3xl font-extrabold">{{ $t('mobileHeadline3') }}</h2>
      </div>
      <p class="mt-5 mb-9 font-body md:text-xl sm:text-lg text-base">{{ $t('subHeadline') }}</p>
      <button class="bg-olive-200 pt-2.5 pb-2.5 pr-4 pl-4 sm:w-auto w-full rounded-md">
        <a class="font-body font-bold lg:text-2xl md:text-lg text-base" href="#">{{
            $t('downloadApp')
          }}</a>
      </button>
    </div>
  </section>
</template>

<style scoped>

</style>