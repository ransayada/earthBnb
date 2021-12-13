<template>
  <div class="dashboard-container">
    <div class="dash-nav">
      <button @click="showSect('orders')" class="dash-nav-btn">
        <i class="fas fa-clipboard-list"></i>Orders
      </button>
      <button @click="showSect('stays')" class="dash-nav-btn">
        <i class="fa fa-home" aria-hidden="true"></i>Stays
      </button>
      <button @click="showSect('stats')" class="dash-nav-btn">
        <i class="fas fa-chart-bar"></i>Stats
      </button>
      <button @click="showSect('rates')" class="dash-nav-btn">
        <i class="fas fa-star clB"></i>Rates
      </button>
    </div>

    <div class="dash-info-container">
      <div class="dash-info-header">
        <div class="dash-header-content">
          <h3>Monthly Total Rate</h3>
          <div class="header-sub-content">
            <span> <i class="fas fa-star"></i> 4.2 </span>
            <p>2% <span class="clG">⬆</span></p>
          </div>
        </div>
        <div class="dash-header-content">
          <h3>Monthly earnings</h3>
          <div class="header-sub-content"><p class="bold">$ {{monthEarnings}}</p></div>
        </div>
        <div class="dash-header-content">
          <h3>Monthly Orders</h3>
          <div class="header-sub-content"><span>Current Open:</span><p> {{monthlyOrders}} <i class="fas fa-house-user"></i></p></div>
          
        </div>
      </div>

      <div class="dash-info">
        <order-list @addEarnings="addEarnings" @addOrder="addOrder" v-if="isOrders" />
        <stat-chart v-if="isStats" class="chart" />
        <rates-chart v-if="isRates" class="chart" />
        <my-stays v-if="isStays"/>
      </div>
    </div>
  </div>
</template>


<script>
import orderList from "../cmps/order-list.vue";
import statChart from "../cmps/stats-chart.vue";
import ratesChart from "../cmps/rates-chart.vue";
import myStays from "../cmps/my-stays.vue";

export default {
    data(){
        return {
            isOrders: true,
            isStays:false,
            isStats:false,
            isRates:false,
            earnings:'10,505',
            ordersNum:'6'
        }
    },
  components: {
    orderList,
    statChart,
    ratesChart,
    myStays
  },
  computed:{
    monthEarnings(){
      return this.earnings;
    },
    monthlyOrders(){
      return this.ordersNum;
    }
  },
  methods: {
    addEarnings(){
      this.earnings = '12,121'
    },
    addOrder(){
      this.ordersNum = '5'
    },
    showSect(section) {
      switch (section) {
        case 'orders':
          this.isOrders=true;
          this.isStays=false;
          this.isStats=false;
          this.isRates=false;
          break;
        case 'stays':
          this.isOrders=false;
          this.isStays=true;
          this.isStats=false;
          this.isRates=false;
          break;
         case 'stats':
          this.isOrders=false;
          this.isStays=false;
          this.isStats=true;
          this.isRates=false;
          break;
            case 'rates':
          this.isOrders=false;
          this.isStays=false;
          this.isStats=false;
          this.isRates=true;
          break;
      }
    },
  },
};
</script>


<style>

.chart{
    width: 40%;
    
}

.dashboard-container {
  margin-top: 120px;
  margin-bottom: 251px ;
}

.dash-nav {
  background-color: white;
  position: fixed;
  width: 14.375rem;
  display: block;
}

.dash-nav-btn {
  display: flex;
  align-items: center;
  padding: 10px 5px;
  width: 100%;
  grid-gap: 15px;
  gap: 15px;
  font-family: cereal-regular, sans-serif;
  border-top-right-radius: 100px;
  border-bottom-right-radius: 100px;
  font-size: 20px;
  line-height: 28px;
  border: none;
  background-color: white;
}

.dash-nav-btn:hover {
  cursor: pointer;
  background-color: #f7f7f7;
}

.clB {
  color: black !important;
}

.dash-info-container {
  margin-inline-start: 15rem;
  background-color: #f0ebeb;
  border-radius: 13px;
}

.dash-info-header {
  display: flex;
  padding: 20px;
  justify-content: space-evenly;
}

.header-sub-content {
  display: flex;
  justify-content: space-between;
  min-width: 10.5rem;
  text-align: start;
  font-weight: bold;
}


/* h3 {
  text-align: start;
  font-weight: bold;
} */

.dash-header-content {
  border-radius: 13px;
  background-color: white;
  padding: 20px;
}

.dash-info{
  display: flex;
    justify-content: center;
}

.bold{
  font-weight: bold;
}


</style>