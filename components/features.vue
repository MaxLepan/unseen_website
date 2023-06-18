<script setup>
import Feature from "~/components/smaller_components/feature.vue";
</script>

<template>
  <section class="lg:p-24 md:p-12 sm:p-6 z-10 relative">
    <h2 class="font-title font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-10">{{ $t('featuresTitle') }}</h2>
    <Feature
        :firstParagraph="$t('pedagogyText')"
        :secondParagraph="$t('featureMapText2')"
        :title="$t('featureMapTitle')"
        imageFilename="placeholder.png"
    />
    <Feature
        :firstParagraph="$t('featureQuizText1')"
        :secondParagraph="$t('featureQuizText2')"
        :title="$t('featureQuizTitle')"
        imageFilename="placeholder.png"
    />
    <Feature
        :firstParagraph="$t('pedagogyText')"
        :secondParagraph="$t('featureMapText2')"
        :title="$t('featureMapTitle')"
        imageFilename="placeholder.png"
    />
    <Feature
        :firstParagraph="$t('featureQuizText1')"
        :secondParagraph="$t('featureQuizText2')"
        :title="$t('featureQuizTitle')"
        imageFilename="placeholder.png"
    />
  </section>
</template>

<style scoped>

</style>