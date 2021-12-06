<template>
  <div>
    <ul class="stay-list">
      <li v-for="stay in stays" :key="stay._id" class="stay-preview-container">
        <!-- <router-link :to="'/explore/'+stay._id"> -->
          <stay-preview :stay="stay" />
        <!-- </router-link> -->
      </li>
    </ul>
  </div>
</template>

<script>
import stayPreview from "./stay-preview.vue";
export default {
  name: "stay-list",
  props: {
    stays: Array,
  },
  methods: {
    // remove(stayId) {
    //   this.$emit("remove", stayId);
    // },
    buildStay(id) {
      return `/#/explore/${id}`;
    },
  },
  components: {
    stayPreview,
  },
};
</script>
