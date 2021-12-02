<template>
     <section class="filter-container">
        <form class="min-filter">
          <input type="text" placeholder="Search a place to stay" v-model="filterBy.city">
          <button @click="setFilter"><a href="#/explore"><i class="fas fa-search" ></i> </a></button>
          </form>
    </section>
</template>

<script>
export default {
  name: 'stayFilter',
  data() {
    return {
      filterBy:{
        city: '',
        price: '',
        rating: '',
        type: ''
      }
    }
  },
  methods:{
    setFilter() {
      this.$emit('filtered', ...this.filterBy);
    }
  }
  
}
</script>