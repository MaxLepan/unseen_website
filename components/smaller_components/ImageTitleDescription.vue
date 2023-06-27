<script>
export default {
  props: {
    title: String,
    caption: String,
    imageFilename: String,
  },
}
</script>
<!-- TODO : In prod, change /_nuxt/assets/ to something that will work correctly -->
<template>
  <div class="flex flex-row gap-4 items-center justify-start w-full">
    <img :alt="title + ' icon'" :src="'/' + imageFilename" class="w-1/4"/>
    <div class="w-3/4 z-20 relative">
      <h3 class="font-title font-bold sm:text-2xl text-xl">
        {{ title }}</h3>
      <p class="font-body text-base">
        {{ caption }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>