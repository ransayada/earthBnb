<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>




 <section class="gallery-header">
      <h2 class="head">Explore nearby</h2>
      <a href="#/explore">Show more</a>
    </section>
      <section class="gallery">
        <a href="#/stay/4567">
          <div>
            <img src="../assets/imgs/logo.png" />
            <h4 class="flex">house</h4>
          </div>
        </a>
        <a href="#/stay/4567">
          <div>
            <img src="../assets/imgs/logo.png" />
            <h4>villa</h4>
          </div>
        </a>
        <a href="#/stay/4567">
          <div>
            <img src="../assets/imgs/logo.png" />
            <h4>vedio</h4>
          </div>
        </a>
        <a href="#/stay/4567">
          <div>
            <img src="../assets/imgs/logo.png" />
            <h4>castle</h4>
          </div>
        </a>
      </section>


    <section class="gallery-header">
      <h2 class="head">Top Rated</h2>
      <a href="#/explore">Show more</a>
    </section>
      <section class="gallery">
        <a href="#/stay/4567">
          <div>
            <img src="../assets/imgs/logo.png" />
            <h4 class="flex">house</h4>
          </div>
        </a>
        <a href="#/stay/4567">
          <div>
            <img src="../assets/imgs/logo.png" />
            <h4>villa</h4>
          </div>
        </a>
        <a href="#/stay/4567">
          <div>
            <img src="../assets/imgs/logo.png" />
            <h4>vedio</h4>
          </div>
        </a>
        <a href="#/stay/4567">
          <div>
            <img src="../assets/imgs/logo.png" />
            <h4>castle</h4>
          </div>
        </a>
      </section>


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
