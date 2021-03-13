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
<!--Todo: Add SEO-->


    <div class="footer">
      <Footer/>
    </div>
  </div>
</template>

<script>
import mobileNav from "@/components/layout/mobileNav"
import desktopNav from "@/components/layout/desktopNav"
import Footer from "@/components/footer_comp"


export default {

  components: {
    mobileNav,
    desktopNav,
    Footer,

  },
  metaInfo() {
    return {
      title: "Diversified Dementia Care",
      titleTemplate: '%s | Nursing Staffing, Home Care Services, Dementia Consultation, Staffing Agency in Ontario',
      meta: [
        {charset: 'utf-8'},
        {name: 'description', content: 'gator'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1'},
        {
          vmid: "description",
          name: "description",
          content:
              "Diversified Dementia Care is a Health and staffing Agency in Ontario. " +
              "We recruit health and medical Professionals to provide health services to long-term care homes, " +
              "hospitals, organization and individuals"
        }
      ]

    };
  },

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

  #nav {

    .mobile_nav {
      display: none;
    }

  }

}

@media (max-width: 742px) {
  #app {
    #nav {
      .mobile_nav {
        display: block;
      }

      .desktop_nav {
        display: none;
      }
    }
  }
}

</style>
