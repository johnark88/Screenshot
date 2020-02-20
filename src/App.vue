<template>
  <div id="app">
    <div id="nav">
      <nav class="bg-white px-8 pt-2 shadow-md">
        <div class="-mb-px flex justify-center">
          <p class="no-underline uppercase tracking-wide font-bold text-s py-3 mr-8">
            <router-link class="no-underline" to="/">Home</router-link>
          </p>
          <p class="no-underline uppercase tracking-wide font-bold text-s py-3 mr-8">
            <router-link class="no-underline" to="/about">About</router-link>
          </p>
        </div>
      </nav>
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
  // padding: 30px;
  a {
    // font-weight: bold;
    color: #2d4d5c;

    &.router-link-exact-active {
      color: #3490dc;
      border-bottom: #38a89d solid 2px;
    }
  }
}
</style>
