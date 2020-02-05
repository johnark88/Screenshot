<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <div class="main-container max-w-full">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2d4d5c;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2d4d5c;

    &.router-link-exact-active {
      color: #0069ff;
    }
  }
}
</style>
