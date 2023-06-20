<script lang="ts" setup>

</script>

<template>
  <section class="bg-green-100 lg:p-20 sm:p-10 p-5 rounded-lg">
    <div class="md:w-8/12">
      <h2 class="font-title font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl -rotate-6 sm:mb-20 mb-10">
        {{ $t('barkBeetlesHeadline') }}</h2>
      <h3 class="lg:text-4xl md:text-3xl sm:text-2xl text-xl font-semibold my-5">{{ $t('barkBeetlesSubHeadline') }}</h3>
      <p class="font-body font-medium sm:text-lg">{{ $t('barkBeetlesText') }}</p>
    </div>
    <figure class="w-full my-4">
      <img alt="scolytes" class="w-full object-cover" src="../assets/images/scolytes.png">
    </figure>
  </section>
</template>


<style scoped>

</style>