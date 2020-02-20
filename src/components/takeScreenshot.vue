<template>
  <div class="take-screenshot">
    <div class="button-container">
       <button
      @click="takeShot"
      class="bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded">
      Take ScreenShot</button>
    </div>
    <br>
    <div class="error-container">
      <div v-if="errorMsg"><h3>{{errorMsg}}</h3></div>
    </div>

    <displayScreen v-bind:screenshot="screenshot" />
  </div>
</template>

<script>
import displayScreen from '@/components/displayScreen.vue';

export default {
  name: 'take-screenshot',
  components: {
    displayScreen,
  },
  // props: {
  //   image: {
  //     type: String,
  //     image: '',
  //   },
  // },
  data() {
    return {
      screenshot: {
        success: '',
        fileURL: '',
        siteName: '',
        fileName: '',
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
        // data: {success: true/false, file: 'file url', siteName: 'github.com', fileName:'Github_01.01.2020'}
        .then((response) => {
          // success: true
          // file: "./snapshots/Github_02.19.2020_20:52.png"
          // siteName: "Github"
          // fileName: "Github_02.19.2020_20:52.png"
          if (!response.data.success === true) {
            this.errorMsg = 'ScreenShot Error, please try again later';
          }
          this.screenshot.success = response.data.success;
          const siteURL = response.data.file.substr(1);
          this.screenshot.fileURL = siteURL;
          this.screenshot.siteName = response.data.siteName;
          this.screenshot.fileName = response.data.fileName;
          console.log('this,screenshot', this.screenshot);
          // this.storeScreenShot(this.screenshot);
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
