<script setup lang="ts">
import { computed } from 'vue' 
import type { DefaultTheme,VPButton,VPImage} from 'themekit-js/theme'
 
import Button from './Button.vue';
import Image from './Image.vue';
export interface HeroAction {
  theme?: 'brand' | 'alt'
  text: string
  link: string
  target?: string
  rel?: string
}
interface Props {
  block?:any
  name?: string
  text?: string
  tagline?: string
  image?: DefaultTheme.ThemeableImage
  actions?: HeroAction[]
} 
const props = withDefaults(defineProps<Props>(), {
   
})

 let HeroImg:any=null
 const items=props.block.children 
    for(let i=0;i<items.length;i++){
      if(items[i]["children"]!=null)
        for(let j=0;j<items[i]["children"].length;j++){
           const img=items[i]["children"][j];
          if(img.block_type=="img"){
              const pattern = /[?&]([^=#]+)=([^&#]*)/g;
              let params = {};
              let match; 
              while ((match = pattern.exec(img.src==null?"":img.src)) !== null) {
                  params[match[1]] = match[2]
              } 
              if(params["hero"]=="right"){
                  HeroImg= img
                  props.block.children[i]["block_type"]="" 
              } 
          }
        } 
        
    }


 const hasImg = computed(() => { 
   return HeroImg!==null 
})
</script>
 
<template>
  <div class="VPHero" :class="{ 'has-image':hasImg  }">
    <div class="container">  
      <div class="main"> 
          <template v-for="(item, index) in block.children" :key="index">
              <template v-if="item.block_type=='h1'">
                  <h1 class="name">
                    <template v-for="(h1, index) in item.children" >
                           <span  class="clip">{{h1.content}}</span>
                    </template>
                  </h1>
              </template>
              <template v-if="item.block_type=='h2'">
                  <p class="text">
                    <template v-for="(h2, index) in item.children" >
                         {{h2.content}} 
                    </template></p>
              </template>
              <template v-if="item.block_type=='p'">
                   <p  class="tagline"> 
                    <template v-for="(pItem, index) in item.children" >
                         <template v-if="pItem.block_type=='a'">
                          <Button
                              tag="a"
                              size="medium"
                              :block="pItem" 
                              :href="pItem.href"
                              :target="_blank" 
                            ></Button> 
                         </template>
                         <template v-if="pItem.block_type=='text'">{{pItem.content}}</template>
                         <template v-if="pItem.block_type=='img'&&pItem.src!=HeroImg.src"><img :src="pItem.src"></template>
                    </template>
                  </p>
              </template> 
          </template>  
      </div>

      <div v-if="hasImg" class="image">
        <div class="image-container">
          <div class="image-bg" />
              <Image class="image-src" :image="HeroImg.src"  ></Image>
           </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.VPHero {
  margin-top: calc((var(--vp-nav-height) + var(--vp-layout-top-height, 0px)) * -1);
  padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 48px) 24px 48px;
}

@media (min-width: 640px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 48px 64px;
  }
}

@media (min-width: 960px) {
  .VPHero {
    padding: calc(var(--vp-nav-height) + var(--vp-layout-top-height, 0px) + 80px) 64px 64px;
  }
}

.container {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1152px;
}

@media (min-width: 960px) {
  .container {
    flex-direction: row;
  }
}

.main {
  position: relative;
  z-index: 10;
  order: 2;
  flex-grow: 1;
  flex-shrink: 0;
}

.VPHero.has-image .container {
  text-align: center;
}

@media (min-width: 960px) {
  .VPHero.has-image .container {
    text-align: left;
  }
}

@media (min-width: 960px) {
  .main {
    order: 1;
    width: calc((100% / 3) * 2);
  }

  .VPHero.has-image .main {
    max-width: 592px;
  }
}

.name,
.text {
  max-width: 392px;
  letter-spacing: -0.4px;
  line-height: 40px;
  font-size: 32px;
  font-weight: 700;
  white-space: pre-wrap;
}

.VPHero.has-image .name,
.VPHero.has-image .text {
  margin: 0 auto;
}

.name {
  color: var(--vp-home-hero-name-color);
}

.clip {
  background: var(--vp-home-hero-name-background);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: var(--vp-home-hero-name-color);
}

@media (min-width: 640px) {
  .name,
  .text {
    max-width: 576px;
    line-height: 56px;
    font-size: 48px;
  }
}

@media (min-width: 960px) {
  .name,
  .text {
    line-height: 64px;
    font-size: 56px;
  }

  .VPHero.has-image .name,
  .VPHero.has-image .text {
    margin: 0;
  }
}

.tagline {
  padding-top: 8px;
  max-width: 392px;
  line-height: 28px;
  font-size: 18px;
  font-weight: 500;
  white-space: pre-wrap;
  color: var(--vp-c-text-2);
}
.tagline img{ display: inline-block; width:100px; margin-right: 12px; }
.VPHero.has-image .tagline {
  margin: 0 auto;
}

@media (min-width: 640px) {
  .tagline {
    padding-top: 12px;
    max-width: 576px;
    line-height: 32px;
    font-size: 20px;
  }
}

@media (min-width: 960px) {
  .tagline {
    line-height: 36px;
    font-size: 24px;
  }

  .VPHero.has-image .tagline {
    margin: 0;
  }
}

.actions {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding-top: 24px;
}

.VPHero.has-image .actions {
  justify-content: center;
}

@media (min-width: 640px) {
  .actions {
    padding-top: 32px;
  }
}

@media (min-width: 960px) {
  .VPHero.has-image .actions {
    justify-content: flex-start;
  }
}

.action {
  flex-shrink: 0;
  padding: 6px;
}

.image {
  order: 1;
  margin: -76px -24px -48px;
}

@media (min-width: 640px) {
  .image {
    margin: -108px -24px -48px;
  }
}

@media (min-width: 960px) {
  .image {
    flex-grow: 1;
    order: 2;
    margin: 0;
    min-height: 100%;
  }
}

.image-container {
  position: relative;
  margin: 0 auto;
  width: 320px;
  height: 320px;
}

@media (min-width: 640px) {
  .image-container {
    width: 392px;
    height: 392px;
  }
}

@media (min-width: 960px) {
  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    /*rtl:ignore*/
    transform: translate(-32px, -32px);
  }
}

.image-bg {
  position: absolute;
  top: 50%;
  /*rtl:ignore*/
  left: 50%;
  border-radius: 50%;
  width: 192px;
  height: 192px;
  background-image: var(--vp-home-hero-image-background-image);
  filter: var(--vp-home-hero-image-filter);
  /*rtl:ignore*/
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  .image-bg {
    width: 256px;
    height: 256px;
  }
}

@media (min-width: 960px) {
  .image-bg {
    width: 320px;
    height: 320px;
  }
}

:deep(.image-src) {
  position: absolute;
  top: 50%;
  /*rtl:ignore*/
  left: 50%;
  max-width: 192px;
  max-height: 192px;
  /*rtl:ignore*/
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  :deep(.image-src) {
    max-width: 256px;
    max-height: 256px;
  }
}

@media (min-width: 960px) {
  :deep(.image-src) {
    max-width: 320px;
    max-height: 320px;
  }
}
</style>
