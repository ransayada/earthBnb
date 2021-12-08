<template>
  <div class="user-order-page" v-if="orders.length">
    <section class="user-order-list">
      <h1>This is an orders page</h1>
      <order-list :orders="orders"></order-list>
    </section>
  </div>
</template>

<script>
import orderList from "../cmps/orders/order-list.vue";
export default {
  data() {
    return {
      orders: [],
    };
  },
  created() {
    this.orders = JSON.parse(JSON.stringify(this.$store.getters.ordersToShow));
    console.log(this.orders);
    
  },
  components: {
    orderList,
  },
};
</script>
