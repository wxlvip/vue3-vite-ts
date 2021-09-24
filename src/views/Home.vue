<script setup lang="ts">
  import HelloWorld from '../components/HelloWorld.vue' //不用注册，引入即注册

  let childClick = (e: any): void => {
    console.log('from son：', e) //🚀🚀🚀🚀🚀🚀
  }
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" width="150" height="150" />
    <HelloWorld msg="Vue3 + TypeScript + Vite" foo="🚀🚀🚀🚀🚀🚀" @childClick="childClick" />
  </div>
</template>
