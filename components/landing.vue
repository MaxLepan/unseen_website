<script lang="ts" setup>

</script>

<template>
  <section class="bg-beige-200 grid sm:grid-cols-2 gap-1 lg:p-20 sm:p-10 p-5 rounded-lg h-full">
    <div class="z-10">
      <h1 class="font-bold font-title lg:text-5xl md:text-3xl sm:block hidden">{{ $t('headlineStart') }}<span
          class="text-olive-400">{{
          $t('headlineColored')
        }}</span>{{ $t('headlineEnd') }}</h1>
      <div class="flex flex-row gap-3.5 mt-4 mb-8">
        <img alt="Marker" src="/icons/place_01.svg">
        <p class="font-title font-bold md:text-lg sm:text-base text-base">{{ $t('subHeadline') }}</p>
      </div>
      <button class="bg-olive-200 pt-2.5 pb-2.5 pr-4 pl-4 sm:w-auto w-full rounded-md">
        <a class="font-body font-bold lg:text-2xl md:text-lg text-base" href="#">{{
            $t('downloadApp')
          }}</a>
      </button>
    </div>
    <div class="bg-black-500 h-10 w-10 sm:block hidden"></div>
  </section>
</template>

<style scoped>

</style>