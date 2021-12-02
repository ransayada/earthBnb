
<template>
  <div class="stay-preview-container">
 
    <img  src="../assets/imgs/villa.jpg" class="listImg"/>
    
        <!-- <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="img in slideImgs" :key="img">
      <img :src="img">
    </el-carousel-item>
  </el-carousel> -->
    <p>name: {{ stay.name }}</p>
    <p>price: ${{ stay.price }}/night</p>
  </div>
</template>

<script>
export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  methods: {},
  computed: {
    slideImgs() {
      // var imgs = this.stay.imgUrls;
      // if (imgs) {
      //   console.log(imgs);
      //   return imgs;
      // }
      return ["../assets/imgs/villa.jpg", "../assets/imgs/logo.png"];
    },
  },
};
</script>



<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>