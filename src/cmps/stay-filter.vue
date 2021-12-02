<template>
     <section class="filter-container">
        <form class="min-filter">
          <input type="text" placeholder="Search a place to stay" v-model="filterBy.loc.country">
          <button @click="setFilter"><i class="fas fa-search" ></i></button>
          </form>
    </section>
</template>

<script>
export default {
  name: 'stayFilter',
  data() {
    return {
      filterBy:{
        loc: {
          country: '',
          city: '',
        },
        price: '',
        rating: '',
        type: ''
      }
    }
  },
  
  methods:{
    setFilter() {
      const cpFilter = JSON.parse(JSON.stringify(this.filterBy));
      console.log(cpFilter);
      this.$emit('filtered', cpFilter);
    }
  }
}

</script>
    // setFilter(){
    //   const cpFilter = JSON.parse(JSON.stringify(this.filterBy.loc.country));
    //   this.$store.stay.commit({type: setFilterBy, filter: cpFilter})}
    // }