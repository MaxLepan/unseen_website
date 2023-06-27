<script lang="ts" setup>

import ImageTitleDescription from "~/components/smaller_components/ImageTitleDescription.vue";
</script>

<template>
  <section class="lg:p-20 sm:p-10 p-5 sm:mx-0 mx-5 mb-24 rounded-b-lg overflow-hidden bg-beige-200">
    <div class="flex justify-center items-center gap-10 mb-10">
      <div class="h-[1px] bg-black flex-grow border-[1px] border-beige-400 rounded"></div>
      <h2 class="font-title text-2xl italic z-20 relative">{{ $t('ourValues') }}</h2>
      <div class="h-[1px] bg-black flex-grow border-[1px] border-beige-400 rounded"></div>
    </div>
    <div class="grid md:grid-cols-3 grid-rows-1 gap-10 justify-evenly">
      <ImageTitleDescription :caption="$t('pedagogyText')"
                             :title="$t('pedagogy')" imageFilename="icons/pedagogie.svg"/>
      <ImageTitleDescription :caption="$t('proximityText')"
                             :title="$t('proximity')" imageFilename="icons/proximite.svg"/>
      <ImageTitleDescription :caption="$t('sensitizeText')"
                             :title="$t('sensitize')" imageFilename="icons/sensibilitation.svg"/>
    </div>
  </section>
</template>

<style scoped>

</style>