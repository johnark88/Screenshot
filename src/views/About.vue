<template>
  <div class="About w-9/10 mx-auto">
  <h1>Screenshot</h1>
    <div class="header-container p-8">
      <div class="header-container__row flex flex-row justify-center">
        <div class="row-item p-4"><p><takeScreenshot v-bind:image="image" /></p></div>
        <div class="row-item p-4"><p><saveScreenshot /></p></div>
        <div class="row-item p-4"><p>Compare Screenshot</p></div>
        <div class="row-item p-4"><p><deleteScreenshot /></p></div>
      </div>
    </div>
    <!-- <button @click="run">Click here</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
import takeScreenshot from '@/components/takeScreenshot.vue';
import saveScreenshot from '@/components/saveScreenshot.vue';
import deleteScreenshot from '@/components/deleteScreenshot.vue';

export default {
  name: 'About',
  components: {
    takeScreenshot,
    saveScreenshot,
    deleteScreenshot,
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
