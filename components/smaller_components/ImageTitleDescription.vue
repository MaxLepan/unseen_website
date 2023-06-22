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
  <div
      :class="'sm:flex grid sm:flex-col grid-cols-2 gap-4 items-center justify-start ' + position + ' lg:w-64 md:w-44 sm:w-36 w-full'">
    <img :alt="title + ' icon'" :src="'/' + imageFilename"
         class="lg:h-32 h-16 sm:order-first order-last"/>

    <div>
      <h3 class="font-title font-bold lg:text-4xl md:text-3xl sm:text-2xl text-xl sm:text-center lg:mt-5 md:mt-4 sm:mt-3 mt-2">
        {{ title }}</h3>
      <p class="font-body md:text-xl sm:text-lg text-base sm:text-center lg:mt-7 md:mt-5 sm:mt-3 mt-1">
        {{ caption }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>