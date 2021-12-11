<template>
  <div v-if="order" class="preview-order-imgs">
    <div class="order-imgs-container">
      <order-imgs :imgUrls="order.imgUrls" />
    </div>
    <div class="order-details-container">
      <div class="flex space-between align-center">
        <h3 v-if="order.stay.name">{{ order.stay.name }}</h3>
        <h3 v-else>Luxurious Riverside Jungle Retreat</h3>
        <p>
          <span>{{ order.startDate }}</span>
        </p>
      </div>
      <div class="flex space-between align-center">
        <h4>${{ order.totalPrice }}</h4>
        <p>
          <span>{{ order.endDate }}</span>
        </p>
      </div>
      <h4>
        Order status:
        <span
          :class="{
            clR: $store.getters.getOrderStatus.status === 'Rejected',
            clG: $store.getters.getOrderStatus.status === 'Accepted',
            clY: $store.getters.getOrderStatus.status === 'Pending',
          }"
          >{{ orderStatus }}</span
        >
      </h4>
      <div class="order-cancel flex space-between align-center">
        <h4>Refundable in the next 3 days</h4>
        <button @click="cancelOrder(order._id)">Cancel order</button>
      </div>
    </div>
  </div>
</template>

<script>
import orderImgs from "./order-imgs.vue";
export default {
  name: "orderPreview",
  props: { order: Object },
  date() {
    return {};
  },
  computed: {
    orderStatus() {
      return this.$store.getters.getOrderStatus.status;
    },
  },
  components: {
    orderImgs,
  },
  created() {},
  methods: {
    cancelOrder(orderId) {
      this.$emit("cancelOrder", orderId);
    },
  },
};
</script>

<style>
.clG {
  color: green;
}
.clR {
  color: red;
}
.clY {
  color: purple;
}
</style>
