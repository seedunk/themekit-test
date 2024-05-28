<script setup>
import DefaultTheme, { VPHomeHero } from 'themekit-js/theme'
import { useData } from 'themekit-js'   
import Hero from './blocks/Hero.vue';
const { site, frontmatter,localeIndex } = useData()
const { Layout } = DefaultTheme
</script> 
<template>
  <Layout>
    <template #home-hero-before > 
        <h1>{{localeIndex}}</h1> 
        <div v-for="(item, index) in frontmatter.blocks" :key="index">
            <Hero :block="item"></Hero> 
        </div>  
    </template>
  </Layout>
</template>