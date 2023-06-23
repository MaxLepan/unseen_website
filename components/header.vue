<script lang="ts" setup>
const {locale} = useI18n();
</script>

<template>
  <header class="flex flex-row justify-between pb-10">
    <img alt="unseen logo" src="/icons/unseen_logo.svg">
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