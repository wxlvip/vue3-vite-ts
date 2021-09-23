import { createStore } from 'vuex'
// 引入js-cookie
import Cookies from 'js-cookie'

const state = {
  num: 1,
  name: ''
}

const mutations = {
  addNum(state: any) {
    state.num = state.num + 1
  },
  loginIn(state: any, data: string) {
    state.name = data
    // 设置过期时间为1天
    Cookies.set('name', data, {
      expires: 1
    })
  },
  loginOut(state: any) {
    state.name = ''
    Cookies.remove('name')
  }
}

const actions = {
  ADDNUM(ctx: any) {
    setTimeout(() => {
      ctx.commit('addNum')
    }, 300)
  }
}

const modules = {}

export default createStore({
  state,
  mutations,
  actions,
  modules
})
