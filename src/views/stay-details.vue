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
          <p><i class="far fa-heart"></i> Save</p>
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
                <i class="fas fa-key" aria-hidden="true"></i>
                <div>
                  <h3>Great check-in experience</h3>
                  <h4>
                    100% of recent guests gave the check-in process a 5-star
                    rating.
                  </h4>
                </div>
              </div>
              <div>
                <i class="fas fa-medal" aria-hidden="true"></i>
                <div>
                  <h3>Woddie is a SuperHost</h3>
                  <h4>Superhosts are experienced, highly rated hosts.</h4>
                </div>
              </div>
              <div>
                <i class="fas fa-wifi" aria-hidden="true"></i>
                <div>
                  <h3>Wifi</h3>
                  <h4>Guests often search for this popular amenity.</h4>
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
            <h1>What this place offers</h1>
            <ul>
              <li>
                <i class="fas fa-wifi" aria-hidden="true"></i>
                <span>Wifi</span>
              </li>
              <li>
                <i class="fas fa-utensils" aria-hidden="true"></i>
                <span>Kitchen</span>
              </li>
              <li>
                <i class="fas fa-smoking"></i>
                <span>Smoking allowed</span>
              </li>
              <li>
                <i class="fas fa-paw"></i>
                <span>Pets allowed</span>
              </li>
              <li>
                <i class="fas fa-blender"></i>
                <span>Cooking basics</span>
              </li>
              <li>
                <i class="fas fa-wind"></i>
                <span>Air conditioning</span>
              </li>
            </ul>
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
                        @change="setOrderDetails"
                      >
                      </el-date-picker>
                    </div>
                  </div>
                </div>
                <label for="" class="oreder-form-guests">
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
              <div v-if="value1" class="order-from-total">
                <h5>You wont be charged yet.</h5>
                <div>
                  <p class="total-description">
                    ${{ stay.price }} X {{ calcTime() }}\Nights 
                  </p>
                    <p>${{ stay.price * calcTime() }}</p>
                </div>
                <div>
                  <p class="total-description">Service fee  </p>
                  <p>${{ serviceFee }}</p>
                </div>
                <div>
                  <p class="total-description">Taxes </p>
                  <p>${{ taxes }}</p>
                </div>
                <div class="total-price"><p class="total-description">Total</p>
                <p>${{this.totalPrice}}</p></div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section class="stay-review-container">
        <div class="stay-review-header flex">
          <h2>
            <span><i class="fas fa-star review-star"></i>{{ reviewSum }}</span>
          </h2>
          <div class="stay-review-stat grid">
            <div class="ctg-stats">
              <h3>Cleanliness</h3>
            </div>
          </div>
        </div>
      </section>
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
      numOfGuests: 1,
      totalPrice: 0,
      serviceFee: 0,
      taxes: 0,
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
      this.order.totalPrice = this.totalPrice
      this.calcServiceFee(this.order.totalPrice);
      this.order.buyer.fullname = "TEST";
      this.order.stay._id = this.stay._id;
      this.order.stay.name = this.stay.name;
      this.order.guests.adults = this.numOfGuests;
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
    calcPrice(Days) {
      return this.stay.price * Days;
    },
    incNumOfGuests() {
      if (this.numOfGuests < 1) this.numOfGuests = 1;
    },
    calcServiceFee(TotalPrice) {
      return Math.round(TotalPrice * 0.02);
    },
    setOrderDetails() {
      let initialPrice = this.calcPrice(this.calcTime());
      console.log(initialPrice);
      this.serviceFee = this.calcServiceFee(initialPrice);
      this.taxes = this.calcTaxes(initialPrice);
      this.totalPrice= initialPrice + this.serviceFee + this.taxes
      console.log(this.serviceFee );
    },
    calcTaxes(TotalPrice) {
      return Math.round(TotalPrice * 0.005);
    },
  },
  computed: {
    // isLoading() {
    //   console.log(this.$store.getters.isLoading)
    //   return this.$store.getters.isLoading
    // },
    reviewSum() {
      if (this.stay.reviews.length) {
        let sum = 0;
        this.stay.reviews.forEach((review) => {
          sum += +review.categories.value;
        });
        return sum / this.stay.reviews.length;
      } else return 4.73;
    },
    showServiceFee() {
      return this.serviceFee;
    },
    showOtherFee() {
      return this.otherFees;
    },
  },
  components: {
    stayImgs,
    gradientBtn,
  },
};
</script>
