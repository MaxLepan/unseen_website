<script setup></script>


<template>
  <section class="lg:p-24 md:p-12 sm:p-6 p-5 z-10 relative">
    <h2 class="font-title font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl mb-10">{{ $t('featureMapTitle') }}</h2>
    <div class="flex flex-row gap-32">
      <img alt="map" class="sm:block hidden w-full basis-1/3" src="/images/map.png"/>
      <div class="basis-2/3 flex flex-col gap-9">
        <p>{{ $t('featureMapText1Start') }}<b>{{ $t('featureMapText1Bold') }}</b>{{ $t('featureMapText1End') }}</p>
        <p>{{ $t('featureMapText2Start') }}<b>{{ $t('featureMapText2Bold') }}</b></p>
        <p><b>{{ $t('featureMapText3Bold') }}</b>{{ $t('featureMapText3End') }}</p>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>