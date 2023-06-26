<script lang="ts" setup>

</script>

<template>
  <section class="bg-beige-200 lg:p-20 sm:p-10 p-5 rounded-t-lg overflow-hidden sm:mx-0 mx-5">
    <div class="relative">
      <div class="lg:block hidden absolute bottom-4 left-52 transform translate-x-1/2 translate-y-1/2 z-0">
        <img alt="" src="/icons/feuille_01_2.svg">
      </div>
      <h2 class="font-title font-bold text-center sm:text-4xl text-5xl mb-14 z-10">{{
          $t('teamHeadline')
        }}</h2>
      <div class="lg:block hidden absolute bottom-10 right-80 transform translate-x-1/2 translate-y-1/2 z-0">
        <img alt="" src="/icons/feuille_02.svg">
      </div>
    </div>
    <div class="md:w-11/12">
      <section class="flex flex-basis flex-wrap justify-center">
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/marine.jpg">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl text-2xl text-center font-title font-bold">Marine</h4>
          <p class="md:text-2xl sm:text-xl text-lg text-center font-body">{{ $t('teamMemberMarineText') }}</p>
        </div>
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/romain.jpg">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl text-2xl text-center font-title font-bold">Romain</h4>
          <p class="md:text-2xl sm:text-xl text-lg text-center font-body">{{ $t('teamMemberRomainText') }}</p>
        </div>
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/chloea.jpg">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl text-2xl text-center font-title font-bold">Chloé A.</h4>
          <p class="md:text-2xl sm:text-xl text-lg text-center font-body">{{ $t('teamMemberChloeAText') }}</p>
        </div>
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/chloef.png">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl text-2xl text-center font-title font-bold">Chloé F.</h4>
          <p class="md:text-2xl sm:text-xl text-lg text-center font-body">{{ $t('teamMemberChloeFText') }}</p>
        </div>
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/max.jpg">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl text-2xl text-center font-title font-bold">Max</h4>
          <p class="md:text-2xl sm:text-xl text-lg text-center font-body">{{ $t('teamMemberMaxText') }}</p>
        </div>
      </section>
    </div>
  </section>
</template>


<style scoped>
.img-container {
  width: 200px;
  height: 200px;
}
</style>