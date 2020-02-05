<template>
  <div class="About w-9/10 mx-auto">
    <screenshot />
  </div>
</template>

<script>
// @ is an alias to /src
import screenshot from '@/components/screenshot.vue';

export default {
  name: 'About',
  components: {
    screenshot,
  },
};
</script>
