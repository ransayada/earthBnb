<template>
  <div class="home">
  <div class="hero-container">
   <img src="http://" alt="">
  <a href="https://"><p>Become a host</p></a>
  </div>
    <HelloWorld msg="temporary app body :)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/cmps/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
