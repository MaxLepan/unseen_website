<template>
  <div id="container"
       class="absolute lg:flex hidden flex-col xl:justify-end justify-start xl:left-48 xl:w-[85%] -left-5 z-15">
    <svg id="motion-path" class="invisible z-15 overflow-x-hidden" fill="none" height="4900" viewBox="0 0 1280 4900"
         width="1280"
         xmlns="http://www.w3.org/2000/svg">
      <path id="path"
            d="M958.5 408C763.5 449.5 595.894 586.8 614.294 668C637.294 769.5 945.294 711.5 1026.29 719.5C1107.29 727.5 1149.79 743.5 1167.29 769.5C1184.79 795.5 1156.29 889 1026.29 921.5C896.294 954 333.794 850 203.794 950C99.7942 1030 109.128 1152 126.794 1203C186.461 1336 287.894 1616.3 216.294 1673.5C126.794 1745 87.7943 1687 99.7943 1666.5C111.794 1646 142.794 1628.5 194.294 1647.5C245.794 1666.5 536.255 1761 817.755 1751.5C1042.95 1743.9 1159.09 1847.67 1177.75 1897C1202.59 1961.5 1228.45 2140.7 1187.25 2253.5C1135.75 2394.5 1005.18 2486.5 793.676 2471.5C582.176 2456.5 377.176 2381 267.676 2471.5C158.176 2562 110.396 2617.5 55.8961 2791C1.3961 2964.5 120.176 3083.43 188.176 3126.5C244.557 3162.21 658.176 3304 954.176 3126.5C1071.78 3063.3 1175.01 3246.5 1197.68 3315C1250.62 3475 1317.58 4146.6 1005.18 4207C692.776 4267.4 905.794 4429.5 1025.79 4512.5"
            stroke="black"/>
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
      start: "top top-=250",
      end: "top top", // I don't get why bottom center is making a huge empty space at the bottom of the page and it's making me crazy
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
      start: "top top-=250",
      end: "bottom center",
      scrub: true,
    },
    ease: "sine.out",
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