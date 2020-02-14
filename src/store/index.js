import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    screenshots: {
      screenshotData: [{
        name: '',
        src: '',
        status: '',
      }],
    },
  },
  /* eslint-disable */
  getters: {
    successfulShot: (state) => {
      console.log(state, 'state');
      console.log(state.screenshots.screenshotData.filter(shot => shot.status === true));
    },
  },
  /* eslint-enable */
  mutations: {
    addImageData(state, payload) {
      console.log(payload, 'payload');
      state.screenshots.status = payload.status;
      state.screenshots.src = payload.file;
      state.screenshots.name = payload.name;
    },
  },
  actions: {
  },
  modules: {
  },
});
