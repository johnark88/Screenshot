<template>
  <div class="take-screenshot">
    <button
    @click="takeShot"
    class="bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded">
    Take ScreenShot</button>
    <br>
    <div v-if="errorMsg"><h3>{{errorMsg}}</h3></div>
  </div>
</template>

<script>
export default {
  name: 'take-screenshot',
  props: {
    image: {
      type: String,
      image: '',
    },
  },
  data() {
    return {
      screenshot: {
        success: false,
        file: '',
        name: '',
      },
      errorMsg: '',
    };
  },
  methods: {
    // send data to server to take screenshot
    takeShot() {
      // payLoad - Object - change to component data().
      // siteURL - String, name - String
      // More data to come
      const payLoad = {
        siteURL: 'https://github.com',
        name: 'Github',
      };
      this.$apiService.setHeader();
      // Use axios to send POST, url, header = json, data = payLoad
      this.$apiService.post('/api/screenshot', payLoad)
        // the Server Response
        // response-
        // data: {success: true, file: 'file url', name: 'name', fileName:'Github_01.01.2020'}
        .then((response) => {
          console.log(response);
          if (!response.data.success === true) {
            this.errorMsg = 'ScreenShot Error, please try again later';
          }

          this.screenshot.status = response.data.success;
          this.screenshot.file = response.data.file;
          this.screenshot.name = response.data.fileName;
          this.storeScreenShot(this.screenshot);
        })
        // catch that error
        .catch((error) => {
          console.log(error);
        });
    },

    // commit the response from the POST call above to Vuex store
    storeScreenShot(screenshot) {
      console.log('store shot');
      this.$store.commit('addImageData', screenshot);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button:focus {outline:0;}
</style>
