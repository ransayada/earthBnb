<template>
  <div class="explore-container">
    <div class="stay-filter">
      <button>filter1</button>
      <button>filter2</button>
      <button>filter3</button>
      <button>filter4</button>
    </div>
    <stay-list :stays="stays" />
  </div>
</template>

<script>
import stayList from "../cmps/stay-list.vue";

export default {
  data() {
    return {
      stays: [],
      filterBy: {
        name: "",
        place: "",
        labels: [],
        amenities: [],
        typeOfPlace: "",
        price: {
          fromPrice: -Infinity,
          toPrice: Infinity,
        },
      },
    };
  },
  created() {
    console.log('hello kalb');
    if (this.$route.path !== "/explore") {
      this.stays = this.$store.getters.allStays;
    } else {
      this.filterBy.place = this.$route.query.place;
      this.$store.commit({ type: 'setFilterBy', filterBy: this.filterBy })
      this.stays = this.$store.getters.staysToShow;
    }
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
  },
};
</script>
