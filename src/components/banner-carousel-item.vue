<script setup lang="ts">
import type { BannerItem } from '../types';
import { assignColorsToItems } from '../utils/banner-assign-color';
import bannerItem from './banner-item.vue';
import Carousel from './Carousel.vue';
const props = defineProps<{items: BannerItem[]}>()
const items = assignColorsToItems(props.items)
const cta = items.filter(item => item.type === 'cta');
</script>

<template>
   <div class="desktop-view banner-grid">
    <banner-item v-for="(item) in items"
        :key="item.link"
        :item="item"
      />
   </div>
   <div class="mobile-view">
    <banner-item v-for="(item) in cta" :item="item" :key="item.link" />
    <carousel :items="items.filter(item => item.type === 'image')" />
   </div>
</template>

<style  scoped>


</style>