<script lang="ts" setup>

import ImageTitleDescription from "~/components/smaller_components/ImageTitleDescription.vue";
</script>

<template>
  <section class="lg:p-24 md:p-12 sm:p-6 z-10 relative">
    <h2 class="font-title font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-10">{{ $t('ourValues') }}</h2>
    <div class="grid sm:grid-cols-3 grid-rows-1 sm:gap-0 gap-5 justify-evenly">
      <ImageTitleDescription :caption="$t('pedagogyText')"
                             :title="$t('pedagogy')" imageFilename="icons/pedagogie.svg" position="start"/>
      <ImageTitleDescription :caption="$t('compassionText')"
                             :title="$t('compassion')" imageFilename="icons/compassion.svg" position="center"/>
      <ImageTitleDescription :caption="$t('proximityText')"
                             :title="$t('proximity')" imageFilename="icons/proximite.svg" position="end"/>
    </div>
  </section>
</template>

<style scoped>

</style>