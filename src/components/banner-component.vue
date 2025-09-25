
<script setup lang="ts">
import type { BannerItem } from '../types';
import bannerItem from './banner-item.vue';
import bannerCarouselItem from './banner-carousel-item.vue'
import { assignColorsToItems } from '../utils/banner-assign-color';
 interface BannerComponentProps {
  mode: 'square' | 'rectangle';
  carouselOnMobile?: boolean;
  items: BannerItem[];
}
const props = defineProps<BannerComponentProps>();
const squareImage = props.items.find(i => i.type === 'image' && i.aspectRatio === 'square')
const rectangleImage = props.items.find(i => i.type === 'image' && i.aspectRatio === 'rectangle')
const ctaItem = props.items.find(i => i.type === 'cta');
const coloredItems = assignColorsToItems(props.items)
</script>

<template>
    <div>
     <!-- --- Square mode --- -->
  <div v-if="props.mode === 'square'">
    <!-- Carousel on mobile -->
    <div v-if="props.carouselOnMobile">
        <banner-carousel-item :items="items" />
    </div>

    
    <div v-else  class="banner-grid">
      <banner-item
        v-for="(item, index) in coloredItems"
        :key="index"
        :item="item"
      />
    </div>
  </div>

   <!-- --- Rectangle mode --- -->
   <div v-else-if="props.mode === 'rectangle'" class="rectangle-banner">
    <div class="mobile-view">
      <banner-item v-if="squareImage" :item="squareImage" />
      <banner-item v-if="ctaItem" :item="{...ctaItem, backgroundColor:'#fff',textColor:'#000'}" />
    </div>

    <div class="desktop-view relative">
      <banner-item v-if="rectangleImage" :item="rectangleImage" />
      <div v-if="ctaItem" class="cta-overlay">
        <banner-item  :item="{...ctaItem,transparent: true}" />
      </div>
    </div>
  </div>


  </div>
</template>

<style scoped>

.cta-overlay {
  position: absolute;
  top: 50%; 
  right: 0; 
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 1rem;
  
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>