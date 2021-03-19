<template>
  <div id="container">
    <div class="services">
      <services :services_img="service_Img" :services_text="text" :services_header="text_header"/>
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
      service_Img: require('../assets/Images/consultation_mini.png'),
      text_header: "Dementia Consultation",
      text: "Our consultation service is one of the ways we can help a person with a diagnosis of Dementia, their career or loved one, work out what their next steps might be.\n" +
          "<br>The consultation service is a way to find out more about Dementia, it’s symptoms and stages. It helps individuals and their family reduce the stress and anxiety " +
          "that is associated with the diagnosis of dementia. It is also a free service, setting up an appointment is as" +
          " simple as giving us a <strong><em>  <a href='tel:6479092011'> call</a></em></strong> or booking an appointment through our website <br>" +
          "Our professional team will hold your hands throughout your journey, offer support to you and your family and provide you with a personalized care plan that " +
          "reflects your wishes, the things and people that are mostly important to you. " +
          "We will also help by connecting you with many other services that may be suitable for you and your family.\n" +
          "\n"
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