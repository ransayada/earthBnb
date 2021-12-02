<template>
  <div class="stay-details">
    <div v-if="stay" class="details-container">
      <h1 class="stay-name">{{ stay.name }}</h1>
      <div class="stay-share-container flex space-between">
        <div class="stay-city-info flex">
          <p><i class="fas fa-star review-star"></i> 4.73 (Reviews)</p>
          <p>{{ stay.loc.country }},</p>
          <p>{{ stay.loc.city }}</p>
        </div>
        <div class="action-btns flex">
          <p><i class="fas fa-share-alt"></i> Share</p>
          <p><i class="fas fa-save"></i> Save</p>
        </div>
      </div>
      <div>
        <!-- <img src="../assets/logo.png" alt=""> -->
        <stay-imgs :imgUrls="stay.imgUrls" />
      </div>
      <div class="stay-info-container">
        <div class="stay-first-info">
          <h2 class="flex">{{ stay.propertyType }} Hosted By Woodie</h2>
          <ul class="clean-list flex">
            <li>
              <span>10 guests</span>
              <span> · </span>
            </li>
            <li>
              <span>4 Bedrooms</span>
              <span> · </span>
            </li>
            <li>
              <span>5 Beds</span>
              <span> · </span>
            </li>
            <li>
              <span>3 Baths</span>
            </li>
          </ul>
        </div>
        <section class="stay-left-container flex">
          <div class="stay-features-container flex">
            <div>
              <i class="fas fa-home" aria-hidden="true"></i>
              <div>
                <h3>Entire Place</h3>
                <h4>You'll have the place to yourself.</h4>
              </div>
            </div>
            <div>
              <i class="fas fa-book-open" aria-hidden="true"></i>
              <div>
                <h3>House Rules</h3>
                <h4>You'll have the place to yourself.</h4>
              </div>
            </div>
            <div>
              <i class="fas fa-medal" aria-hidden="true"></i>
              <div>
                <h3>Woddie is a SuperHost</h3>
                <h4>You'll have the place to yourself.</h4>
              </div>
            </div>
            <div>
              <i class="fas fa-wifi" aria-hidden="true"></i>
              <div>
                <h3>Wifi</h3>
                <h4>You'll have the place to yourself.</h4>
              </div>
            </div>
          </div>
          <!-- <section class="temp-login">
            <div>
              <h1>Login</h1>
            </div>
          </section> -->
        </section>

        <div class="stay-summary-contanier">
          <!-- <h5>Stay description</h5> -->
          <p>{{ stay.summary }}</p>
        </div>
      </div>
      <h1>Ameneties section</h1>
      <h1>Review section</h1>
      <h1>Map section</h1>
    </div>
  </div>
</template>
<script>
import stayImgs from "../cmps/stay-imgs.vue";
export default {
  name: "stayDetails",
  data() {
    return {
      stay: null,
    };
  },
  created() {
    this.getStayById();
  },
  methods: {
    getStayById() {
      console.log("params id ", this.$route.params.stayId);
      this.$store
        .dispatch({ type: "getStayById", stayId: this.$route.params.stayId })
        .then((stay) => (this.stay = JSON.parse(JSON.stringify(stay))));
    },
  },
  computed: {
    // todoTitle() {
    //   return this.todo.title
    // },
    // todoDesc() {
    //   return this.todo.description
    // },
    // todoIsDone() {
    //   return this.todo.isDone
    // },
    // isLoading() {
    //   console.log(this.$store.getters.isLoading)
    //   return this.$store.getters.isLoading
    // }
  },
  components: {
    stayImgs,
  },
};
</script>
