<template>
  <div id="app-header" class="flex space-between">
    <a class="logo" href="#/">
      <h1 class="logo-text">
        <i class="fab fa-airbnb"></i>
        EarthBnb
      </h1>
    </a>
    <stayFilter/>
    <div class="nav-container flex">
      <a href="https://"><p>Become a host</p></a> |
      <router-link to="/explore">Explore</router-link> |
      <div class="dropdown">
      <button class="dropbtn flex space-between" @click="btnClicked">
        <span>
          <i class="fas fa-bars"></i>
          <i class="fas fa-user-circle"></i>
          <!-- <img src="https://res.cloudinary.com/dzfqfnuet/image/upload/v1599095444/avatar_pwjxqe.png" alt="" headen> -->
        </span>
      </button>
      <!-- <div class="dropDown-content" >
        <a href="#/login">Login</a>
        <a href="#/signup">Signup</a>
        <a href="#/becomeAHost">Become a host</a>
        <a href="#/my-listings">My Listings</a>
        <a href="#/logout">Logout</a> -->
      <!-- </div> -->
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

.space-between {
  justify-content: space-between;
}


</style>

<script>
import stayFilter from './stay-filter.vue'

export default {
  name: 'appHeader',
  data() {
    return {
      search: ''
    }
  },
  methods: {
    // onSearch() {
    //   this.$router.push({ name: 'explore', query: { search: this.search } })
    // }
    btnClicked(){
      console.log('clicked')
    }
    },
  components: {
      stayFilter
    }
    
}
</script>