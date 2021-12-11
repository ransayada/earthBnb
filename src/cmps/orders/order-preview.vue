<template>
  <div v-if="order" class="preview-order-imgs">
    <div class="order-imgs-container">
      <order-imgs :imgUrls="order.imgUrls" />
    </div>
    <div class="order-details-container">
      <div class="flex space-between align-center">
        <h3>Luxurious Riverside Jungle Retreat</h3>
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
      <h4>Wait for Approval</h4>
      <div class="order-cancel flex space-between align-center">
        <h4>Refundable in the next 3 days</h4>
        <h3>Cancel order</h3>
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
  computed: {},
  components: {
    orderImgs,
  },
  created() {
    console.log("preview order", this.order);
  },
};
</script>

<style></style>
