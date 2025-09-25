export interface BannerItemImage {
  type: 'image';
  aspectRatio: 'square' | 'rectangle';
  src: string;
  link: string;
}

export interface BannerItemCTA {
  type: 'cta';
  title: string;
  button: string;
  link: string;
  backgroundColor?: string; 
  textColor?: string; 
  transparent?: boolean;
}

export type BannerItem = BannerItemImage | BannerItemCTA;

