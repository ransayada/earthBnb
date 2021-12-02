<template>
  <div class="stay-details">
    <div v-if="stay" class="details-container">
      <h1>{{ stay.name }}</h1>
      <div class="stay-share-container flex space-between">
        <div class="flex">
          <p>{{ stay.loc.country }},</p>
          <p>{{ stay.loc.city }}</p>
        </div>
        <div class="flex">
          <p>Share</p>
          <p>Save</p>
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
              <i class="fas fa-home" aria-hidden="true"></i>
              <div>
                <h3>House Rules</h3>
                <h4>You'll have the place to yourself.</h4>
              </div>
            </div>
            <div>
              <i class="fas fa-home" aria-hidden="true"></i>
              <div>
                <h3>Woddie is a SuperHost</h3>
                <h4>You'll have the place to yourself.</h4>
              </div>
            </div>
            <div>
              <i class="fas fa-home" aria-hidden="true"></i>
              <div>
                <h3>Wifi</h3>
                <h4>You'll have the place to yourself.</h4>
              </div>
            </div>
          </div>
          <section class="temp-login">
            <div>
              <h1>Login</h1>
            </div>
          </section>
        </section>

        <div>
          <h5>Stay description</h5>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. In veniam
            quas odio ipsam fugiat eum molestias aliquid placeat autem, dolore
            veritatis, repudiandae, at pariatur suscipit accusamus mollitia. Ut
            provident perferendis et inventore voluptas quisquam consequuntur
            natus tempora officiis tempore vel eaque, praesentium rem porro eos
            temporibus odio libero. Perferendis, quis.
          </p>
        </div>
      </div>
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
