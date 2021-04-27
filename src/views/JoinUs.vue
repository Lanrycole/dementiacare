<template>
  <div id="container">
    <div class="hiring">
      <hiring/>
    </div>
<div class="recruitment_solution">
  <recruitment :dropdown_header="recruitment_header" :dropdown_text="recruitment_text"/>
</div>
<div class="staffing">
  <staffing/>
</div>
    <div class="resume_section" id="joinus">
      <iframe src="https://www.cognitoforms.com/f/XgneZ0-g00OXljwZXvzjrA?id=2" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="817" width="100%">

      </iframe>
    </div>

  </div>

</template>

<script>
import hiring from '@/components/Hiring'
import staffing from '@/components/Staffing'
import recruitment from '@/components/Dropdown'


export default {
  name: "JoinUs",

  components: {
    hiring,
    staffing,
    recruitment
  },

  data() {

    return {
      recruitment_header :"Our Recruitment Solutions",
      recruitment_text: "We have healthcare professionals who are committed and dedicated to their duties with diverse " +
          "experience in Mental health, Intensive Care Units, Emergency departments, Pre- and Post-operatives, Long-Term Care Homes, Public health and Community care.",
      title: "Join Us",
      text: "We are partners with industry leading organizations, providing the best home care services for adults",
      boardImg: require('../assets/Images/staffing2_mini.png')

    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";
@import "./src/assets/Buttons/buttons";
@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');

.hiring{
  margin-top: 13vh;
}
.recruitment_solution{
  margin-top: 5vh;
}
.resume_section {
  margin: 5vh auto;
  text-align: center;
  border-radius: 2rem;
  grid-column-start: 2;
  grid-column-end: 4;
  width: 60%;

  h2 {
    margin: 30px;
  }

  p {
    color: #586070;
    font-weight: bolder;
    padding: 10px;
    width: 60%;
    margin: 0 auto;
    opacity: 0.8;
  }


}



@media (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    margin: 8vh auto !important;

    .resume_section {
      width: 100%;
      margin-top: 2vh;

      h2 {
        font-size: 20px;
        margin: 10px;
      }

      p {
        font-size: 16px;
        width: 80%;


      }


    }
  }

}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    margin: 10vh auto !important;

    .resume_section {
      width: 100%;

      h2 {
        margin: 10px;
      }

      p {
        font-size: 16px;
        width: 100%;

      }


    }
  }

}
</style>