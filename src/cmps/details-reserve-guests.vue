<template>
  <div v-if="clicked === 'guests'" class="details-guests-modal">
    <form>
      <label class="expanded-search-label" for="adults">
        <span>Adults</span>
        <span>Ages 13 or above</span>
        <el-input-number
          v-model="newOrder.guests.adults"
          @change="handleChange"
          :min="1"
          :max="10"
        ></el-input-number>
      </label>
      <label class="expanded-search-label" for="children">
        <span>Children</span>
        <span>Ages 2-12</span>
        <el-input-number
          v-model="newOrder.guests.children"
          @change="handleChange"
          :min="0"
          :max="10"
        ></el-input-number>
      </label>
      <label class="expanded-search-label" for="infants">
        <span>Infants</span>
        <span>Under 2</span>
        <el-input-number
          v-model="newOrder.guests.infants"
          @change="handleChange"
          :min="0"
          :max="10"
        ></el-input-number>
      </label>
      <label class="expanded-search-label" for="pets">
        <span>Pets</span>
        <el-input-number
          v-model="newOrder.guests.pets"
          @change="handleChange"
          :min="0"
          :max="10"
        ></el-input-number>
      </label>
    </form>
    <div class="reserve-guest-close flex">
      <button class="close-btn" @click.stop="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reserve-guests",
  props: ["clicked"],
  data() {
    return {
      newOrder: {
        guests: {
          adults: 0,
          children: 0,
          infants: 0,
          pets: 0,
        },
      },
    };
  },
  methods: {
    handleChange() {
      const { adults, children, infants, pets } = this.newOrder.guests;
      const val = adults + children + infants + pets;
      this.$emit("addGuests", val);
    },
    closeModal() {
      this.$emit("closeRGuests");
    },
  },
};
</script>

<style></style>
