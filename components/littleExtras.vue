<script lang="ts" setup>
import ImageTitleDescriptionExtras from "~/components/smaller_components/ImageTitleDescriptionExtras.vue";
</script>

<template>
  <section class="sm:mx-0 my-12 sm:my-24 mx-5 z-10 relative">
    <div class="relative">
      <div class="lg:block hidden absolute -bottom-2 left-60 transform translate-x-1/2 translate-y-1/2">
        <img alt="" src="/icons/feuille_03.svg">
      </div>
      <h2 class="font-title font-bold text-center text-4xl mb-14">{{
          $t('smallAdvantagesTitle')
        }}</h2>
      <div class="lg:block hidden absolute bottom-10 right-72 transform translate-x-1/2 translate-y-1/2">
        <img alt="" src="/icons/feuille_01.svg">
      </div>
    </div>
    <div class="grid sm:grid-cols-3 grid-rows-1 sm:gap-14 gap-10 justify-evenly">
      <ImageTitleDescriptionExtras :caption="$t('smallAdvantageMapText')"
                                   :title="$t('smallAdvantageMapTitle')" iconFilename="icons/add_photo_to_map.svg"
                                   imageFilename="images/add_photo_on_map.png"/>
      <ImageTitleDescriptionExtras :caption="$t('smallAdvantageNewsText')"
                                   :title="$t('smallAdvantageNewsTitle')" iconFilename="icons/news_parks.svg"
                                   imageFilename="images/news_parks.png"/>
      <ImageTitleDescriptionExtras :caption="$t('smallAdvantagePhobiaText')"
                                   :title="$t('smallAdvantagePhobiaTitle')"
                                   iconFilename="icons/adjust_phobias.svg" imageFilename="images/adjust_phobias.png"/>
    </div>
  </section>
</template>

<style scoped>

</style>