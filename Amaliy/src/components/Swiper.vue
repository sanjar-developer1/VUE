<template>
  <swiper
    :pagination="{
      dynamicBullets: true,
    }"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :modules="modules"
    class="mySwiper"
  >
    <swiper-slide v-for="(rasm, index) in rasmlar" :key="index">
      <img :src="rasm" alt="bu yerda rasm bor" />
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";

import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const rasmlar = [
      "https://images.uzum.uz/d2aaf8d2lln4bo5dc82g/main_page_banner.jpg",
      "https://images.uzum.uz/d2dh7e34eu2mnqe5eisg/main_page_banner.jpg",
      "https://images.uzum.uz/d24cjub4eu2ublqhr040/main_page_banner.jpg",
      "https://images.uzum.uz/d29lr334eu2ok713cfhg/main_page_banner.jpg",
      "https://images.uzum.uz/d28acv7iub3br320vir0/main_page_banner.jpg",
    ];

    return {
      modules: [Pagination, Autoplay],
      rasmlar,
    };
  },
};
</script>
<style>
.mySwiper {
  height: 80vh;
  display: flex;
  align-self: start;
  justify-content: center;
}
.mySwiper img {
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
</style>
