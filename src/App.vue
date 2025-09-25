<script setup lang="ts">
import bannerComponent from './components/banner-component.vue';
import type { BannerItem } from './types';


const squareItems1: BannerItem[] = [
  { type: 'image', aspectRatio: 'square', src: 'https://picsum.photos/400', link: 'https://example.com/link1' },
  { type: 'cta', title: 'CTA Title', button: 'CTA Button', link: 'https://example.com/link2' },
  { type: 'image', aspectRatio: 'square', src: 'https://picsum.photos/400', link: 'https://example.com/link3' }
] 


const squareItems2 : BannerItem[] = [
  { type: 'cta', title: 'CTA Title', button: 'CTA Button', link: 'https://example.com/link1' },
  { type: 'image', aspectRatio: 'square', src: 'https://picsum.photos/400', link: 'https://example.com/link2' },
  { type: 'image', aspectRatio: 'square', src: 'https://picsum.photos/400', link: 'https://example.com/link3' },
  { type: 'image', aspectRatio: 'square', src: 'https://picsum.photos/400', link: 'https://example.com/link4' },
  { type: 'image', aspectRatio: 'square', src: 'https://picsum.photos/400', link: 'https://example.com/link5' },
  { type: 'image', aspectRatio: 'square', src: 'https://picsum.photos/400', link: 'https://example.com/link6' }
]


const rectangleItems : BannerItem[] = [
  { type: 'image', aspectRatio: 'rectangle', src: 'https://picsum.photos/1200/400', link: 'https://example.com/link1' },
  { type: 'image', aspectRatio: 'square', src: 'https://picsum.photos/400', link: 'https://example.com/link2' },
  { type: 'cta', title: 'CTA Title', button: 'CTA Button', link: 'https://example.com/link3' }
]

</script>

<template>  
<div class="container">

  <banner-component
  mode="square"
  :carousel-on-mobile="false"
  :items="squareItems1"
>
</banner-component>

<banner-component
  mode="square"
  :carousel-on-mobile="true"
  :items="squareItems2"
>
</banner-component>

<banner-component
  mode="rectangle"
  :carousel-on-mobile="false"
  :items="rectangleItems"
>
</banner-component>
</div>
</template>

<style scoped>
 .container {
  width: 100%;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4rem;
  
  
}

/* Between 400px and 768px */
@media (min-width: 400px) and (max-width: 767px) {
  .container {
    padding: 4rem; 
  }
}

/* 768px and up */
@media (min-width: 768px) {
  .container {
    padding: 8rem; 
  }
}

/* 1024px and up */
@media (min-width: 1024px) {
  .container {
    padding: 12rem; 
  }
}
</style>
