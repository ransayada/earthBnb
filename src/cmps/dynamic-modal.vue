<template>
  <section v-if="clicked" class="dynamicModal">
    <div v-if="clicked === 'location'" class="location-modal">
      <span>GO ANYWHERE, ANYTIME</span>
      <button @click="explore()"><p>I'm flexible</p></button>
      <img src="https://res.cloudinary.com/sprint4rad/image/upload/v1638974734/ezgif.com-gif-maker_lcfzri.gif" />
    </div>

    <div v-if="clicked === 's-location'"  class="more-locations-modal">
      <div class="s-location-container">
        <div @click="setLocation('London')" class="location-option-container">
          <div class="location-btn">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <span>London, UK</span>
        </div>
        <div @click="setLocation('Tel-Aviv')" class="location-option-container">
          <div  class="location-btn">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <span>Tel-Aviv, Israel</span>
        </div>
        <div @click="setLocation('New-York')" class="location-option-container">
          <div class="location-btn">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <span>New-York, USA</span>
        </div>
        <div @click="setLocation('Paris')" class="location-option-container">
          <div class="location-btn">
            <i class="fas fa-map-marker-alt"></i>
          </div>
          <span>Paris, France</span>
        </div>
      </div>
    </div>
    <div v-if="clicked === 'guests'" class="guests-modal">
      <form>
        <label class="expanded-search-label" for="adults">
          <span>Adults</span>
          <span>Ages 13 or above</span>
          <el-input-number
            v-model="newTrip.guests.adults"
            @change="handleChange"
            :min="0"
            :max="10"
          ></el-input-number>
        </label>
        <label class="expanded-search-label" for="children">
          <span>Children</span>
          <span>Ages 2-12</span>
          <el-input-number
            v-model="newTrip.guests.children"
            @change="handleChange"
            :min="0"
            :max="10"
          ></el-input-number>
        </label>
        <label class="expanded-search-label" for="infants">
          <span>Infants</span>
          <span>Under 2</span>
          <el-input-number
            v-model="newTrip.guests.infants"
            @change="handleChange"
            :min="0"
            :max="10"
          ></el-input-number>
        </label>
       
      </form>

    </div>
  </section>
</template>

<script>
import { eventBus } from "../services/eventBus.js";
export default {
  name: "Dynamic Modal",
  props: ["clicked"],
  data() {
    return {
      show: true,
      newTrip: {
        guests: {
          adults: 0,
          children: 0,
          infants: 0,
          
        },
        startDate: "",
        endDate: "",
        dest: {
          country: "",
          countryCode: "",
          address: "",
        }
      }

    };
  },
  created() {
    eventBus.$on("setDates", this.setDates);
  },
  methods: {
    handleChange(value) {
      console.log(value)
      eventBus.$emit('setGuests', value)
    },
    explore() {
      this.$router.push("/explore");
    },
    setDates(dates) {
      this.newTrip.startDate = dates[0]
      this.newTrip.endDate = dates[1]
      console.log(this.newTrip)
      this.setNewTrip()
    },
    setLocation(location) {
      if (location === 'Amsterdam, Netherlands') {
        this.newTrip.dest.country = 'AMSTERDAM'
        this.newTrip.dest.countryCode = 'AMS'
        this.newTrip.dest.address = 'Amsterdam'
      } else if (location === 'Paris, France') {
        this.newTrip.dest.country = 'PARIS'
        this.newTrip.dest.countryCode = 'PR'
        this.newTrip.dest.address = 'Paris'
      } else if (location === 'Lisbon, Portugal') {
        this.newTrip.dest.country = 'LISBON'
        this.newTrip.dest.countryCode = 'LSB'
        this.newTrip.dest.address = 'Lisbon'
      } else if (location === 'London, England') {
        this.newTrip.dest.country = 'LONDON'
        this.newTrip.dest.countryCode = 'LND'
        this.newTrip.dest.address = 'London'
        
      }
      eventBus.$emit('selectedLocation', location)
    },
    setNewTrip() {
      this.$store.dispatch({type:'updateTrip', trip:this.newTrip})
      this.$router.push( {path: '/stay' , query: {trip: this.newTrip}})
    }
  },
};
</script>

<style>
</style>