<template>
  <div id="container">
    <div class="services">
      <services :services_header="text_header" :services_text="text" :services_img="service_Img"/>
    </div>
    <div class="health">
      <HealthResources/>
    </div>
  </div>

</template>

<script>

 import services from '@/components/services_full'
import HealthResources from '@/components/healthresources_comp'


export default {
  name: "Services",
  components: {

    services,
    HealthResources
  },
  data() {
    return {
      service_Img: require('../assets/Images/homecare_mini.png'),
      text_header: "Home Care Services",
      text: " Getting help at home does not take away your independence, it rather maximize your independence and allows you to continue living at home safely and independently. \n" +
          " <br> Our care team will depend on the services you chose for your personalized care plan. <br>The team may include:" +
          " <br>  <em>Personal support workers</em>" +
          "<br> <em>Allied health staff and nurses.</em>  <br>" +
          "Your care manager will introduce you to your dedicated team. Your team is flexible and can be changed if they do not meet your needs. " +
          "We aim to keep your care team as consistent as possible to enable you to form relationships and for the team to get to know your routines and preferences.\n" +
          "We will work with you to decide on a start date for your services and continue to work with you as your goals and needs changes as well as adjusting your care plan as required.\n" +
           "We use a special software that allow us to document all the care provided on a daily basis and to ensure continuity of care. Clients and family members  can communicate with both their caregiver and supervisor through the software and also have the opportunity to rate the daily care provided. " +
          "<br><span style='border-bottom: 1px solid red; font-weight: bold'><strong>Our Home care services includes:</strong></span> <br>" +
          "» Companionship <br>" +
          "» Personal care <br>" +
          "» Home support<br>" +
          "» Meal preparation<br>" +
          "» Palliative care<br>" +
          "» House Cleaning and Laundry<br>" +
          "» Hospital Recovery care<br>" +
          "» Nursing (wound care, medication administration, and all other medical support)<br>" +
          "» Live in caregiver"


    }
  }
}
</script>

<style scoped lang="scss">

@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";
@import "./src/assets/Buttons/buttons";
@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#container {
  background: $textColor;


}

</style>