<script lang="ts" setup>

import SocialMedia from "~/components/smaller_components/socialMedia.vue";
import OurPartners from "~/components/smaller_components/ourPartners.vue";
</script>

<template>
  <div id="download">
    <div class="w-96 mx-auto z-20 relative">
      <p class="font-title text-2xl text-center font-semibold">{{ $t('downloadTextStart') }}<span
          class="text-olive-400">{{
          $t('downloadTextSpan')
        }}</span><br>{{ $t('downloadTextEnd') }}</p>
    </div>
    <div class="relative mt-20 z-20">
      <div class="absolute bottom-4 mx-auto left-0 right-0 transform -translate-y-1/2 grid grid-cols-12">
        <div
            class="sm:col-start-6 col-start-4 sm:col-span-2 col-span-6 flex flex-row items-center py-3 bg-olive-200 rounded">
          <div class="w-full">
            <a href="https://www.apple.com/fr/app-store/" target="_blank">
              <img alt="Télécharger sur l'AppStore" class="mx-auto" src="/icons/appStore.svg">
            </a>
          </div>
          <div class="h-5/6 w-[1px] border-[1px] border-beige-200"></div>
          <div class="w-full">
            <a href="https://play.google.com/store/apps" target="_blank">
              <img alt="Télécharger sur Google Play" class="mx-auto" src="/icons/googlePlay.svg">
            </a>
          </div>
        </div>
      </div>
      <img alt="" class="absolute left-1/3 bottom-64 lg:block hidden" src="/icons/feuille_01_3.svg">
      <img alt="" class="absolute left-1/4 bottom-40 lg:block hidden" src="/icons/feuille_03_2.svg">
      <img alt="" class="absolute right-80 bottom-10 lg:block hidden" src="/icons/feuille_02_3.svg">
      <div class="h-20 bg-beige-200"></div>
    </div>
  </div>
  <footer class="bg-beige-200">
    <OurPartners/>
    <SocialMedia/>
    <div class="bg-black-500 grid grid-cols-12 py-10 px-12">
      <div class="sm:col-start-6 col-start-4 sm:col-span-2 col-span-6">
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