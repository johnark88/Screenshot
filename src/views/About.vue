<template>
  <div class="About w-9/10 mx-auto">
  <h1>Screenshot</h1>
    <div class="header-container p-8">
      <div class="header-container__row flex flex-row justify-center">
        <div class="row-item p-4"><p><takeScreenshot v-bind:image="image" /></p></div>
        <div class="row-item p-4"><p><saveScreenshot /></p></div>
        <div class="row-item p-4"><p><compareScreenshot /></p></div>
        <div class="row-item p-4"><p><deleteScreenshot /></p></div>
      </div>
    </div>
    <div class="image-display p-10">
      <div class="image-display__image">
        <displayScreen />
      </div>
    </div>
    <!-- <button @click="run">Click here</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import takeScreenshot from '@/components/takeScreenshot.vue';
import saveScreenshot from '@/components/saveScreenshot.vue';
import compareScreenshot from '@/components/compareScreenshot.vue';
import deleteScreenshot from '@/components/deleteScreenshot.vue';
import displayScreen from '@/components/displayScreen.vue';

export default {
  name: 'About',
  components: {
    takeScreenshot,
    saveScreenshot,
    deleteScreenshot,
    compareScreenshot,
    displayScreen,
  },
  data() {
    return {
      // gets sent to takeScreenshot
      image: '123',
    };
  },
  methods: {},
};
</script>
