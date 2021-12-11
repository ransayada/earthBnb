<template>
  <div class="user-order-page" v-if="orders.length">
    <section class="user-order-list">
      <h1>Your Trips</h1>
      <order-list @cancelOrder="cancelOrder" :orders="orders"></order-list>
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
  methods: {
    cancelOrder(orderId) {
      console.log("hhhhasdASDASD");
      this.$store.dispatch({ type: "removeOrder", orderId }).then(() => {
        this.orders = JSON.parse(
          JSON.stringify(this.$store.getters.ordersToShow)
        );
      });
    },
  },
  components: {
    orderList,
  },
};
</script>
