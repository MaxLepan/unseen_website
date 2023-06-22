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
<template>
  <div :class="'flex flex-col gap-4 items-center justify-start ' + position + ' lg:w-60 md:w-44 sm:w-36 w-full'">
    <img :alt="title + ' icon'" :src="'/' + imageFilename" class="w-64"/>
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