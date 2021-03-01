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
      text_header: "Consultation",
      text: "          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam laborum molestias ratione totam\n" +
          "          ullam ut. Alias aliquid aperiam architecto consequuntur culpa cumque deserunt dolores dolorum eos esse, est\n" +
          "          expedita fuga ipsam itaque laudantium magni maiores minima, minus molestiae necessitatibus placeat quia\n" +
          "          reiciendis sapiente sit tempore? Culpa fugiat nobis ratione?\n" +
          "          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam laborum molestias ratione totam\n" +
          "          ullam ut. Alias aliquid aperiam architecto consequuntur culpa cumque deserunt dolores dolorum eos esse, est\n" +
          "          expedita fuga ipsam itaque laudantium magni maiores minima, minus molestiae necessitatibus placeat quia\n" +
          "          reiciendis sapiente sit tempore? Culpa fugiat nobis ratione?\n" +
          "          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut laboriosam laborum molestias ratione totam\n" +
          "          ullam ut. Alias aliquid aperiam architecto consequuntur culpa cumque deserunt dolores dolorum eos esse, est\n",

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