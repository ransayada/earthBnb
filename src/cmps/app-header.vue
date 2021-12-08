<template>
  <header
    :class="{ 'app-header': !this.isTop, 'app-header-expanded': this.isTop && !this.isExplore, 'app-header-explore': (this.isExplore && !this.isTop)}"
    :style="navColor"
  >
    <section class="main-nav">
      <div class="logo">
        <a href="#/">
            <i class="fab fa-airbnb"></i>
            EarthBnb
        </a>
      </div>
      <div @click="expandToSearch()" v-if="!isTop" class="initial-search-bar">
        <p class="initial">Start your search</p>
        <!-- <p class="not-initial">{{this.place}}  {{this.from}} {{this.to}}  {{this.nog}} guests</p> -->
        
          <div class="search-btn">
          <button><i class="fas fa-search"></i></button>
      
        </div>
      </div>
      <div v-if="isTop" class="nav-link">
        <span>Places to stay</span>
      </div>
      <div class="explore-options">
           <a href="#/explore">
            <p>Explore</p>
            </a>
          </div>
           <div class="explore-options">
             <a href="#/host">
              <p>Become a Host</p>
            </a>
          </div>
          <div class="user-options">
            <button class="drop-btn">
              <i class="fas fa-bars"></i>
              <i class="fas fa-user-circle"></i>
            </button>
          </div>      
      <div v-if="isTop" class="secondary-search-bar">
        <form @submit.prevent="">
          <label class="main-search-label" @click="openModal('location')">
            <span>Location</span>
            <input placeholder="Where are you going?" @input="openModal('s-location')"  v-model="location" />
          </label>
          <label class="main-search-label" @click="openModal()">
            <span class="to">Check in</span>
            <date-picker class="my-date-picker"
              :placeholder="getCheckinDate"
              @input="renderDates($event)"
              v-model="checkinDate"
              range
            ></date-picker>
          </label>
          <label class="main-search-label" @click="openModal()">
            <span>Check out</span>
            <input
            :placeholder="getCheckoutDate"
              v-model="checkoutDate"
              ref="myDatePicker"
              range
            />
          </label>
          <label class="main-search-label" @click="openModal('guests')">
            <span>Guests</span>
            <input :placeholder="getGuestsAmount" />
          </label>
          <div class="expanded circle">
          <button @click="createTrip()"><i class="fas fa-search"></i></button>
          </div>
          <dynamic-modal :clicked="this.clickedOn" />
        </form>
      </div>
    </section>
  </header>
</template>
<script>
import dynamicModal from "./dynamic-modal.vue";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";
import {eventBus} from '../services/eventBus.js'

DatePicker.methods.displayPopup = function () {
  this.position = {
    left: 0,
    bottom: "100%",
  };
};
export default {
  components: {
    DatePicker,
    dynamicModal,
  },
  data() {
    return {
      // num: 1,
      windowWidth: window.innerWidth,
      isTop: true,
      currPage: "",
      expandedSearch: false,
      clickedOn: "",
      checkinDate: 'Add dates',
      checkoutDate: 'Add dates',
      location: '',
      guests: 'Add guests',
      placeToShow: '',
      from: '',
      to: '',
      nog: '',
    };
  },
  created() {
    eventBus.$on('selectedLocation', this.setLocation)
    eventBus.$on('setGuests', this.setGuests)
    this.setCurrPage();
    window.addEventListener("scroll", this.handleScroll);
    if (this.$route.path !== "/explore") {
      console.log('regular')
    } else {
      this.placeToShow = this.$route.query.place;
      this.from = this.$route.query.from;
      this.to = this.$route.query.to;
      this.nog = this.$route.query.nog;
      
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },
  methods: {
    createTrip() {
      var place = this.location.split(",")[0];
      console.log(place);
      var from = this.checkinDate;
      console.log(from);
      var to = this.checkoutDate;
      console.log(to);
      var guests = this.guests;
      if(this.currPage!=='explore'){
      this.location = '';
      this.checkinDate = 'Add dates';
      this.checkoutDate = 'Add dates';
      this.guests = 'Guests';
      }
      window.location.href = `#/explore?place=${place}&from=${from}&to=${to}&nog=${guests}`;
      },
    toHome() {
      this.$router.push("/");
      this.$store.dispatch({type:'updateTrip', trip: ''})
    },
    toHost() {
      this.$router.push("/host");
    },
    handleScroll() {
      let scrollBarPos = window.top.scrollY;
      if (!scrollBarPos) this.topMode();
      else this.scrollMode();
    },
    topMode() {
      this.isTop = this.currPage === "all" ? false : true;
    },
    scrollMode() {
      this.isTop = false;
    },
    setCurrPage() {
      console.log(this.$route.name);
      console.log(this.$route.query.place);
      if (this.$route.name === "home") {
        this.isTop = true;
        this.currPage = "home";
        this.isExplore = false;
      } else if (this.$route.name == "explorePage" && this.$route.name == "explore") {
        this.isTop = true;
        this.currPage = "explore";
        this.isExplore = true;
        console.log(this.isExplore);
        if(!this.$route.query.place){
          this.place =this.$route.query.place;
        }
        if(!this.$route.query.from){
          this.from =this.$route.query.from;
        }
        if(!this.$route.query.to){
          this.to =this.$route.query.to;
        }
        if(!this.$route.query.nog){
          this.nog =this.$route.query.nog;
        }
      }
      else{
        this.isTop = false;
        this.currPage = "all";
      }
    },
    expandToSearch() {
      this.isTop = true;
      this.expandedSearch;
    },
    openModal(of) {
      this.clickedOn = of;
      if (of === 'submit') {
        if (this.checkinDate && this.checkoutDate) {
          const dates = [this.checkinDate, this.checkoutDate]
          eventBus.$emit('setDates', dates)
        }
      }
    },
      setLocation(location) {
        this.location = location
        this.openModal()
        
      },
      renderDates(event) {
      this.checkinDate = `${new Date(event[0]).getDate()}/${new Date(event[0]).getMonth() + 1}`
      this.checkoutDate = `${new Date(event[1]).getDate()}/${new Date(event[1]).getMonth() + 1}`
      },
      setGuests(nog) {
       this.guests = nog;
      }
  },
  computed: {
    getCheckinDate() {
      return this.checkinDate
    },
    getCheckoutDate() {
      return this.checkoutDate
    },
    getGuestsAmount() {
      if (!this.guests) return 'Add guests'
      return this.guests
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  watch: {
    "$route.params": {
      handler() {
         this.setCurrPage();
        if (this.currPage === "home") {
          if(this.isTop){
            this.openModal();
          }
          else{
            console.log('regular header')
          }
        }
        else if (this.currPage === "explore") {
          console.log('handle query params')
        }
        else if (this.currPage === "stays") {
          console.log('change to stays header')
        } 
      },
      immediate: true,
    }
  },
};
</script>
