<template>
  <div v-if="isLoading" class="home">
    <div class="hero-image full">
      <div class="hero-text">
        <p>Travel to the ends of earth... earthBnb</p>

        <a href="#/explore"><button>explore</button> </a>
      </div>
    </div>
    <section class="gallery-header">
      <h2 class="head">Explore nearby</h2>
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

    <section class="gallery-header">
      <h2 class="head">Top Rated</h2>
      <a href="#/explore">Show more</a>
    </section>
    <section class="gallery">
      <a class="gallery-link" :href="`#/explore/${this.topStay1._id}`">
        <div>
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
          <h4 class="flex">{{ this.topStay2.name }}</h4>
        </div>
      </a>
      <a class="gallery-link" :href="`#/explore/${this.topStay4._id}`">
        <div>
          <img :src="`${this.topStay4.imgUrls[0]}`" class="listImg" />
          <h4 class="flex">{{ this.topStay4.name }}</h4>
        </div>
      </a>
    </section>

    <div class="hero-image full">
      <div class="hero-text">
        <p>Travel to the ends of earth... earthBnb</p>

        <a href="#/explore"><button>Become a fucking host</button> </a>
      </div>
    </div>
  </div>
  <div v-else>
    <img 
      src="https://cdn.dribbble.com/users/44323/screenshots/1655310/loadinganimation.gif"
    />
  </div>
</template>

<script>
// @ is an alias to /src

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
    setTimeout(() => {
      this.topStay1 = this.$store.getters.staysToShow[0];
      this.topStay2 = this.$store.getters.staysToShow[1];
      this.topStay3 = this.$store.getters.staysToShow[2];
      this.topStay4 = this.$store.getters.staysToShow[3];
      this.nerby1 = this.$store.getters.staysToShow[4];
      this.nerby2 = this.$store.getters.staysToShow[5];
      this.nerby3 = this.$store.getters.staysToShow[6];
      this.nerby4 = this.$store.getters.staysToShow[7];
      this.isLoading = true;
    }, 1500);
  },
  components: {},
  mounted() {
    this.topStay1 = this.$store.getters.staysToShow[0];
    this.topStay2 = this.$store.getters.staysToShow[1];
    this.topStay3 = this.$store.getters.staysToShow[2];
    this.topStay4 = this.$store.getters.staysToShow[3];
    this.nerby1 = this.$store.getters.staysToShow[4];
    this.nerby2 = this.$store.getters.staysToShow[5];
    this.nerby3 = this.$store.getters.staysToShow[6];
    this.nerby4 = this.$store.getters.staysToShow[7];
  },
};
</script>


