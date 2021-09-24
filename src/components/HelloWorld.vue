<script lang="ts">
export default {
  name: 'MyComponent'
}
</script>
<script setup lang="ts">
/* import */
import {
  computed,
  ref,
  toRefs,
  reactive,
  watchEffect,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  getCurrentInstance,
  nextTick
} from 'vue'
import {useStore} from 'vuex'
import {Promotion} from '@element-plus/icons'
// import {getArticlesApi} from "../api";

/* data */
type Props = {
  msg: string
  foo: string
}

// defineProps<Props>(); // defineProps<{ msg: string }>()
const props = defineProps<Props>() // 获取props
const emit = defineEmits(['childClick']) // 声明触发事件 childClick

// 结构 props 需要使用 toRefs
const {foo} = toRefs(props)
console.log(foo.value)

/**
 * 定义变量数据
 * ref - 简单数据类型
 * reactive - 复杂数据类型
 */
const count = ref(0) //不用 return, 暴露变量到模板,直接在 templete 中使用
const store = useStore()

/*
//  方式一，ctx 这种方式只能在开发环境下使用，生产环境下的ctx将访问不到
//  方式二，proxy 此方法在开发环境以及生产环境下都能放到组件上下文对象（推荐）
// ctx 中包含了组件中由ref和reactive创建的响应式数据对象,以及以下对象及方法;
proxy.$attrs
proxy.$data
proxy.$el
proxy.$emit
proxy.$forceUpdate
proxy.$nextTick
proxy.$options
proxy.$parent
proxy.$props
proxy.$refs
proxy.$root
proxy.$slots
proxy.$watch
*/
const {proxy}: any = getCurrentInstance() // 获取当前组件实例，

const state = reactive({
  counter: 0
})

/* watch computed */
watchEffect(() => {
  console.log('监听count:', count.value)
  if (count.value >= 6) {
    clearInterval(timer1)
    clearInterval(timer2)
    console.log('⏲定时器:已停止')
  }
}) //定义监听，使用同上

const howCount = computed(() => '现在count值为：' + count.value) //定义计算属性，在 setup() 中通过 computed() 注册的计算属性不需要声明类型

/* lifecycle */
// 挂载
onBeforeMount(() => console.log('onBeforeMount!'))

onMounted(() => {
  console.log('mounted!', 'md5:' + proxy.$md5('xxxx'))

  proxy.$axios
      .get({
        url: '/blog/getArticles',
        params: {},
        data: ''
      })
      .then((res: any) => {
        console.log(res)
      })

  /*  getArticlesApi()
 .then((res:any) => {
 console.log(res)
}).catch((err:any) => {
  console.log(err)
}); */
})

// 更新
onBeforeUpdate(() => console.log('onBeforeUpdate!'))
onUpdated(() => console.log('updated!'))

// 销毁
onBeforeUnmount(() => console.log('onBeforeUnmount!'));
onUnmounted(() => {
  clearInterval(timer1)
  clearInterval(timer2)
})

nextTick(() => {
  //写入操作
  console.log(state.counter)
})

/* methods */
const timer1 = setInterval(() => state.counter++, 1000)

const timer2 = setInterval(() => count.value++, 1000)

//函数也可以直接引用,不用在return中返回
const addNum = () => count.value++

const addVuexNum = () => {
  //定义函数，触发 Vuex
  store.commit('addNum')
}

// 子组件向父组件通信
const sonToFather = () => {
  addVuexNum()
  emit('childClick', count.value + ':' + props.foo)
}
</script>

<template>
  <h1>{{ msg }}</h1>

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
      vuex:{{ store.state.num }}count is: {{ count }}, counter: {{ state.counter }}
    </el-button>
  </transition>
  <el-button size="mini" @click="addNum">+</el-button>
  <p>
    <el-button size="mini" type="primary" plain> 父子通讯 props:{{ props.foo }}</el-button>
    <el-button size="mini" @click="sonToFather">
      <el-icon>
        <Promotion/>
      </el-icon>
    </el-button>
  </p>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
  <h3>Installed CLI Plugins</h3>
  <ul>
    <li>
      <a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a>
    </li>
    <li>
      <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
    </li>
    <li>
      <a href="https://sass.bootcss.com/dart-sass" target="_blank" rel="noopener">sass</a>
    </li>
    <li>
      <a
          href="https://element-plus.gitee.io/#/zh-CN/component/installation"
          target="_blank"
          rel="noopener"
      >element-plus</a
      >
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
      >Babel</a
      >
    </li>
    <li>
      <a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener"
      >Vue-Devtools</a
      >
    </li>
    <li>
      <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">Vue-Loader</a>
    </li>
    <li>
      <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">Awesome-Vue</a>
    </li>
    <li><a href="https://code.visualstudio.com/" target="_blank">VSCode</a></li>
    <li><a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a></li>
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
      <a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a>
    </li>
    <li>
      <a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a>
    </li>
    <li>
      <a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a>
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
  transition: all 0.1s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
