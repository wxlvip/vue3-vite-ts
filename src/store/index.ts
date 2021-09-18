import { createStore } from "vuex";


const state = {
  num :1
}

const mutations = {
  addNum(state:any){
    state.num = state.num + 1;
  }
}

const actions = {
  ADDNUM(ctx:any){
    setTimeout(()=>{
      ctx.commit('addNum')
    }, 300);
  }
}

const modules = {}



export default createStore({
  state,
  mutations,
  actions,
  modules
});
