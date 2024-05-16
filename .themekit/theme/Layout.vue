<script setup lang="ts">
import { useData } from 'themekit-js'

const { site, frontmatter } = useData()
</script>
<template>
  <a style="display: none;" id="AppBase" >{{ site.base }}</a> 
  <div v-if="frontmatter.home">
    <h1>{{ site.title }}</h1>
    <p>{{ site.description }}</p>
    <ul>
      <li><a href="/markdown-examples.html">环球港</a></li>
      <li><a href="/api-examples.html">恐龙园</a></li>
     </ul> <button class="btn btn-primary">测试{{site.base}}</button>
  </div>
  <div v-else>
    <a href="/">常州</a>
   
    <Content />
  </div>
</template>


<script lang="ts">  
 const base:string ="/"

export default { 

  mounted() {
      document.q
    const script = document.createElement('link');
    script.href =    document.getElementById("AppBase").innerHTML+'.themekit/assets/bootstrap3/dist/css/bootstrap.min.css';
    script.rel="stylesheet";
    document.head.appendChild(script);
  } 
};
</script>
