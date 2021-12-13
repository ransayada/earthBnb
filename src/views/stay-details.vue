<template>
  <div class="stay-details">
    <div
      class="details-reserve-header flex space-between align-center"
      :style="determinePos"
    >
      <div class="details-nav flex">
        <span>Photos</span>
        <span>Amenities</span>
        <span>Reviews</span>
        <span>Location</span>
      </div>
      <div class="reserve-stay-mini flex align-center">
        <div class="reserve-mini-info flex">
          <h3>
            <span>$ {{ stay.price }} </span>
            / night
          </h3>
          <h4>
            <i class="fas fa-star review-star"></i> {{ stayRating }} ({{
              stay.reviews.length
            }}
            Reviews)
          </h4>
        </div>
        <gradientBtn @click="goToOrder" :text="'Reserve'" />
      </div>
    </div>
    <div v-if="stay" class="details-container">
      <h1 class="stay-name">{{ stay.name }}</h1>
      <div class="stay-share-container flex space-between">
        <div class="stay-city-info flex align-center">
          <p><i class="fas fa-star review-star"></i>{{ stayRating }}</p>
          <p>({{ stay.reviews.length }} reviews)</p>
          <p>·</p>
          <p>{{ stay.loc.country }},</p>
          <p>{{ stay.loc.city }}</p>
        </div>
        <div class="action-btns flex">
          <p><i class="fas fa-share-alt"></i> Share</p>
          <p><i class="far fa-heart"></i> Save</p>
        </div>
      </div>
      <div>
        <stay-imgs :imgUrls="stay.imgUrls" />
      </div>
      <div class="stay-info-container flex">
        <section class="stay-long-info">
          <div class="stay-basic-info flex space-between">
            <div class="stay-first-info">
              <h2 class="flex">{{ stay.propertyType }} Hosted By Woodie</h2>
              <ul class="clean-list flex">
                <li>
                  <span>10 guests</span>
                  <span>·</span>
                </li>
                <li>
                  <span>4 Bedrooms</span>
                  <span>·</span>
                </li>
                <li>
                  <span> 5 Beds</span>
                  <span>·</span>
                </li>
                <li>
                  <span>3 Baths</span>
                </li>
              </ul>
            </div>
            <div class="host-img">
              <img
                class="user-review-avatar"
                src="../assets/imgs/icons/user.jpg"
              />
            </div>
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
              <div
                class="order-form-header flex space-between homepage-datepicker"
              >
                <p>
                  <span class="order-form-price"
                    >${{ stay.price.toLocaleString() }}</span
                  >
                  <span class="order-form-span"> / night</span>
                </p>
                <span class="stay-rate-display">
                  <i class="fas fa-star review-star"></i>
                  <span class="rate-avarage">{{ stayRating }}</span>
                  <span style="text-decoration: underline"
                    >({{ stay.reviews.length }} reviews)</span
                  >
                </span>
              </div>
              <form @submit.prevent="makeOrder">
                <div class="order-form-date-picker flex homepage-datepicker">
                  <div class="checking">
                    <div class="check-in" @click="openModal('date')">
                      <div class="category-stay-label">CHECK-IN</div>
                      <Details-date-picker
                        @setTime="setTime"
                        :clicked="this.clickedOn"
                        @setOrderDetails="setOrderDetails"
                      />
                      <div class="add" v-if="!time">Add date</div>
                      <div class="add" else>
                        {{ showCheckInDate }}
                      </div>
                    </div>
                    <div class="check-out" @click="openModal('date')">
                      <div class="category-stay-label">CHECK-OUT</div>
                      <div class="add" v-if="!time">Add date</div>
                      <div class="add" else>
                        {{ showCheckOutDate }}
                      </div>
                    </div>
                    <div class="guests-num" @click="openModal('guests')">
                      <div class="category-stay-label">GUESTS</div>
                      <div class="add">{{ numOfGuests }} guest</div>
                      <details-reserve-guests
                        @closeRGuests="closeRGuests"
                        @addGuests="addGuests"
                        :clicked="this.clickedOn"
                      />
                    </div>
                  </div>
                </div>
                <gradient-btn :text="'Reserve'" />
              </form>
              <div v-if="time" class="order-from-total">
                <h5>You wont be charged yet.</h5>
                <div>
                  <p class="total-description">
                    ${{ stay.price }} X {{ calcTime() }}\Nights
                  </p>
                  <p>${{ (stay.price * calcTime()).toLocaleString() }}</p>
                </div>
                <div>
                  <p class="total-description">Service fee</p>
                  <p>${{ serviceFee }}</p>
                </div>
                <div>
                  <p class="total-description">Taxes</p>
                  <p>${{ taxes }}</p>
                </div>
                <div class="total-price">
                  <p class="total-description">Total</p>
                  <p>${{ this.totalPrice.toLocaleString() }}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div class="reviews-display">
        <div class="reviews-headline">
          <p>
            <i class="fas fa-star review-star"></i>
            {{ stayRating }} · {{ this.stay.reviews.length }} reviews
          </p>
        </div>
        <div class="reviews-rating-data airbnb">
          <div class="flex justify-center space-between">
            <div>Cleanliness</div>
            <div class="rate-score">
              <div class="flex">
                <el-progress
                  color="#222222"
                  :percentage="this.stay.reviews[0].categories.cleanliness * 20"
                  :format="format"
                  show-text=""
                ></el-progress>
                <span>{{ this.stay.reviews[0].categories.cleanliness }}</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center space-between">
            <div>Communication</div>
            <div class="rate-score">
              <div class="flex">
                <el-progress
                  color="#222222"
                  :percentage="
                    this.stay.reviews[0].categories.communication * 20
                  "
                  :format="format"
                ></el-progress>
                <span>
                  {{ this.stay.reviews[0].categories.communication }}</span
                >
              </div>
            </div>
          </div>
          <div class="flex justify-center space-between">
            <div>Check-in</div>
            <div class="rate-score">
              <div class="flex">
                <el-progress
                  color="#222222"
                  :percentage="this.stay.reviews[0].categories.checkIn * 20"
                  :format="format"
                ></el-progress>
                <span>{{ this.stay.reviews[0].categories.checkIn }}</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center space-between">
            <div>Accuracy</div>

            <div class="rate-score">
              <div class="flex">
                <el-progress
                  color="#222222"
                  :percentage="this.stay.reviews[0].categories.accuracy * 20"
                  :format="format"
                ></el-progress>
                <span>{{ this.stay.reviews[0].categories.accuracy }}</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center space-between">
            <div>Location</div>

            <div class="rate-score">
              <div class="flex">
                <el-progress
                  color="#222222"
                  :percentage="this.stay.reviews[0].categories.location * 20"
                  :format="format"
                ></el-progress>
                <span>{{ this.stay.reviews[0].categories.location }}</span>
              </div>
            </div>
          </div>
          <div class="flex justify-center space-between">
            <div>Value</div>
            <div class="rate-score">
              <div class="flex">
                <el-progress
                  color="#222222"
                  :percentage="this.stay.reviews[0].categories.accuracy * 20"
                  :format="format"
                ></el-progress>
                <span>{{ this.stay.reviews[0].categories.accuracy }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="reviews-display-data airbnb">
          <review-list :reviews="reviewsToShow"></review-list>
          <div>
            <section class="add-review flex">
              <section class="stay-add-review">
                <h2>Add review</h2>
                <div class="add-review-header flex">
                  <img
                    class="user-review-avatar"
                    src="../assets/imgs/icons/avatar.png"
                  />
                  <div class="center">
                    <div class="short-exmple">Ran.S</div>
                    <div class="review-date">December 2021</div>
                  </div>
                </div>
                <div class="stay-add-review-ctgs">
                  <div class="ctg-statistics flex">
                    <div>Cleanliness</div>
                    <div class="block">
                      <el-rate
                        v-model="newReview.categories.cleanliness"
                        :colors="colors"
                      >
                      </el-rate>
                    </div>
                  </div>
                  <div class="ctg-statistics flex">
                    <div>Check-in</div>
                    <div class="block">
                      <el-rate
                        v-model="newReview.categories.checkIn"
                        :colors="colors"
                      >
                      </el-rate>
                    </div>
                  </div>
                  <div class="ctg-statistics flex">
                    <div>Location</div>
                    <div class="block">
                      <el-rate
                        v-model="newReview.categories.location"
                        :colors="colors"
                      >
                      </el-rate>
                    </div>
                  </div>
                  <div class="ctg-statistics flex">
                    <div>Communication</div>
                    <div class="block">
                      <el-rate
                        v-model="newReview.categories.communication"
                        :colors="colors"
                      >
                      </el-rate>
                    </div>
                  </div>
                  <div class="ctg-statistics flex">
                    <div>Accuracy</div>
                    <div class="block">
                      <el-rate
                        v-model="newReview.categories.accuracy"
                        :colors="colors"
                      >
                      </el-rate>
                    </div>
                  </div>
                  <div class="ctg-statistics flex">
                    <div>Value</div>
                    <div class="block">
                      <el-rate
                        v-model="newReview.categories.value"
                        :colors="colors"
                      >
                      </el-rate>
                    </div>
                  </div>
                </div>
                <div class="add-review-txt">
                  <textarea
                    v-model="newReview.txt"
                    placeholder="Write your opinion about this stay..."
                    type="text"
                    name="txt"
                  ></textarea>
                </div>
                <div class="review-btn-container flex">
                  <button @click.prevent="addReview" class="add-review-btn">
                    Send
                  </button>
                </div>
              </section>
            </section>
          </div>
        </div>
      </div>
      <section class="details-map">
        <h2>Location</h2>
        <h3>
          {{ stay.loc.country }},
          {{ stay.loc.city }}
        </h3>

        <GmapMap
          :center="pos"
          :zoom="12"
          style="width: 100%; height: 480px; margin-bottom: 80px"
        >
          <GmapMarker :position="pos" :clickable="true" />
        </GmapMap>
      </section>
    </div>
    <div v-else>
      <img
        src="https://res.cloudinary.com/sprint4rad/image/upload/v1639236399/loadingGif/loadinganimation_lh356j.gif"
      />
    </div>
  </div>
</template>
<script>
import DetailsReserveGuests from "../cmps/details-reserve-guests.vue";
// import DatePicker from "../cmps/date-picker.vue";
import stayImgs from "../cmps/stay-imgs.vue";
import gradientBtn from "../cmps/gradient-btn.vue";
import reviewList from "../cmps/review-list.vue";
import DetailsDatePicker from "../cmps/details-date-picker.vue";
import "vue2-datepicker/index.css";

// DatePicker.methods.displayPopup = function () {
//   this.position = {
//     left: 0,
//     bottom: "100%",
//   };
// };

export default {
  name: "stayDetails",
  data() {
    return {
      stay: null,
      order: null,
      time: "",
      numOfGuests: 1,
      totalPrice: 0,
      serviceFee: 0,
      taxes: 0,
      pos: {},
      clickedOn: "",
      isFalse: false,
      value1: null,
      value2: null,
      colors: ["#99A9BF", "#fc111b", "#ff385c"],
      newReview: null,
      scrollBar: 0,
    };
  },
  created() {
    this.getStayById();
    this.order = this.$store.getters.getEmptyOrder;
    this.newReview = this.$store.getters.getEmptyReview;
    window.addEventListener("scroll", this.handlingScroll);
  },
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
    getStayById() {
      console.log("params id ", this.$route.params.stayId);
      this.$store
        .dispatch({ type: "getStayById", stayId: this.$route.params.stayId })
        .then((stay) => {
          this.stay = JSON.parse(JSON.stringify(stay));
          this.pos = { lat: +this.stay.loc.lat, lng: +this.stay.loc.lng };
          if (
            this.$route.query.from !== "undefined" &&
            this.$route.query.from
          ) {
            console.log("entered");
            this.time = [];
            this.time[0] = this.$route.query.from;
            if (this.$route.query.to) this.time[1] = this.$route.query.to;
            if (this.$route.query.nog) this.numOfGuests = this.$route.query.nog;
            this.setOrderDetails();
          }
        });
    },
    handlingScroll() {
      let scrollBarPos = window.top.scrollY;
      this.scrollBar = scrollBarPos;
    },
    makeOrder() {
      console.log("making order");
      this.setOrder();
    },
    setOrder() {
      this.order.startDate = this.time[0];
      this.order.endDate = this.time[1];
      this.order.totalPrice = this.totalPrice;
      this.calcServiceFee(this.order.totalPrice);
      this.order.buyer.fullname = "Ran Sayada";
      this.order.stay._id = this.stay._id;
      this.order.stay.name = this.stay.name;
      this.order.guests.adults = this.numOfGuests;
      this.order.stay.price = this.stay.price;
      this.order.imgUrls = this.stay.imgUrls;
      const order = JSON.parse(JSON.stringify(this.order));
      this.$store.dispatch({ type: "addOrder", order }).then(() => {
        this.$store.dispatch({ type: "loadOrders" });
      });
      this.$notify({
        title: "Trip Reserved",
        message: "Your order has been sent to the host for approval.",
        position: "bottom-right",
        customClass: "reserve-popup",
      });
      this.resetData();
    },
    calcTime() {
      console.log(this.time[0]);
      let date1 = new Date(this.time[0]);
      console.log(date1);
      let date2 = new Date(this.time[1]);
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
      this.totalPrice = initialPrice + this.serviceFee + this.taxes;
      console.log(this.serviceFee);
    },
    calcTaxes(TotalPrice) {
      return Math.round(TotalPrice * 0.005);
    },
    openModal(of) {
      this.clickedOn = of;
    },
    addGuests(val) {
      console.log("details", val);
      // if (val === 0) return;
      this.numOfGuests = val;
    },
    closeRGuests() {
      this.clickedOn = "";
      console.log(this.clickedOn);
    },
    setTime(time) {
      console.log("settime", time[0].toDateString());
      let currtime = time[0].toDateString();
      let currtime2 = time[1].toDateString();
      this.clickedOn = "";
      this.time = [];
      this.time.push(currtime);
      this.time.push(currtime2);
    },
    format(percentage) {
      return percentage === 100 ? "Full" : `${percentage}%`;
    },
    addReview() {
      if (this.newReview.txt) {
        this.stay.reviews.push(this.newReview);
      }
    },
    reviewRatingAvg(categories) {
      var sum = 0;
      var categoryNum = 0;
      for (const property in categories) {
        sum += categories[property];
        categoryNum++;
      }
      return sum / categoryNum;
    },
    goToOrder() {
      window.moveBy(250, 250);
    },
    resetData() {
      this.time = "";
      this.numOfGuests = 1;
      this.totalPrice = 0;
      this.serviceFee = 0;
      this.taxes = 0;
      this.order = this.$store.getters.getEmptyOrder;
    },
  },
  computed: {
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
    getFalseValue() {
      return false;
    },
    showCheckInDate() {
      if (!this.$route.query.from && this.$route.query.from !== "undefined") {
        let time = this.time[0] ? this.time[0] : "";
        return time;
      } else return this.time[0];
    },
    showCheckOutDate() {
      if (!this.$route.query.to && this.$route.query.from !== "undefined") {
        let time = this.time[1] ? this.time[1] : "";
        return time;
      } else return this.time[1];
    },
    reviewsToShow() {
      const { reviews } = this.stay;
      if (!reviews) return;

      return reviews.slice(0, 6);
    },
    determinePos() {
      if (this.scrollBar >= 1620) {
        return {
          display: "",
        };
      } else {
        return { display: "none" };
      }
    },
    stayRating() {
      const reviews = this.stay.reviews;
      if (reviews.length) {
        var ratingSum = 0;
        reviews.forEach((review) => {
          ratingSum += this.reviewRatingAvg(review.categories);
        });

        return (ratingSum / reviews.length).toFixed(2);
      }
      return 0;
    },
  },
  components: {
    stayImgs,
    gradientBtn,
    DetailsReserveGuests,
    DetailsDatePicker,
    reviewList,
    // dynamicModal,
  },
};
</script>
