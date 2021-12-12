<template>
  <div class="main-footer main-layout flex-centered grid">
    <div class="footer-container f-as-jsb">
      <div class="footer-rights flex">
        <p>© 2021 EarthBnb, Inc.</p>
        <span>· </span>
        <router-link to="/uc"> Login</router-link>
        <span>· </span>
        <router-link to="/uc"> About</router-link>
        <span>· </span>
        <router-link to="/uc"> Become a host</router-link>
      </div>
      <div class="flex">
      <div class="footer-lang flex">
          <div class="globe">
        <i class="fas fa-globe"></i>
          </div>
       <span>English (US)</span>  <span class="footer-money flex">USD $</span>
      </div>
      <div class="social flex">
        <div class="facebook flex">
          <i class="fab fa-facebook-f"></i>
        </div>
        <div class="instagram flex">
          <i class="fab fa-instagram"></i>
        </div>
        <div class="twitter flex">
          <i class="fab fa-twitter"></i>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'appFooter',
  date () {
    return {

    }
  },
  
}
</script>