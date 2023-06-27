<template>
  <section class="all-container relative bg-beige-200 py-24 sm:my-8 my-4 sm:px-28 px-5">
    <h2 class="font-title text-center font-bold lg:text-5xl md:text-4xl sm:text-3xl text-2xl sm:mb-20 mb-10">{{ $t('featureTitle') }}</h2>
    <div class="grid grid-cols-2">
      <div class="screen-img relative">
        <div class="diff-img-container">
          <figure class="flex flex-row gap-32 w-80 img-quiz absolute">
            <img alt="map" class="sm:block hidden w-full basis-1/3 rounded-xl" src="/images/quiz_species.png"/>
          </figure>
          <figure class="flex flex-row gap-32 w-80 img-place absolute">
            <img alt="map" class="sm:block hidden w-full basis-1/3 rounded-xl" src="/images/quiz_place.png"/>
          </figure>
          <figure class="flex flex-row gap-32 w-80 img-search absolute">
            <img alt="map" class="sm:block hidden w-full basis-1/3 rounded-xl" src="/images/recherche.png"/>
          </figure>
        </div>
      </div>

      <div>
        <div class="flex flex-row mb-5">
          <figure>
            <img alt="recherche" src="../public/icons/recherche.svg" class="w-11 rounded-full bg-beige-100 p-1"/>
          </figure>
          <h3 class="font-title font-bold lg:text-2xl md:text-xl text-lg ml-4 mt-2">{{ $t('featureSubTitle') }}</h3>
        </div>

        <div class="flex flex-col">
          <div class="my-8 py-3.5 pl-5 sm:my-4 border-2 border-beige-300 flex flex-col items-start" @click="changeImage(0)">
            <h4 class="bg-green-100 py-1 px-3.5 mb-3.5 rounded">{{ $t('firstFeatureHeadLine') }}</h4>
            <div class="pr-16">{{ $t('firstFeaturetext') }}</div>
          </div>

          <div class="my-8 py-3.5 pl-5 sm:my-4 border-2 border-beige-300 flex flex-col items-start" @click="changeImage(1)">
            <h4 class="bg-sapin-100 py-1 px-3.5 mb-3.5 rounded">{{ $t('secondFeatureHeadLine') }}</h4>
            <div class="pr-16">{{ $t('secondFeaturetext') }}</div>
          </div>

          <div class="my-8 py-3.5 pl-5 sm:my-4 border-2 border-beige-300 flex flex-col items-start" @click="changeImage(2)">
            <h4 class="bg-orange-100 py-1 px-3.5 mb-3.5 rounded">{{ $t('thirdFeatureHeadLine') }}</h4>
            <div class="pr-16">{{ $t('thirdFeaturetext') }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    changeImage(index) {
      const images = document.querySelectorAll('.diff-img-container img');
      images.forEach((image, i) => {
        if (i === index) {
          image.style.zIndex = 1;
        } else {
          image.style.zIndex = -1;
        }
      });
    },
  },
};
</script>

<style scoped>
</style>
