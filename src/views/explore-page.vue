<template>
  <div class="explore">
    <h1>This is an explore page</h1>
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

