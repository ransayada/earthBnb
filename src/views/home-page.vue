<template>
  <div v-if="isLoading" class="home">
    <div class="hero-image">
        <p>Not sure where to go? Perfect.</p>
        <a class="imFlex" href="#/explore"><h1>I'm flexible</h1></a>
    </div>
    <section class="gallery-header">
      <p class="head">Explore top destinations</p>
    </section>
    <section class="gallery rs-gallery-header">
      <a class="gallery-link rs-gallery" :href='`#/explore?place=tel-aviv&from=undefined&to=undefined&nog=undefined`'>
        <img class="gallery-image-ran" src="https://res.cloudinary.com/sprint4rad/image/upload/v1638788260/pop-destination/ta2_lapkv3.jpg" alt="Tel Aviv">
        <h4 class="flex">Tel-Aviv</h4>
      </a>
      <a class="gallery-link  rs-gallery" :href='`#/explore?place=new-york&from=undefined&to=undefined&nog=undefined`'>
        <img class="gallery-image-ran" src="https://res.cloudinary.com/sprint4rad/image/upload/v1638788261/pop-destination/ny3_laxvb5.jpg" alt="New York">
        <h4 class="flex">New-York</h4>
      </a>
      <a class="gallery-link  rs-gallery" :href='`#/explore?place=paris&from=undefined&to=undefined&nog=undefined`'>
        <img class="gallery-image-ran" src="https://res.cloudinary.com/sprint4rad/image/upload/v1638788259/pop-destination/pari1_ncwnwg.jpg" alt="Paris">
        <h4 class="flex">Paris</h4>
      </a>
      <a class="gallery-link  rs-gallery" :href='`#/explore?place=london&from=undefined&to=undefined&nog=undefined`'>
        <img class="gallery-image-ran" src="https://res.cloudinary.com/sprint4rad/image/upload/v1638788262/pop-destination/lon3_awg8bc.jpg" alt="London">
        <h4 class="flex">London</h4>
      </a>
    </section>
    <section class="gallery-header">
      <p class="head">Top Rated</p>
      <a href="#/explore">Show more</a>
    </section>
    <section class="gallery">
      <a class="gallery-link" :href="`#/explore/${this.topStay1._id}`">
        <div class="gallery-card">
          <img :src="`${this.topStay1.imgUrls[0]}`" class="listImg" />
          <h4 class="flex">{{ this.topStay1.name }}</h4>
        </div>
      </a>
      <a class="gallery-link" :href="`#/explore/${this.topStay2._id}`">
        <div>
          <img :src="`${this.topStay2.imgUrls[0]}`" class="listImg" />
          <h4 class="flex">{{ this.topStay2.name }}</h4>
        </div>
      </a>
      <a class="gallery-link" :href="`#/explore/${this.topStay3._id}`">
        <div>
          <img :src="`${this.topStay3.imgUrls[0]}`" class="listImg" />
          <h4 class="flex">{{ this.topStay3.name }}</h4>
        </div>
      </a>
      <a class="gallery-link" :href="`#/explore/${this.topStay4._id}`">
        <div>
          <img :src="`${this.topStay4.imgUrls[0]}`" class="listImg" />
          <h4 class="flex">{{ this.topStay4.name }}</h4>
        </div>
      </a>
    </section>
     <section class="gallery-header">
      <p class="head">Explore nearby</p>
      <a href="#/explore">Show more</a>
    </section>
    <section class="gallery">
      <a class="gallery-link" :href="`#/explore/${this.nerby1._id}`">
        <div>
          <img :src="`${this.nerby1.imgUrls[0]}`" class="listImg" />
          <h4 class="flex">{{ this.nerby1.name }}</h4>
        </div>
      </a>
      <a class="gallery-link" :href="`#/explore/${this.nerby2._id}`">
        <div>
          <img :src="`${this.nerby2.imgUrls[0]}`" class="listImg" />
          <h4 class="flex">{{ this.nerby2.name }}</h4>
        </div>
      </a>
      <a class="gallery-link" :href="`#/explore/${this.nerby3._id}`">
        <div>
          <img :src="`${this.nerby3.imgUrls[0]}`" class="listImg" />
          <h4 class="flex">{{ this.nerby3.name }}</h4>
        </div>
      </a>
      <a class="gallery-link" :href="`#/explore/${this.nerby4._id}`">
        <div>
          <img :src="`${this.nerby4.imgUrls[0]}`" class="listImg" />
          <h4 class="flex">{{ this.nerby4.name }}</h4>
        </div>
      </a>
    </section>

    <section class="hero-image-but">
        <p class="">Questions about hosting?</p>
        <a class="bah" href="#/uc"><h1>Become a host</h1> </a>
    </section>
  </div>
  <div v-else>
    <img 
      src="https://res.cloudinary.com/sprint4rad/image/upload/v1639236399/loadingGif/loadinganimation_lh356j.gif"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import {eventBusService} from '../services/event-bus.service.js'
export default {
  name: "Home",
  data() {
    return {
      topStay1: null,
      topStay2: null,
      topStay3: null,
      topStay4: null,
      nerby1: null,
      nerby2: null,
      nerby3: null,
      nerby4: null,
      isLoading: false,
    };
  },
  created() {
    // this.$emit('isLoading');
    eventBusService.$emit('setIsLoading')
    setTimeout(() => {
      this.topStay1 = this.$store.getters.allStays[0];
      this.topStay2 = this.$store.getters.allStays[1];
      this.topStay3 = this.$store.getters.allStays[2];
      this.topStay4 = this.$store.getters.allStays[3];
      this.nerby1 = this.$store.getters.allStays[4];
      this.nerby2 = this.$store.getters.allStays[5];
      this.nerby3 = this.$store.getters.allStays[6];
      this.nerby4 = this.$store.getters.allStays[7];
      this.isLoading = true;
      eventBusService.$emit('setIsLoading')
    }, 1000);
    window.scrollTo(0, 0);
  },
  components: {},
  mounted() {
    this.topStay1 = this.$store.getters.allStays[0];
    this.topStay2 = this.$store.getters.allStays[1];
    this.topStay3 = this.$store.getters.allStays[2];
    this.topStay4 = this.$store.getters.allStays[3];
    this.nerby1 = this.$store.getters.allStays[4];
    this.nerby2 = this.$store.getters.allStays[5];
    this.nerby3 = this.$store.getters.allStays[6];
    this.nerby4 = this.$store.getters.allStays[7];
    window.scrollTo(0, 0);
  },
};
</script>


