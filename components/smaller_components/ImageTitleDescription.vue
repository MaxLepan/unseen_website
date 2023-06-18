<script>
export default {
  props: {
    title: String,
    caption: String,
    imageFilename: String,
    position: String
  },
}
</script>
<!-- TODO : In prod, change /_nuxt/assets/ to something that will work correctly -->
<template>
  <div :class="'flex flex-col items-center justify-start ' + position + ' lg:w-60 md:w-44 sm:w-36 w-60'">
    <img :alt="title + 'icon'" :src="'/_nuxt/assets/' + imageFilename" class="lg:h-32 h-24"/>
    <h3 class="font-title font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center lg:mt-5 md:mt-4 sm:mt-3 mt-2">
      {{ title }}</h3>
    <p class="font-body lg:text-2xl md:text-xl sm:text-base text-sm text-center lg:mt-7 md:mt-5 sm:mt-3 mt-1">
      {{ caption }}</p>
  </div>
</template>

<style scoped>

</style>