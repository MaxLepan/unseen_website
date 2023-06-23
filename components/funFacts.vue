<script lang="ts" setup>

</script>

<template>
  <section class="flex flex-row justify-around py-16">
    <div class="flex flex-row gap-5 items-center">
      <p class="font-title font-bold text-5xl">50%</p>
      <div>
        <p class="font-title font-bold text-xl">{{ $t('statsHeadline') }}</p>
        <p class="font-title">{{ $t('statsQuestion') }}</p>
      </div>
    </div>
    <div class="flex flex-row gap-3.5">
      <img alt="insect icon" class="h-full" src="/icons/insects_icons.svg">
      <img alt="amphibian icon" class="h-full" src="/icons/amphibian_icons.svg">
      <img alt="arachnid icon" class="h-full" src="/icons/arachnid_icons.svg">
      <img alt="reptile icon" class="h-full" src="/icons/reptile_icons.svg">
    </div>
  </section>
</template>


<style scoped>

</style>