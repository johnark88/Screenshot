<template>
  <div class="About w-9/10 mx-auto">
  <h1>Screenshot</h1>
    <div class="header-container p-8">
      <div class="header-container__row flex flex-row justify-center">
        <div class="row-item p-4"><p><screenshot /></p></div>
        <div class="row-item p-4"><p><saveScreenshot /></p></div>
        <div class="row-item p-4"><p>Compare Screenshot</p></div>
        <div class="row-item p-4"><p><deleteScreenshot /></p></div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import screenshot from '@/components/screenshot.vue';
import saveScreenshot from '@/components/saveScreenshot.vue';
import deleteScreenshot from '@/components/deleteScreenshot.vue';

export default {
  name: 'About',
  components: {
    screenshot,
    saveScreenshot,
    deleteScreenshot,
  },
};
</script>
