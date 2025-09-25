<script setup lang="ts">
import type { BannerItemImage } from '../types';
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import type SwiperType from 'swiper';
import SwiperCore from 'swiper'
import { Thumbs } from 'swiper/modules'

// Swiper styles
import 'swiper/css'

SwiperCore.use([Thumbs])

const props = defineProps<{items: BannerItemImage[]}>() 
const thumbsSwiper = ref<SwiperType | null>(null)
function setThumbsSwiper(swiper: SwiperType) {
  thumbsSwiper.value = swiper
}
</script>
<template>
  <div class="image-carousel">
    <!-- Main carousel -->
    <Swiper
      class="main-swiper"
      :slides-per-view="1"
      :space-between="10"
      :thumbs="{ swiper: thumbsSwiper }"
    >
      <SwiperSlide
        v-for="(img, i) in props.items"
        :key="'main-' + i"
      >
        <a v-if="img.link" :href="img.link" target="_blank">
          <img :src="img.src" alt="slide image" class="main-image" />
        </a>
        <img v-else :src="img.src" alt="slide image" class="main-image" />
      </SwiperSlide>
    </Swiper>

    
    <Swiper
      class="thumbs-swiper"
      :slides-per-view="5"
      :space-between="5"
      watch-slides-progress
      watch-slides-visibility
      @swiper="setThumbsSwiper"
    >
      <SwiperSlide
        v-for="(img, i) in props.items"
        :key="'thumb-' + i"
      >
        <img :src="img.src" alt="thumbnail" class="thumb-image" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped>
.image-carousel {
  width: 100%;
  max-width: 100%;
 
}

.main-swiper {
  width: 100%;
  margin-bottom: 10px;
}

.main-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  
}

.thumbs-swiper {
  margin-top: 8px;
}

.thumb-image {
  width: 100%;
  object-fit: cover;
  border-radius: 4px;
  cursor: pointer;
  transition: opacity 0.3s;
}

.thumb-image:hover {
  opacity: 0.8;
}
</style>
