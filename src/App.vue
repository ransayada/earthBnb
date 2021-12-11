<template>
  <div id="app">
    <main class="main-layout">
    <appHeader v-if="!isLoading" ></appHeader>
    <router-view :key="$route.fullPath"/>
    <app-footer></app-footer>
    </main>
  </div>
</template>

// <style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

<script>
// @ is an alias to /src
import appHeader from '@/cmps/app-header.vue'
import appFooter from '@/cmps/app-footer.vue'
import { eventBusService } from "./services/event-bus.service.js";

export default {
  name: 'app',
  data() {
    return {
      isLoading: true
    }
  },
  mounted(){
    eventBusService.$on('setIsLoading',this.setIsLoading)
  },
  methods:{
    setIsLoading(){
      console.log('hello');
      this.isLoading = !this.isLoading;
    }
  },

  components: {
    appHeader,
    appFooter
  }
}
</script>