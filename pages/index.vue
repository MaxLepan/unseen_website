<template>
  <Header/>
  <Landing/>
  <FunFacts/>
  <Features/>
  <LittleExtras/>
  <PromotionalVideo/>
  <Team/>
  <OurValues/>
  <div id="container" class="w-full absolute sm:flex hidden flex-col justify-start z-0">
    <svg id="motion-path" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
      <path id="path" class="transparent"
            d="M198,15 c-5,76 33,47 36,140 c-1,56 -40,60 -39,112 c-5,65 32,68 38,124 c-1,54 -42,36 -43,102"
            fill="none" stroke-dasharray="0 0" stroke-linecap="butt"
            stroke-width="1"
      ></path>
    </svg>
    <div id="target" class="overflow-clip h-[80px] w-[76px]">
      <img alt="ant" class="ant relative h-full max-w-none" src="@/assets/images/ant-spritesheet.png"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {gsap} from "gsap";
import {MotionPathPlugin} from "gsap/MotionPathPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

onMounted(() => {
  const animatedDiv = document.querySelector("#target");

  let sprite = document.querySelector('.ant'),
      sw = sprite!.clientWidth,
      frameCount = 3;

  gsap.set('#target', {width: sw! / (frameCount + 1)});

  gsap.timeline({
    scrollTrigger: {
      trigger: "#motion-path",
      start: "top center",
      end: "bottom center",
      pin: true,
      scrub: true,
      onRefresh: () => {
        sw = sprite!.clientWidth;
        gsap.set('#target', {width: sw / (frameCount + 1)});
        //self.scroll(self.scrollX, self.scrollY);
      },
      invalidateOnRefresh: true
    }
  })
      .to(".ant", {
        x: () => {
          return -sprite!.clientWidth * (1 - 1 / (frameCount + 1));
        },
        repeat: 10,
        ease: "steps(" + frameCount + ")",
      });

  gsap.to(animatedDiv, {
    scrollTrigger: {
      trigger: "#motion-path",
      start: "top center",
      end: "bottom center",
      scrub: true,
    },
    ease: "power1.inOut",
    immediateRender: true,
    motionPath: {
      path: "#path",
      align: "#path",
      alignOrigin: [0.5, 0.5],
      autoRotate: 180,
    },
  });
})


</script>