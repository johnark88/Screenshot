import Vue from 'vue';
import './plugins/axios';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import apiService from './services/apiService';
import '@/assets/styles/main.css';

Vue.config.productionTip = false;

// Set the base URL of the API
// this is not working, check apiService for temp solution
apiService.init(process.env.VUE_APP_ROOT_API);
// make it global - this.$apiService
Vue.prototype.$apiService = apiService;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
