<template>
  <div class="display-screen">
    <!-- <img src="{{imageURL}}" alt=""> -->
    <button> here</button>
    {{screenShots}}
  </div>
</template>

<script>
export default {
  name: 'display-screen',
  data() {
    return {
      thing: null,
      // imageURL: '',
      successfulShots: [],
    };
  },
  watch: {
    screenShots(newVal, oldVal) {
      if (newVal === null || newVal === undefined) {
        console.log('no', oldVal);
      }
      console.log('yes', newVal);
    },
  },
  computed: {
    screenShots() {
      return this.$store.getters.successfulShot;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
