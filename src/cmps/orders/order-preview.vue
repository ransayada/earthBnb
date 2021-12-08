<template >
  <div v-if="order" class="preview-order-imgs">
    <order-imgs :imgUrls="order.imgUrls" />
  </div>
</template>

<script>
import orderImgs from './order-imgs.vue'
export default {
  name: "orderPreview",
  props: { order: Object },
  date () {
      return {
          
      }
  },
  computed: {},
  components: {
      orderImgs
  },
  created () {
      console.log('preview order',this.order);
  }
};

</script>

<style></style>
