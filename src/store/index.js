import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screenshotData: [
      { name: 'github_02_14_2020', src: 'github.com', success: 'true' },
    ],
  },
  /* eslint-disable */
  getters: {
    successfulShot: (state) => {
      console.log(state, 'state');
      return state.screenshotData.filter(shot => shot.status === true);
    },
  },
  /* eslint-enable */
  mutations: {
    addImageData(state, payload) {
      console.log(payload, 'payload');
      state.screenshotData.push(payload);
    },
  },
  actions: {
  },
  modules: {
  },
});
