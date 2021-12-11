<template>
  <section class="review-preview">
    <div class="center flex">
      <img class="user-review-avatar" src="../assets/imgs/icons/user.jpg" />
      <div>
        <!-- <div class="short-exmple">Josh Cruze</div> -->
        <div class="short-exmple" v-if="review.user.fullName">
          {{ review.user.fullName }}
        </div>
        <div class="short-exmple" v-else>Ran.S</div>
        <div class="review-date">December 2021</div>
      </div>
    </div>
    <div class="review-text">{{ review.txt }}</div>
  </section>
</template>

<script>
export default {
  name: "",
  props: { review: Object },
  methods: {},
  created() {},
};
</script>
