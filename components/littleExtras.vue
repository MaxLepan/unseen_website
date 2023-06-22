<script lang="ts" setup>
import ImageTitleDescriptionExtras from "~/components/smaller_components/ImageTitleDescriptionExtras.vue";
</script>

<template>
  <section class="lg:p-24 md:p-12 sm:p-6 p-5 z-10 relative">
    <h2 class="font-title font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-10">{{
        $t('smallAdvantagesTitle')
      }}</h2>
    <div class="grid sm:grid-cols-3 grid-rows-1 sm:gap-0 gap-5 justify-evenly">
      <ImageTitleDescriptionExtras :caption="$t('smallAdvantageMapText')"
                                   :title="$t('smallAdvantageMapTitle')" imageFilename="images/add_photo_on_map.png"
                                   position="justify-self-start"/>
      <ImageTitleDescriptionExtras :caption="$t('smallAdvantageSearchText')"
                                   :title="$t('smallAdvantageSearchTitle')" imageFilename="images/search_around_you.png"
                                   position="justify-self-center"/>
      <ImageTitleDescriptionExtras :caption="$t('smallAdvantagePhobiaText')"
                                   :title="$t('smallAdvantagePhobiaTitle')" imageFilename="images/hide_with_phobia.png"
                                   position="justify-self-end"/>
    </div>
  </section>
</template>

<style scoped>

</style>