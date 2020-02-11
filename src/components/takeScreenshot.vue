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
    },
  },
  data() {
    return {};
  },
  methods: {
    takeShot() {
      console.log('hello');
      this.$store.commit('addImageData', { name: 'website-date', src: 'google.com' });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button:focus {outline:0;}
</style>
