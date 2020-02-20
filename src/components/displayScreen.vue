<template>
  <div class="display-screen">
    <div class="image-display p-10">
      <div class="image-display__image bg-blue text-cener">
        <div class="p-4 m-2 text-white" v-for="(shot, index) in screenShots" v-bind:key="index">
          <h3>Site Name: {{shot.screenshot.siteName}}</h3>
          <h4>File Name: {{shot.screenshot.fileName}}</h4>
          <img v-bind:src="'/Users/johnA/Documents/Building/screenshot' + shot.screenshot.fileURL" alt="">
          <img src="https://i.stack.imgur.com/SRH0B.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'display-screen',
  props: {
    screenshot: {
      success: Boolean,
      fileURL: String,
      siteName: String,
      fileName: String,
    },
  },
  data() {
    return {
      thing: null,
      screenShots: [],
    };
  },
  watch: {
    /* eslint-disable */
    screenshot: {
      handler: function(oldVal, newVal) {
        if (newVal) {
          const screenshot = newVal;
          console.log(newVal, 'newVal');
          this.screenShots.push({screenshot});
        }
      },
      deep: true,
    },
    /* eslint-enable */
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
