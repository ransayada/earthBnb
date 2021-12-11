<template>
  <div class="booking-table">
    <table class="booking-info" style="width: 100%">
      <tr>
        <th>Guest Name</th>
        <th>Guests</th>
        <th>Check In</th>
        <th>Check Out</th>
        <th>Actions</th>
      </tr>
      <tr v-for="order in orders" :key="order._id">
        <td>
          <div class="guest-user">
            <img :src="order.img" />{{ order.fullName }}
          </div>
        </td>
        <td>{{ order.guestsNum }}</td>
        <td>{{ order.checkInDate }}</td>
        <td>{{ order.checkOutDate }}</td>
        <td class="contact">
          <!-- <i class="far fa-envelope flex"></i><i class="fas fa-phone flex"></i> -->
          <span v-if="order.status==='pending'">
          <span class="clG" @click="chooseStatus(order,'Accept')" >Accept</span> / <span class="clR" @click="chooseStatus(order,'Reject')">Reject</span>
          </span>
          <span v-else :class="{clG: order.status==='Accepted', clR: order.status === 'Rejected'}"> {{order.status}} </span>
     </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          _id: 1,
          fullName: "Ran Sayada",
          img: "https://randomuser.me/api/portraits/men/81.jpg",
          guestsNum: 3,
          checkInDate: "07/01/2022",
          checkOutDate: "11/01/2022",
          status: 'pending'
        },
        {
          _id: 2,
          fullName: "Dom Daryl",
          img: "https://randomuser.me/api/portraits/men/98.jpg",
          guestsNum: 1,
          checkInDate: "4/04/2022",
          checkOutDate: "9/04/2022",
          status:'pending'
        },
        {
          _id: 3,
          fullName: "Timy Tarik",
          img: "https://randomuser.me/api/portraits/men/60.jpg",
          guestsNum: 2,
          checkInDate: "15/05/2022",
          checkOutDate: "17/05/2022",
          status:'pending'
        },
        {
          _id: 4,
          fullName: "Beer Bon",
          img: "https://randomuser.me/api/portraits/men/83.jpg",
          guestsNum: 5,
          checkInDate: "16/06/2022",
          checkOutDate: "21/06/2022",
          status:'pending'
        },
        {
          _id: 5,
          fullName: "Dian Dop",
          img: "https://randomuser.me/api/portraits/men/84.jpg",
          guestsNum: 6,
          checkInDate: "27/06/2022",
          checkOutDate: "29/06/2022",
          status:'pending'
        },
        {
          _id: 6,
          fullName: "Baker Sadr",
          img: "https://randomuser.me/api/portraits/men/17.jpg",
          guestsNum: 4,
          checkInDate: "01/07/2022",
          checkOutDate: "10/07/2022",
          status:'pending'
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods:{
    chooseStatus(order,newStatus){
      if(newStatus === 'Accept'){
        order.status = 'Accepted'
        if(order.fullName === "Ran Sayada"){
            let orderToUpdate = this.$store.getters.ordersToShow.find(currOrder => currOrder.buyer.fullname === order.fullName)
           orderToUpdate.status = 'Accepted'
           this.$store.dispatch('updateOrder',{order:orderToUpdate})
        }

      }
      else{
        order.status = 'Rejected'
          if(order.fullName === "Ran Sayada"){
            let orderToUpdate = this.$store.getters.ordersToShow.find(currOrder => currOrder.buyer.fullname === order.fullName)
           orderToUpdate.status = 'Rejected'
           this.$store.dispatch('updateOrder',{order:orderToUpdate})
        }
      }
    }
  }
};
</script>

<style>
.guest-user {
  justify-content: center;
}

.clG{
  color: green;
  cursor: pointer;
}

.clR{
  color: red;
  cursor: pointer;
}
</style>
