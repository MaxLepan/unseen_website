<script lang="ts" setup>
const {locale} = useI18n();
</script>

<template>
  <header class="flex flex-row justify-between pb-10 sm:px-0 px-10 sm:pt-0 pt-10 relative z-20">
    <img alt="unseen logo" class="md:block hidden" src="/icons/unseen_logo.svg">
    <img alt="unseen logo" class="md:hidden block" src="/icons/small_logo_black.svg">
    <form class="z-10">
      <select v-model="locale">
        <option selected value="fr">FR</option>
        <option value="en">EN</option>
      </select>
    </form>
  </header>
</template>

<style scoped>

</style>