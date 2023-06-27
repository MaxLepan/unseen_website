<script lang="ts" setup>

</script>

<template>
  <section
      class="relative bg-beige-200 grid sm:grid-cols-2 gap-1 lg:px-20 lg:pt-0 sm:px-10 sm:pt-10 px-5 pt-5 sm:m-0 mx-5 rounded-lg h-full">
    <div class="z-10 lg:pt-20 pt-0 lg:pb-20 sm:pb-10 pb-5 self-center">
      <h1 class="font-bold font-title lg:text-5xl md:text-3xl text-5xl">{{ $t('headlineStart') }}<span
          class="text-olive-400">{{
          $t('headlineColored')
        }}</span>{{ $t('headlineEnd') }}</h1>
      <div class="flex flex-row gap-3.5 mt-4 mb-8">
        <img alt="Marker" src="/icons/place_01.svg">
        <h2 class="font-title font-bold md:text-lg sm:text-base text-base">{{ $t('subHeadline') }}</h2>
      </div>
      <button class="bg-olive-200 pt-2.5 pb-2.5 pr-4 pl-4 sm:w-auto w-full rounded-md">
        <a class="font-body font-bold lg:text-2xl md:text-lg text-base" href="#">{{
            $t('downloadApp')
          }}</a>
      </button>
    </div>
    <div class="w-3/4 justify-self-end sm:block hidden">
      <img alt="Application" class="z-10 relative" src="/images/mockup_fourmi.png">
    </div>
    <img alt="" class="absolute right-0 -top-24 sm:block hidden z-0" src="/icons/wave.svg">
  </section>
</template>

<style scoped>

</style>