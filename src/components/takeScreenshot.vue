<template>
  <div class="take-screenshot">
    <button
    @click="takeShot"
    class="bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded">
    Take ScreenShot</button>
    {{image}}
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
    return {};
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

      // Use axios to send POST, url, header = json, data = payLoad
      this.axios({
        method: 'POST',
        url: 'https://3d8ccc39.ngrok.io/api/screenshot',
        headers: { 'Content-Type': 'application/json' },
        data: { payLoad },
      })
        // the Server Response
        // response - data: {success: true, file: 'file url', name: 'name', fileName:'Github_01.01.2020'}
        .then((response) => {
          console.log(response);
        })
        // catch that error
        .catch((error) => {
          console.log(error);
        });
    },

    // commit the response from the POST call above to Vuex store
    storeScreenShot() {
      console.log('store shot');
      // this.$store.commit('addImageData', { name: 'website-date', src: 'google.com' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button:focus {outline:0;}
</style>
