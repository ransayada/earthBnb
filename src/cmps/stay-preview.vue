
<template>
  <div class="stay-preview-container">
    <img :src="`${stay.imgUrls[0]}`" class="listImg" />

    <!-- <el-carousel :interval="5000" arrow="always">
    <el-carousel-item v-for="img in slideImgs" :key="img">
      <img :src="img">
    </el-carousel-item>
  </el-carousel> -->
    <div class="list-rating">
      <i class="fas fa-star"></i>{{ stayRating }}
      <span>({{ ratingNum }})</span>
    </div>
    <!-- <p>name: {{ stay.name }}</p>
    <p>price: ${{ stay.price }}/night</p> -->
     <div class="prevDiv">{{ stayType }} • {{ stay.loc.city }}-{{stay.loc.country }}</div>
     <div class="prevDiv">{{ staySummary }}</div>
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
    stayRating() {
      const reviews = this.stay.reviews;
      var ratingSum = 0;
      if (reviews.length) {
        reviews.forEach((review) => {
          ratingSum += +review.rating;
        });
        return ratingSum / reviews.length;
      }
      return 0;
    },
    ratingNum(){
      return this.stay.reviews.length
    },
    stayType(){
      if(!this.stay.type){ //this is temporary
        return (Math.random() < 0.5)? 'Loft':'Villa'
      }
      return this.stay.type
    },
    staySummary(){
      if (this.stay.summary.length > 28) {
        return this.stay.summary.substr(0, 28) + "...";
      } else return this.stay.summary; 
    }
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

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>