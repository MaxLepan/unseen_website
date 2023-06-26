<script lang="ts" setup>

</script>

<template>
  <section class="relative bg-beige-200 grid sm:grid-cols-2 gap-1 lg:p-20 sm:p-10 p-5 sm:m-0 mx-5 rounded-lg h-full">
    <div class="z-10">
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
    <img alt="" class="absolute right-0 -top-24 sm:block hidden" src="/icons/wave.svg">
    <div class="absolute w-1/3 right-16 sm:block hidden">
      <img alt="Application" class="" src="/images/mockup_fourmi.png">
    </div>
  </section>
</template>

<style scoped>

</style>