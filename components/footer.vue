<script lang="ts" setup>

import SocialMedia from "~/components/smaller_components/socialMedia.vue";
</script>

<template>
  <footer class="bg-beige-200 mt-20">
    <SocialMedia/>
    <div class="bg-black-500 grid grid-cols-12 py-10 px-12">
      <div class="col-start-6 col-span-2">
        <p class="text-beige-200 font-title sm:text-base text-sm text-center">Copyright 2023 - Unseen</p>
      </div>
      <div class="col-start-12 flex justify-end">
        <img alt="small logo" class="sm:block hidden" src="/icons/small_logo.svg"/>
      </div>
    </div>
  </footer>
</template>

<style scoped>

</style>