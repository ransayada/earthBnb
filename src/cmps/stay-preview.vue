
<template>
  <div class="stay-preview">
 
    <img  src="../assets/imgs/logo.png" class="listImg"/>
    <p>name: {{ stay.name }}</p>
    <p>price: {{ stay.price }}</p>
  </div>
</template>

<script>
export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  methods: {},
};
</script>


