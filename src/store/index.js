import axios from 'axios';
import { createStore } from 'vuex';

export default createStore({
  state: {
    counter:0,
    colorCode: 'blue'
  },
  mutations: {
    decreaseCounter(state, num) {
      state.counter-=num;
    },

    increaseCounter(state, num) {
      state.counter= state.counter + num;
    },
    setColorCode (state, newValue) {
      state.colorCode=newValue;

    }
  },
  actions: {
    increaseCounter ({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(response => {
        console.log(response.data);
        commit ('increaseCounter', response.data);
      })
    },
    decreaseCounter ({commit}){
      axios('https://www.random.org/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new').then(function (response) {
      console.log (response.data);

      commit('decreaseCounter', response.data);
      })
    },
    setColorCode ({commit}, newValue) {
      commit('setColorCode',newValue);
    }
  },

  getters: {
    counterSquared (state) {
      return state.counter * state.counter;
    }
  },
  modules: {
  }
})
