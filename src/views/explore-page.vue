<template>
  <div class="explore-container">
    <exploreFilter @filtered="setFilterBy" />
    <stay-list :stays="stays" />
  </div>
</template>

<script>
import stayList from "../cmps/stay-list.vue";
import exploreFilter from "../cmps/explore-filter.vue";
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
  },
  // mounted(){
  //  if (this.$route.path !== "/explore") {
  //     this.stays = this.$store.getters.staysToShow;
  //   } else {
  //     this.filterBy.place = this.$route.query.place;
  //     this.$store.commit({ type: 'setFilterBy', filterBy: this.filterBy })
  //     this.stays = this.$store.getters.staysToShow;
  //   }
  // },
  components: {
    stayList,
    exploreFilter,
  },
};
</script>
