<template>
 <div class="booking-table">
                    <table class="booking-info" style="width:100%">
                      <tr>
                        <th>Stay Name:</th>
                        <th>Location:</th>
                        <th>Price:</th>
                        <th>Type:</th>
                        <th>Availability</th>
                      </tr>
                      <tr
                        v-for="stay in stays"
                        :key="stay._id"
                      >
                        <td><div class="guest-user"><img :src="stay.imgUrls[0]">{{stay.fullName}}</div></td>
                        <td>{{ stay.loc.city }}</td>
                        <td>${{ stay.price}}</td>
                        <td>{{ stay.propertyType}}</td>
                        <td>Availabil</td>
                      </tr>
                    </table>
                  </div>
  
</template>

<script>

export default {
  data() {
    return {
      stays: []
        }
    },
    created() {
      this.stays =  this.$store.getters.staysToShow.slice(4,11);
      this.stays[0].fullName = 'laa casa NY'
      this.stays[1].fullName = 'mi home NY'
      this.stays[2].fullName = 'ele stay NY'
      this.stays[3].fullName = 'laa casa NY'
      this.stays[4].fullName = 'ele darr LO'
      this.stays[5].fullName = 'my bayt TA'
      this.stays[6].fullName = 'la casa TA'
    },
    computed:{
       
    }
}
</script>

<style>
.guest-user{
    justify-content: center;
}
</style>
