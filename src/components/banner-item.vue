<script setup lang="ts">
import type { BannerItem } from '../types'

const props = defineProps<{item: BannerItem}>()
const ratioMap = { square: '1 / 1', rectangle: '3 / 1' }
</script>

<template>
  <div>
    
    <a v-if="props.item.type === 'image'" :href="props.item.link" target="_blank">
      <img :src="props.item.src" :alt="'Image'" :style="{
        aspectRatio: ratioMap[props.item.aspectRatio]
      }" class="image-box" />
    </a>

   
    <div 
  v-else-if="props.item.type === 'cta'"
  :style="{
    backgroundColor: props.item.transparent 
      ? 'transparent' 
      : props.item.backgroundColor || '#fff',
    color: props.item.transparent ? '#fff' : props.item.textColor || '#000',    // default black
  }" 
  class="cta-box"
>
  <div class="cta-box-content">
    <h3>{{ props.item.title }}</h3>
    <a :href="props.item.link" target="_blank">
      <button 
        :style="{
            backgroundColor: props.item.transparent 
      ? 'transparent' 
      : props.item.backgroundColor || '#fff',
    color: props.item.transparent ? '#fff' : props.item.textColor || '#000',    // default black

           border: props.item.transparent ? '1px solid #fff' : '1px solid ' + props.item.textColor || '#000'
        }"
      >
        {{ props.item.button }}
      </button>
    </a>
  </div>
</div>

  </div>
</template>

<style scoped>


.image-box {
  width: 100%;
  display: block;
  object-fit: cover;
  
}

.cta-box {
  
  padding: 1rem;
  text-align: center;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

}
.cta-box-content {
    display: flex;
    flex-direction: column;
}
.cta-box button {
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.2)

}
</style>
