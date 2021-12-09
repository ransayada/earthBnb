<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  props: ["clicked"],
  data() {
    return {
      time1: null,
      time2: null,
      time3: null,
    };
  },
  methods: {
    setTime() {
      // console.log(this.time3);
      this.time3[0] = new Date(this.time3[0].toDateString());
      console.log('datepicker',this.time3[0]);
      this.$emit("setTime", this.time3);
      this.$emit("setOrderDetails");
    },
  },
};
</script>

<template>
  <div v-if="clicked === 'date'">
    <date-picker class="details-date-picker" @change="setTime" v-model="time3" range open></date-picker>
  </div>
</template>
