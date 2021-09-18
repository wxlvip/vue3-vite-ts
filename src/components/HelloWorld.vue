<script lang="ts">
  export default {
    name: "MyComponent"
  }
</script>
<script setup lang="ts">
/* import */
import { computed, ref, reactive, watchEffect, onMounted, onUpdated, onUnmounted,toRefs } from 'vue'
import {useStore} from 'vuex'
import { Promotion } from '@element-plus/icons'
import {getArticlesApi} from "../utils/api";

/* data */
type Props={
  msg:string,
  foo:string
}
 /*  getArticlesApi().then((res:any) => {
   console.log(res)
  }).catch((err:any) => {
    console.log(err)
  }); */

// defineProps<Props>(); // defineProps<{ msg: string }>()
const props = defineProps<Props>();   // 获取props
const emit = defineEmits(["childClick"]);     // 声明触发事件 childClick

// 结构 props 需要使用 toRefs
const { foo } = toRefs(props);
console.log(foo.value);

/**
 * 定义变量数据
 * ref - 简单数据类型
 * reactive - 复杂数据类型
 */

const count = ref(0);//不用 return, 暴露变量到模板,直接在 templete 中使用
const store = useStore();

const state = reactive({
  counter: 0
})


/* computed */
watchEffect(()=>console.log('监听count:',count.value)); //定义监听，使用同上

const howCount=computed(()=>"现在count值为："+count.value);//定义计算属性，在 setup() 中通过 computed() 注册的计算属性不需要声明类型

/* lifecycle */
onMounted(() => console.log('mounted!'));
onUpdated(() => console.log('updated!'));
// 销毁组件
onUnmounted(() => {
  clearInterval(timer1);
  clearInterval(timer2);
})

/* methods */
const timer1 = setInterval(() => state.counter++, 1000);

const timer2 = setInterval(() => count.value++, 1000);

//函数也可以直接引用,不用在return中返回
const addNum= () => count.value++;

const addVuexNum = ()=>{//定义函数，触发 Vuex
  store.commit('addNum');
}

// 子组件向父组件通信
const sonToFather = () =>{
  addVuexNum();
    emit('childClick' , count.value + ':' +props.foo);
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>See <code>README.md</code> for more information.</p>

 <!--  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Docs
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Docs</a>
  </p> -->
  <transition name="slide-fade">
    <el-button size="mini" type="primary" plain>
      vuex:{{store.state.num}}count is: {{ count }}, counter: {{state.counter}}
   </el-button>
 </transition>
  <el-button size="mini" @click="addNum">+</el-button>
  <p>
    <el-button size="mini" type="primary" plain>
            props:{{ props.foo }}
    </el-button>
  <el-button size="mini" @click="sonToFather">
    <el-icon><Promotion /></el-icon>
  </el-button>
  </p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
   <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a href="https://sass.bootcss.com/dart-sass" target="_blank" rel="noopener">sass</a>
      </li>
      <li>
        <a href="https://element-plus.gitee.io/#/zh-CN/component/installation" target="_blank" rel="noopener">element-plus</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
      <a href="https://vitejs.dev/guide/features.html" target="_blank" rel="noopener">Vite Docs</a>
      </li>
      <li>
        <a href="https://v3.vuejs.org/" target="_blank" rel="noopener">Vue 3 Docs</a>
      </li>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
h3 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
