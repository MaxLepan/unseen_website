<script>
export default {
  props: {
    firstParagraph: String,
    secondParagraph: String,
    thirdParagraph: String,
    imageFilename: String,
  },
}
</script>

<template>
  <div class="grid grid-cols-2">
    <div>
      <p>{{ firstParagraph }}</p>
      <p>{{ secondParagraph }}</p>
      <p>{{ thirdParagraph }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>