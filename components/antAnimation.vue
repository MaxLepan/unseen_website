<template>
  <div id="container" class="w-full absolute sm:flex hidden flex-col justify-start overflow-x-hidden z-10">
    <svg id="motion-path" class="invisible z-10" fill="none" height="4900" viewBox="0 0 1280 4900" width="1280"
         xmlns="http://www.w3.org/2000/svg">
      <path id="path"
            d="M820.794 408C760.294 453.167 595.894 565.8 614.294 647C637.294 748.5 945.294 690.5 1026.29 698.5C1107.29 706.5 1149.79 722.5 1167.29 748.5C1184.79 774.5 1156.29 868 1026.29 900.5C896.294 933 333.794 829 203.794 929C99.7942 1009 109.128 1131 126.794 1182C186.461 1315 287.894 1595.3 216.294 1652.5C126.794 1724 87.7943 1666 99.7943 1645.5C111.794 1625 142.794 1607.5 194.294 1626.5C245.794 1645.5 536.255 1740 817.755 1730.5C1042.95 1722.9 1159.09 1826.67 1177.75 1876C1202.59 1940.5 1228.45 2119.7 1187.25 2232.5C1135.75 2373.5 1005.18 2465.5 793.676 2450.5C582.176 2435.5 377.176 2360 267.676 2450.5C158.176 2541 110.396 2596.5 55.8961 2770C1.3961 2943.5 120.176 3062.43 188.176 3105.5C244.557 3141.21 658.176 3283 954.176 3105.5C1071.78 3042.3 1175.01 3225.5 1197.68 3294C1250.62 3454 1317.58 4125.6 1005.18 4186C692.776 4246.4 905.794 4408.5 1025.79 4491.5"
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