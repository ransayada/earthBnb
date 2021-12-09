
<template>
  <div class="stay-preview-container">
    <!-- <img :src="`${stay.imgUrls[0]}`" class="listImg" /> -->

    <el-carousel
      :autoplay="false"
      trigger="click"
      @click.native="showStayDetails"
    >

    <div class="heart-preview-container"><span @click.stop="likeStay" :class="{likeBtn: true,liked: isLiked}"><i class="fa fa-heart likeBorder" aria-hidden="true"></i></span></div>
      <el-carousel-item
        v-for="(img, idx) in slideImgs"
        :key="idx"
        :autoplay="false"
      >
      
        <img
          :src="slideImgs[idx]"
          class="listImg"
          style="width: 100%; height: 100%"
        />
      </el-carousel-item>
    </el-carousel>
    <div class="stay-preview-details-container" @click="showStayDetails()">
      <div class="list-rating">
        <i class="fas fa-star"></i>{{ stayRating }}
        <span>({{ ratingNum }})</span>
      </div>
      <div class="prevDiv">{{ stayType }} • {{ stay.loc.city }}</div>
      <div class="prevDiv">{{ staySummary }}</div>
      <div class="prevDiv">
        <span class="preview-stay-bold">${{ formatPrice }}</span
        > / night
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "stay-preview",
  props: {
    stay: Object,
  },
  data(){
    return{
      isLiked: false
    }
  },
  methods: {
    reviewRatingAvg(categories) {
      var sum = 0;
      var categoryNum = 0;
      for (const property in categories) {
        sum += categories[property];
        categoryNum++;
      }
      return sum / categoryNum;
    },
    showStayDetails() {
      //place from to 
      if(!this.$route.query)
      this.$router.push(`/explore/${this.stay._id}`);
      else 
      this.$router.push(`/explore/${this.stay._id}?place=${this.$route.query.place}&from=${this.$route.query.from}&to=${this.$route.query.to}&nog=${this.$route.query.nog}`);
    },
    likeStay(){
      this.isLiked = !this.isLiked
    }
  },
  computed: {
    slideImgs() {
      var imgs = this.stay.imgUrls;
      if (imgs) {
        // console.log(imgs);
        return imgs;
      }
      return ["../assets/imgs/villa.jpg", "../assets/imgs/logo.png"];
    },
    stayRating() {
      const reviews = this.stay.reviews;
      if (reviews.length) {
        var ratingSum = 0;
        reviews.forEach((review) => {
          ratingSum += this.reviewRatingAvg(review.categories);
        });

        return (ratingSum / reviews.length).toFixed(2);
      }
      return 0;
    },
    ratingNum() {
      return this.stay.reviews.length;
    },
    stayType() {
      if (!this.stay.propertyType) {
        //this is temporary
        return Math.random() < 0.5 ? "Loft" : "Villa";
      }
      return this.stay.propertyType;
    },
    staySummary() {
      if (this.stay.summary.length > 28) {
        return this.stay.summary.substr(0, 28) + "...";
      } else return this.stay.summary;
    },
    formatPrice(){
      return this.stay.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
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

.el-carousel__item {
  background-color: #ffffff;
}


</style>