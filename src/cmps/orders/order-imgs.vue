<template>
  <div v-if="imgUrls" class="stay-imgs">
    <img :src="`${imgUrls[idx]}`" v-for="(img, idx) in imgUrls.slice(0, 3)" :key="idx" />
  </div>
</template>

<script>
export default {
  name: "orderImgs",
  props: { imgUrls: Array },
  computed: {

  },
};
</script>

<style></style>
