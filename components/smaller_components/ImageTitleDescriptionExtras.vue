<script>
export default {
  props: {
    title: String,
    caption: String,
    imageFilename: String,
    iconFilename: String
  },
}
</script>
<template>
  <div class="flex flex-col items-center justify-start rounded">
    <div class="relative">
      <img :alt="title + ' icon'" :src="'/' + imageFilename" class="w-full"/>
      <div class="absolute bottom-0 right-10 transform translate-x-1/2 translate-y-1/2">
        <img :alt="title + ' icon'" :src="'/' + iconFilename" class="w-11 rounded-full bg-beige-100 p-1"/>
      </div>
    </div>
    <div class="bg-beige-200 px-6 pb-8 pt-9">
      <h3 class="font-title font-bold lg:text-2xl md:text-xl text-lg mb-1">
        {{ title }}</h3>
      <p class="font-body text-base leading-5">
        {{ caption }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>