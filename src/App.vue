<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/List">List</router-link> |
      <router-link to="/lifecycle">Lifecycle</router-link>|
      <router-link to="/slot">Slot</router-link>|
      <router-link to="/student">Students</router-link>
    </nav>
    <router-view/>
    <footer style="background-color: black; color: white">
    <h4>this is footer</h4>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
