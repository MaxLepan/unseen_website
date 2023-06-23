<script lang="ts" setup>

</script>

<template>
  <section class="bg-green-100 lg:p-20 sm:p-10 p-5 rounded-b-lg">
    <div class="md:w-11/12">
      <section class="flex flex-basis flex-wrap justify-center">
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/marine.jpg">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-title font-bold">Marine</h4>
          <p class="md:text-2xl sm:text-xl text-lg text-center font-body">{{ $t('teamMemberMarineText') }}</p>
        </div>
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/romain.jpg">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-title font-bold">Romain</h4>
          <p class="md:text-2xl sm:text-xl text-lg text-center font-body">{{ $t('teamMemberRomainText') }}</p>
        </div>
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/chloea.jpg">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-title font-bold">Chloé</h4>
          <p class="md:text-2xl sm:text-xl text-lg text-center font-body">{{ $t('teamMemberChloeAText') }}</p>
        </div>
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/chloef.png">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-title font-bold">Chloé</h4>
          <p class="md:text-2xl sm:text-xl text-lg text-center font-body">{{ $t('teamMemberChloeFText') }}</p>
        </div>
        <div class="md:basis-1/3 px-10 mt-10">
          <figure class="img-container w-full flex justify-center mx-auto sm:mb-10 mb-5">
            <img alt="" class="rounded-full h-full w-full object-cover" src="../assets/images/max.jpg">
          </figure>
          <h4 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl text-center font-title font-bold">Max</h4>
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