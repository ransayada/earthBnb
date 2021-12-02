<template>
  <div class="explore-container main-layout">
    <h1>This is an explore page</h1>

    <div class="stay-filter"> 
      <button> filter1 </button>  
      <button> filter2 </button>  
      <button> filter3 </button>  
      <button> filter4 </button>  
     </div>
    <stay-list  :stays="stays" />
  </div>
</template>

<script>
import stayList from "../cmps/stay-list.vue";

export default {
  data() {
    return {
      stays: [],
    };
  },
  created() {
    this.stays = this.$store.getters.staysToShow;
  },
  components: {
    stayList,
  },
};
</script>

