<template>
  <section class="all-container relative bg-beige-200 py-24 sm:my-8 mb-28 mt-4 sm:px-28 px-5 sm:h-auto h-[210vh] relative">
    <h2 class="font-title text-center font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl sm:mb-20 mb-10">{{ $t('featureTitle') }}</h2>

    <div class="flex flex-col-reverse lg:flex-row">
      <div class="lg:flex-1 screen-img">
        <div class="diff-img-container flex justify-center relative">
          <figure class="flex flex-row gap-32 w-80 mt-10 lg:mt-0 img-quiz absolute sm:relative">
            <img alt="map" class="w-full basis-1/3 rounded-xl" :src="currentImage"/>
          </figure>
        </div>
      </div>

      <div class="lg:flex-1">
        <div class="flex flex-row mb-5">
          <figure>
            <img alt="recherche" class="w-11 rounded-full bg-beige-100 p-1" src="../public/icons/recherche.svg"/>
          </figure>
          <h3 class="font-title font-bold lg:text-2xl md:text-xl text-lg ml-4 mt-2">{{ $t('featureSubTitle') }}</h3>
        </div>

        <div class="flex flex-col">

          <div class="my-4 py-3.5 pl-5 lg:my-8 border-2 border-beige-300 flex flex-col items-start hover:bg-beige-300 duration-300" @mouseover="changeImage('/images/quiz_species.png')">
            <h4 class="bg-green-100 py-1 px-3.5 mb-3.5 rounded">{{ $t('firstFeatureHeadLine') }}</h4>
            <div class="pr-16">{{ $t('firstFeaturetext') }}</div>
          </div>

          <div class="my-4 py-3.5 pl-5 lg:my-8 border-2 border-beige-300 flex flex-col items-start hover:bg-beige-300 duration-300" @mouseover="changeImage('/images/quiz_place.png')">
            <h4 class="bg-sapin-100 py-1 px-3.5 mb-3.5 rounded">{{ $t('secondFeatureHeadLine') }}</h4>
            <div class="pr-16">{{ $t('secondFeaturetext') }}</div>
          </div>

          <div class="my-4 py-3.5 pl-5 lg:my-8 border-2 border-beige-300 flex flex-col items-start hover:bg-beige-300 duration-300" @mouseover="changeImage('/images/recherche.png')">
            <h4 class="bg-orange-100 py-1 px-3.5 mb-3.5 rounded">{{ $t('thirdFeatureHeadLine') }}</h4>
            <div class="pr-16">{{ $t('thirdFeaturetext') }}</div>
          </div>
        </div>
      </div>
    </div>
    <img alt="" class="md:visible invisible absolute rotate-[115deg] -right-[4%] -bottom-[6%] sm:block hidden z-0" src="/icons/wave.svg">
  </section>
</template>

<script>
export default {
  data() {
    return {
      currentImage: '/images/quiz_species.png',
    };
  },
  methods: {
    changeImage(src) {
      this.currentImage = src;
    },
  },
};
</script>

<style scoped>
</style>
