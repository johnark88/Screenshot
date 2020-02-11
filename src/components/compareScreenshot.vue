<template>
  <div class="compare-screenshot">
    <button
    @click="compareShot"
    disabled
    class="bg-grey text-white font-bold py-2 px-4 rounded">
    Compare ScreenShot</button>
    <!-- hover:bg-green -->
  </div>
</template>

<script>
export default {
  name: 'compare-screenshot',
  data() {
    return {
      thing: null,
    };
  },
  methods: {
    compareShot() {
      console.log('compare');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button:focus {outline:0;}
</style>
