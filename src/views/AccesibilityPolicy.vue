<template>
  <div id="container">
    <policiesCard :info_title="info_title" :info_text="info_text"/>

  </div>
</template>

<script>
import policiesCard from '@/components/Policies'

export default {
name: "AccessibilityPolicy",
  components: {
    policiesCard,
  },
  data() {
    return {
      info_title:"Diversified Dementia Care Accessibility Statement\n",
      info_text:"At   Diversified Dementia Care, our utmost commitment is to make our services and\n" +
          "website accessible to anyone requesting our services. \tW e care about our clients and are\n" +
          "here to make life easier for them, their loved ones, our staff and independent contractors. \n" +
          "We know that dementia affects an individual’s perception, orientation and cognition. Our\n" +
          "goal at  Diversified Dementia Care\t is to make our services accessible to meet your needs\n" +
          "by working with you and your family to create a dementia-friendly environment and\n" +
          "personalize\t service that will make you feel better.\n" +
          "We are continually researching ways we can continue to provide accessible services to\n" +
          "meet your needs.\n" +
          "  <strong><p>Please contact us:\n</p></strong>\n" +
          "Please contact us through any means convenient for you if you need any assistance or\n" +
          "accommodation in accessing our services or website, we will do all in our capacity to\n" +
          "render the help you need. \n" +
          " <br>" +
          "<br> <p> <strong>Diversified Dementia Care</strong></p> " +
          "  <p>2230 Blackwater Road</p> " +
          "  <p>London, Ontario N5X0M5</p> " +
          "  <p>Email: Diversified.Dementia@gmail.com</p> "+
          "  <p>Phone Number:  (647) 909-2011</p> "
    }

    }
}
</script>
<style scoped>

</style>