<template>
  <div class="explore">
    <h1>This is an explore page</h1>

       <ul class="stay-list">
      <li v-for="stay in stays" :key="stay._id" class="stay-preview-container">
        {{stay.name}}
      </li>
    </ul>



  </div>
</template>

<script>


export default {

  data(){
    return {
      stays: []
    }
  },
  created(){
    this.stays = this.$store.getters.staysToShow;
  }

}
</script>

