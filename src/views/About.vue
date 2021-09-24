<script lang="ts">
/* eslint-disable */
  /* 注意 <script lang="ts"> 中没有 setup 与 HelloWorld.vue 组件中声明的有所不同,这两个组件提供两种不同的方式，仅供参开 */

  import { reactive, watch, onMounted, onUnmounted, toRefs, ref } from 'vue'
  import { useRouter } from 'vue-router'
  // reactive: 接收一个普通对象然后返回该普通对象的响应式代理。等同于 2.x 的 Vue.observable()
  // ref: 接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value。
  // computed: 传入一个 getter 函数，返回一个默认不可手动修改的 ref 对象。
  // watch API 完全等效于 2.x this.$watch （以及 watch 中相应的选项）。watch 需要侦听特定的数据源，并在回调函数中执行副作用。默认情况是懒执行的，也就是说仅在侦听的源变更时才执行回调。
  // 鼠标位置侦听
  function useMouse() {
    const state = reactive({ x: 0, y: 0 })
    const update = (e: any) => {
      state.x = e.pageX
      state.y = e.pageY
    }
    onMounted(() => {
      window.addEventListener('mousemove', update)
    })
    onUnmounted(() => {
      window.removeEventListener('mousemove', update)
    })
    // 转换所有key为响应式数据
    return toRefs(state)
  }
  // 事件监测
  function useTime() {
    const state = reactive({ time: new Date() })
    onMounted(() => {
      setInterval(() => {
        state.time = new Date()
      }, 1000)
    })
    return toRefs(state)
  }

  export default {
    // setup 函数是一个新的组件选项。作为在组件内使用 Composition API 的入口点。
    // 调用时刻是初始化属性props确定后，beforeCreate之前 还可以定义 <script setup lang="ts">
    setup() {
      /* data */
      const router = useRouter()
      // 定义变量
      const counter = ref(1)
      // 使用鼠标逻辑
      const { x, y } = useMouse()
      // 使用时间逻辑
      const { time } = useTime()
      const state = reactive({
        count: 0
      })

      /* watch computed */
      // 响应化：接收一个对象，返回一个响应式的代理对象
      watch(
        () => state.count,
        (count, prevCount) => {
          console.log('state.count', count, prevCount)
        }
      )

      /* lifecycle */
      onMounted(() => {
        console.log('onMounted')
      })
      onUnmounted(() => {
        clearInterval(timer)
      })

      /* methods */
      const timer = setInterval(() => {
        counter.value++
        // console.log('点击了',counter.value)
      }, 1000)

      const increment = () => {
        state.count++
      }

      // 返回
      const goBack = () => {
        router.go(-1)
      }

      // 返回对象将和渲染函数上下文合并
      return {
        x,
        y,
        time,
        counter,
        state,
        increment,
        goBack
      }
    }
  }
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>计时器：{{ counter }} 秒</h2>
    <h2>count:{{ state.count }}</h2>
    <button type="button" @click="increment">count +</button>
    <p>time: {{ time }}</p>
    <div>x: {{ x }} y: {{ y }}</div>
    <p
      >Vue 3 + TypeScript + Vite + vue-router + Vuex, css样式采用 normalize.css 进行初始化。集成了
      element-plus UI框架，</p
    >
    <el-button size="mini" @click="goBack">返回</el-button>
  </div>
</template>
