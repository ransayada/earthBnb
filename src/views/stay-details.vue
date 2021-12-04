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
      <div class="stay-info-container flex">
        <section class="stay-long-info">
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
          <section class="stay-long-info flex">
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
          <div class="amenities-container">
            <h1>Ameneties section</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis quo quaerat hic libero distinctio! Sequi expedita
              consequuntur nisi aliquam vero exercitationem aperiam animi quis
              provident necessitatibus reiciendis unde commodi, neque enim in
              blanditiis repudiandae incidunt impedit itaque corrupti! Impedit
              dolores reprehenderit consectetur rem, minima amet veniam sit
              veritatis ratione atque ullam laborum sint nulla eius fugiat
              reiciendis saepe nemo sed repellat ipsa. Iure neque vel
              recusandae, laborum necessitatibus sint laboriosam eos inventore
              deserunt illo soluta voluptates suscipit dolorem ipsum, doloremque
              similique. Maxime vitae dicta, quas vel praesentium provident cum
              sit animi! Deserunt, minima explicabo ex adipisci fuga eum ratione
              corrupti!
            </p>
          </div>
        </section>
        <section class="order-form-container">
          <div class="order-form-sticky">
            <div class="order-form">
              <div class="order-form-header flex space-between">
                <p>
                  <span class="order-form-price">${{ stay.price }}</span
                  >/night
                </p>
                <span class="stay-rate-display">
                  <i class="fas fa-star review-star"></i>
                  4.73
                </span>
              </div>
              <form @submit.prevent="makeOrder">
                <div class="order-form-date-picker flex">
                  <div class="options">
                    <div class="block">
                      <!-- <span class="demonstration">Start date time 12:00:00</span> -->
                      <el-date-picker
                        class="date-picker"
                        title="Choose Your date"
                        style="width: 100%"
                        v-model="value1"
                        type="daterange"
                        range-separator=""
                        prefix-icon=" "
                        start-placeholder="Check in"
                        end-placeholder="Check out"
                        :default-time="['12:00:00', '12:00:00']"
                      >
                      </el-date-picker>
                      <!-- <label for="" style="position: absolute">
                          <span>Check in</span>
                        </label> -->
                    </div>
                  </div>
                  <!-- <label for="">
                    <span>Check in</span>
                    <input type="date" placeholder="Add Dates" />
                  </label>
                  <label for="">
                    <span>Check out</span>
                    <input type="date" placeholder="Add Dates" />
                  </label> -->
                </div>
                <label for="" class="oreder-form-guests">
                  <!-- <span>Guests</span> -->
                  <!-- <input type="text" /> -->
                  <el-input
                    placeholder="Guests"
                    type="number"
                    controls="false"
                    v-model.number="numOfGuests"
                    @change="incNumOfGuests"
                  ></el-input>
                </label>
                <gradient-btn :text="'Reserve'" />
              </form>
              <div class="order-from-total">
                <p v-if="value1">
                  ${{ stay.price }} X {{ calcTime() }}\Nights =
                  ${{ stay.price * calcTime() }}
                </p>
                <!-- <p>Total: 450</p> -->
              </div>
            </div>
          </div>
        </section>
      </div>
      <h1>Review section</h1>
      <h1>Map section</h1>
    </div>
  </div>
</template>
<script>
import stayImgs from "../cmps/stay-imgs.vue";
import gradientBtn from "../cmps/gradient-btn.vue";
export default {
  name: "stayDetails",
  data() {
    return {
      stay: null,
      order: null,
      value1: "",
      numOfGuests: "",
    };
  },
  created() {
    this.getStayById();
    this.order = this.$store.getters.getEmptyOrder;
  },
  methods: {
    getStayById() {
      console.log("params id ", this.$route.params.stayId);
      this.$store
        .dispatch({ type: "getStayById", stayId: this.$route.params.stayId })
        .then((stay) => (this.stay = JSON.parse(JSON.stringify(stay))));
    },
    makeOrder() {
      console.log("making order");
      this.setOrder();
    },
    setOrder() {
      this.order.startDate = this.value1[0];
      this.order.endDate = this.value1[1];
      this.order.totalPrice = this.stay.price * this.calcTime();
      this.order.buyer.fullname = "TEST";
      this.order.stay._id = this.stay._id;
      this.order.stay.name = this.stay.name;
      this.order.stay.price = this.stay.price;
      const order = JSON.parse(JSON.stringify(this.order));
      this.$store.dispatch({ type: "addOrder", order });
      this.$notify({
        title: "Success",
        message: "Trip reserved",
        type: "success",
        position: "bottom-right",
      });
      // console.log(this.order.totalPrice);
    },
    calcTime() {
      let date1 = new Date(this.value1[0]);
      let date2 = new Date(this.value1[1]);
      let timeDiffrence = date2 - date1;
      let daysDiffrence = Math.ceil(timeDiffrence / (1000 * 60 * 60 * 24));
      return daysDiffrence;
    },
    incNumOfGuests() {
      if (this.numOfGuests < 1) this.numOfGuests = 1;
    },
  },
  computed: {
    // isLoading() {
    //   console.log(this.$store.getters.isLoading)
    //   return this.$store.getters.isLoading
    // }
  },
  components: {
    stayImgs,
    gradientBtn,
  },
};
</script>
