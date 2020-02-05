<template>
  <div class="delete-screenshot">
    <button
    @click="deleteShot"
    class="bg-blue hover:bg-green text-white font-bold py-2 px-4 rounded">
    Delete ScreenShot</button>
  </div>
</template>

<script>
export default {
  name: 'delete-screenshot',
  data() {
    return {
      thing: null,
    };
  },
  methods: {
    deleteShot() {
      console.log('discarded, deleted, buh by!');
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
button:focus {outline:0;}
</style>
