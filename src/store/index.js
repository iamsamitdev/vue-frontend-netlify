import { createStore } from 'vuex'

export default createStore({
  state: {
    counter: 0,
    showSideMenu: true
  },
  mutations: {

    increment(state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    toggleSideMenu(state){
      state.showSideMenu = !state.showSideMenu
    }

    // ฟังก์ชันเพิ่มค่า counter
    // increment(state, payload){
    //   state.counter = state.counter + payload
    // },

    // ฟังก์ชันลดค่า counter
    // decrement(state, payload){
    //   state.counter = state.counter - payload
    // }
    
  },
  actions: {

    // ฟังก์ชันเพิ่มค่า counter
    incrementAsync({commit, state }, payload){
      console.log(state)
      commit('increment', payload)
    },

    // ฟังก์ชันลดค่า counter
    decrementAsync({commit, state }, payload){
      console.log(state)
      commit('decrement', payload)
    }
    
  },
  modules: {
  }
})
