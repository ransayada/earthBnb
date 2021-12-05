<template>
  <div id="app-header" class="app header flex space-between align-center">
    <div class=header-logo>
    <a class="logo" href="#/">
      <h1 class="logo-text">
        <i class="fab fa-airbnb"></i>
        EarthBnb
      </h1>
    </a>
    </div>
    <div class="header-filter">
      <stayFilter @filtered="setFilter" />
    </div>
    <div class="header-nav">
    <nav class="nav-container flex space-between">
      <a class="bahA pointer" href="#/becomeahost"><p>Become a host</p></a> 
      <a class="bahA pointer" href="#/explore"><p>Explore</p></a>
      <div class="flex align-center"> 
      <button class="dropbtn" @click="openNav()">
        <span>
          <i class="fas fa-bars dropI"></i>
        </span>
          <img class="dropImg" src="https://res.cloudinary.com/sprint4rad/image/upload/v1638615860/profilepics/profilePics_faozet.jpg" alt="profilePic">
      </button>
      </div>
    </nav>
    </div>
      <!-- <div id="mySidenav" class="sidenav">
        <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
        <a href="#">Messages</a>
        <a href="#">Notifications</a>
        <a href="#">Trips</a>
        <a href="#">Wish List</a>
        <a href="#">Dashboard</a>
        <a href="#">Account</a>
        <a href="#">Help</a>
        <a href="#">logout</a>
      </div> -->
    
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
    },
    setFilter(filter) {
     
      this.$store.commit({type: 'setFilterBy', filterBy: filter})},
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    }
  },
  components: {
      stayFilter
    }
    
}
</script>