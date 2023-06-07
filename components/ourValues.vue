<script lang="ts" setup>

import ImageTitleDescription from "~/components/smaller_components/ImageTitleDescription.vue";
</script>

<template>
  <section class="lg:p-24 md:p-12 sm:p-6 z-10 relative">
    <h2 class="font-title font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-10">Nos valeurs</h2>
    <div class="grid sm:grid-cols-3 grid-rows-1 sm:gap-0 gap-5 justify-evenly">
      <ImageTitleDescription caption="Partage de connaissances et d'informations diverses sur les petites bêtes"
                             imageFilename="icons/pedagogie.svg" position="start" title="Pédagogie"/>
      <ImageTitleDescription caption="Amener un attrait et une sympathie envers les petites bêtes"
                             imageFilename="icons/compassion.svg" position="center" title="Compassion"/>
      <ImageTitleDescription caption="Discours accueillants et informels pour mieux comprendre notre environnement"
                             imageFilename="icons/proximite.svg" position="end" title="Proximité"/>
    </div>
  </section>
</template>

<style scoped>

</style>