import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imgData: {
      name: '',
      src: '',
    },
  },
  mutations: {
    addImageData(state, payload) {
      state.imgData.src = payload.src;
      state.imgData.name = payload.name;
      console.log(state.imgData, 'imgData');
    },
  },
  actions: {
  },
  modules: {
  },
});
