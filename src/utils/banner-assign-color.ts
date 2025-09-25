import type { BannerItem } from "../types";

const backgroundColors = ['#FF6B6B', '#4ECDC4', '#1A535C', '#FFA500'];

function getContrastingTextColor(bgColor: string) {
  // Convert hex to RGB
  const r = parseInt(bgColor.slice(1, 3), 16);
  const g = parseInt(bgColor.slice(3, 5), 16);
  const b = parseInt(bgColor.slice(5, 7), 16);
  // Calculate brightness
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 155 ? '#000000' : '#FFFFFF'; 
}


export function assignColorsToItems(items: BannerItem[]) {
    return items.map(item => {
    if(item.type === 'image') return item;
    const randomBg = backgroundColors[Math.floor(Math.random() * backgroundColors.length)] || '';
    return {
      ...item,
      backgroundColor: randomBg,
      textColor: getContrastingTextColor(randomBg),
      transparent: false
    } as BannerItem;
  });
}