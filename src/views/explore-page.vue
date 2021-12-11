<template>
  <div v-if="isLoading" class="explore-container">
    <div class="explore-head-title-visits">
      <small class="head-title-visits">{{ staysCount }} stays</small>
    </div>
    <h1 class="head-title-txt">{{ headTitleText }}</h1>
    <exploreFilter @filtered="setFilterBy" />
    <stay-list :stays="stays" />
  </div>
   <div v-else>
    <img 
      src="https://res.cloudinary.com/sprint4rad/image/upload/v1639236399/loadingGif/loadinganimation_lh356j.gif"
    />
  </div>
</template>

<script>
import stayList from "../cmps/stay-list.vue";
import exploreFilter from "../cmps/explore-filter.vue";
import {eventBusService} from '../services/event-bus.service.js'
export default {
  data() {
    return {
      stays: [],
      filterBy: {
        name: "",
        place: "",
        labels: [],
        amenities: [],
        typeOfPlace: [],
        price: {
          fromPrice: -Infinity,
          toPrice: Infinity,
        },
      },
      isLoading:false
    };
  },
  created() {
    if (this.$route.path !== "/explore") {
      this.stays = this.$store.getters.staysToShow;
    } else {
      this.filterBy.place = this.$route.query.place;
      this.$store.commit({ type: "setFilterBy", filterBy: this.filterBy });
      this.stays = this.$store.getters.staysToShow;
    }
    eventBusService.$emit('setIsLoading')
    setTimeout(()=>{
      this.isLoading = true;
      eventBusService.$emit('setIsLoading')
    },500)
  },
  methods: {
    setFilterBy(filterBy) {
      this.filterBy.amenities = filterBy.amenities;
      this.filterBy.typeOfPlace = filterBy.type;
      this.filterBy.price.fromPrice = filterBy.minPrice;
      this.filterBy.price.toPrice = filterBy.maxPrice;
      this.$store.commit({ type: "setFilterBy", filterBy: this.filterBy });
      this.stays = this.$store.getters.staysToShow;
    },
    formaStayPlace() {
      var countryName = this.filterBy.place;
      var makafIdx = countryName.indexOf("-");
      if (makafIdx === -1) {
        return countryName[0].toUpperCase() + countryName.slice(1);
      }
      return (
        countryName[0].toUpperCase() +
        countryName.substring(1, makafIdx) +
        countryName[makafIdx] +
        countryName[makafIdx + 1].toUpperCase() +
        countryName.substring(makafIdx + 2)
      );
    },
  },
  computed: {
    staysCount() {
      return this.stays.length;
    },
    headTitleText() {
      return this.filterBy.place
        ? `Stays in ${this.formaStayPlace()}`
        : "Find a place to stay";
    },
  },
  mounted(){
   
    window.scrollTo(0, 0);
  
  },
  components: {
    stayList,
    exploreFilter,
  },
};
</script>
