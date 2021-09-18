
<script setup lang="ts">
import HelloWorld from '../components/HelloWorld.vue' //不用注册，引入即注册



let childClick = (e: any):void => {
  console.log('from son：',e);  //🚀🚀🚀🚀🚀🚀
};

// import { Options, Vue } from "vue-class-component";
// import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
// import HelloWorld from '../components/HelloWorld.vue'
// @Options({
//   components: {
//     HelloWorld,
//   },
// })
// export default class Home extends Vue {}
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="150" height="150" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
    <HelloWorld msg="Vue3 + TypeScript + Vite"  foo="🚀🚀🚀🚀🚀🚀" @childClick="childClick"/>
  </div>
</template>
