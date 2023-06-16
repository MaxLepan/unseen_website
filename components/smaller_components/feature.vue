<script>
export default {
  props: {
    title: String,
    firstParagraph: String,
    secondParagraph: String,
    imageFilename: String,
  },
}
</script>

<template>
  <div class="grid grid-cols-2">
    <div class=""></div>
    <div>
      <h3>{{ title }}</h3>
      <p>{{ firstParagraph }}</p>
      <p>{{ secondParagraph }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>