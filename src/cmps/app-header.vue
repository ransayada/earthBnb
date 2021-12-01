<template>
  <div id="app-header" class="flex space-between">
    <div class="logo">
      <router-link to="/"> <p><span style="color:blue" class="logo-thing">V</span>earthBnb</p></router-link> 
    </div>
    <div class="filter-container">
      <input type="text" placeholder="Search" v-model="search">
    </div>
    <div class="nav-container flex">
      <a href="https://"><p>Become a host</p></a> |
      <router-link to="/explore">Explore</router-link> |
      <div class="hamburger-container">
        <div  class="closed-hamburger flex space-between">
          <a href="https://">&#9786;</a>
          <a href="https://">&#9776;</a>
        </div>
        <div class="opened-hamburger flex">
          <p></p>
          <p></p>
        </div>
      </div>
    </div>
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

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  
}
.closed-hamburger {
    border: 2px solid rgb(0, 0, 0);
    border-radius: 25px;
    width: 50px;
    height: 25px;
  }

  .flex{
    display: flex;
  }


  .space-between{
    justify-content: space-between;
  }
</style>

<script>
export default {
  name: 'appHeader',
  
}
</script>