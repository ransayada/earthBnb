<template>
  <div>
    <ul class="order-list">
      <li v-for="order in orders" :key="order._id" class="order-preview">
        <order-preview @cancelOrder="cancelOrder"  :order="order" />
      </li>
    </ul>
  </div>
</template>

<script>
import orderPreview from "./order-preview.vue";
export default {
  name: "order-list",
  props: {
    orders: Array,
  },
  methods: {
    cancelOrder(orderId) {
      this.$emit("cancelOrder", orderId);
    },
  },
  created() {
    console.log(this.orders);
  },
  components: {
    orderPreview,
  },
};
</script>


<style>

.order-list:last-child{
  margin-bottom: 400px;
}

</style>
