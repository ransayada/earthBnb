<template>
  <div class="orders">
    <h1>This is an orders page</h1>
    <ul class="order-list">
      <li v-for="order in orders" :key="order._id" >
          #{{order}}
      </li>
    </ul>

    </div>
  
</template>

<script>

export default {
  data() {
    return {
      orders: [],
        }
    },
    created() {
      this.orders = this.$store.getters.ordersToShow;
    },
}
</script>
