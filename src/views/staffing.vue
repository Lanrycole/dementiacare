<template>
  <div id="container">
    <div class="services">
      <services :services_img="service_Img" :services_header="text_header" :services_text="text"/>
    </div>


    <div class="health">
      <HealthResources/>
    </div>
  </div>

</template>

<script>

 import services from '@/components/FullServices'
import HealthResources from '@/components/HealthResources'


export default {
  name: "Services",
  components: {

     services,
    HealthResources
  },
  data() {
    return {
      service_Img: require('../assets/Images/consultation2-mini.png'),
      text_header: "Staffing and Recruitment",
      text: " Are you an organization looking for quality care for your facilities? Or an individual looking for quality care at home? W provide you with compassionate nursing candidates across Canada, we have a large database of experienced health care professionals and freshers." +
          " <br>We will support your long-term care homes, hospital and residential homes with reliable, punctual, and professional staff that will promote the quality of life of your residents. \n" +
          "All our staff undergo a thorough screening process that includes vulnerable sector checks, and we provide adequate education to our staff to ensure our clients safety as well as protecting the public.\n" +
          "<br><span style='border-bottom: 1px solid red;'><strong>If you are an organization answer these questions:</strong></span><br>" +
          "» Are you having challenges with staffing your facility? <br>" +
          "» Are your staff getting their vacations? <br> " +
          "» Do you want to decrease the burden on your staff and improve the quality of care delivered?<br>" +
          "Call us today at <strong><em>  <a href='tel:6479092011'> 1(833) 564- 6332 EXT 0</a>  </em></strong> and we can provide your facility with competent staff <br>" +
          "We have Nursing aides, Personal Support Worker, Registered Practical Nurse and Registered Nurse that can provide support to your team. \n"
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