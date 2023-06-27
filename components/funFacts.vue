<script lang="ts" setup>

</script>

<template>
  <section class="flex lg:flex-row flex-col justify-around sm:my-16 my-8 sm:px-0 px-10">
    <div class="flex sm:flex-row flex-col sm:gap-5 gap-1 sm:items-center items-start z-20">
      <p class="font-title font-bold text-5xl">50%</p>
      <div>
        <p class="font-title font-bold text-xl">{{ $t('statsHeadline') }}</p>
        <p class="font-title">{{ $t('statsQuestion') }}</p>
      </div>
    </div>
    <div class="flex flex-row gap-3.5 sm:justify-center justify-between sm:mt-0 mt-5">
      <img alt="insect icon" class="h-full" src="/icons/insects_icons.svg">
      <img alt="amphibian icon" class="h-full" src="/icons/amphibian_icons.svg">
      <img alt="arachnid icon" class="h-full" src="/icons/arachnid_icons.svg">
      <img alt="reptile icon" class="h-full" src="/icons/reptile_icons.svg">
    </div>
  </section>
</template>


<style scoped>

</style>