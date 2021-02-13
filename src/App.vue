<template>
  <div id="app">
    <div id="nav">
      <div class="desktop_nav">
        <desktopNav/>
      </div>
      <div class="mobile_nav">
        <mobileNav/>
      </div>

    </div>
    <router-view/>

    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import mobileNav from "@/components/layout/mobileNav"
import desktopNav from "@/components/layout/desktopNav"
import Footer from "@/components/Footer"


export default {

  components: {
    mobileNav,
    desktopNav,
    Footer,
   }

}
</script>

<style lang="scss">
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: $textFont;
}

#app {

  #nav{

    .mobile_nav{
      display:none;
    }

  }

}

@media (max-width: 599px) {
  #app {
    #nav{
      .mobile_nav{
        display:block;
      }
      .desktop_nav{
        display:none;
      }
    }
  }
}

</style>
