<template>
  <div class="save-screenshot">
    <button
    @click="saveShot"
    class="bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded">
    Save ScreenShot</button>
  </div>
</template>

<script>
export default {
  name: 'save-screenshot',
  data() {
    return {
      thing: null,
    };
  },
  methods: {
    saveShot() {
      console.log('saved');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button:focus {outline:0;}
</style>
