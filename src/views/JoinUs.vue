<template>
  <div id="container">

    <landing :text="text" :title="title" :board-image="boardImg"/>

    <div class="resume_section">
      <h2>Fill the form below and upload resume</h2>
      <p>You can also forward your resume to admin@demential.com</p>
      <form>
        <input type="text" id="fname" name="fname" value="" placeholder="First Name">
        <input type="text" id="lname" name="lname" value="" placeholder="Last Name">
        <input type="text" id="num" name="phone" value="" placeholder="Phone">
        <input type="text" id="email" name="email" value="" placeholder="Email">
        <input type="text" id="city" name="city" value="" placeholder="City">
        <input type="text" id="profession" name="add" value="" placeholder="Profession">
        <input type="text" id="availability" name="availability" value="" placeholder="Availability">
        <input type="text" id="startDate" name="startDate" value="" placeholder="Start Date">
        <input type="text" id="oncall" name="oncall" value="" placeholder="Available on Call?">
        <input type="file" id="myFile" name="filename">
        <br>

        <br>
        <br>
        <Button type="button" class="btn1">Send Application</Button>
      </form>
    </div>
    <div class="staffing">
      <h2>Staffing Areas</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ut?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ut?
      </p>
      <div class="staffing_info">
        <div class="staffing_details">
          <img src="../assets/Images/doctors.svg" alt="">
          <p>Health Practitioner</p>
        </div>
        <div class="staffing_details">
          <img src="../assets/Images/nurses.svg" alt="">
          <p>Registered Nurse</p>
        </div>
        <div class="staffing_details">
          <img src="../assets/Images/nurse_prac.svg" alt="">
          <p>Nurse Practitioner</p>
        </div>
        <div class="staffing_details">
          <img src="../assets/Images/health_worker.svg" alt="">
          <p>PSW</p>
        </div>
        <div class="staffing_details">
          <img src="../assets/Images/home_care.svg" alt="">
          <p>Home Care </p>
        </div>

      </div>

    </div>
  </div>

</template>

<script>
import landing from '@/components/landing_section'


export default {
  name: "JoinUs",

  components: {
    landing,
  },

  data() {
    return {
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


.resume_section {
  margin: 10vh auto;
  text-align: center;
  border-radius: 2rem;
  grid-column-start: 2;
  grid-column-end: 4;
  width: 60%;

  h2 {
    margin: 30px;
  }

  p {

    border-radius: 2rem;
    padding: 10px;
    width: 60%;
    margin: 0 auto;
  }

  form {
    margin: 5vh auto;
    text-align: center;
    padding: 2px;

    input[type="text"], textarea {
      transform: scale(0.8);
      position: relative;
      padding: 18px 20px 20px 18px;
      width: 50%;
      font-weight: 100;
      letter-spacing: 2px;
      transition: width 0.8s ease;
      outline: none;
      background: none;
      border: 1px solid #586070;
      font-size: 18px;
      display: inline-block;

      &:hover {
        box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
        border: none;
      }
    }

    input[type="file"], textarea {
      transform: scale(0.8);
      position: relative;
      padding: 18px 20px 20px 18px;
      width: 50%;
      font-weight: 100;
      letter-spacing: 2px;
      transition: width 0.8s ease;
      outline: none;
      background: none;
      border: 1px solid #586070;
      font-size: 18px;
      display: inline-block;

    }

    textarea {
      width: 100%;
      resize: none;
    }

    .btn1 {

      @include homeButton;
      border: 1px solid $textColor;
      margin: 10px;
      width: 200px;
      box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
    }
  }
}
.staffing {
  padding: 40px;
  text-align: center;
  background: $textColor;

  h2 {
    text-align: center;
    font-size: 50px;
    padding: 40px;
    opacity: 0.9;
    color: $headerColor;
  }

  .staffing_info {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    padding: 40px;
  }

  .staffing_details {
    margin: 0 auto;

    img {
      width: 200px;

      &:hover {

        cursor: pointer;
      }
    }

    p {
      text-align: center;
    }
  }
}

@media (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    margin: 12vh auto !important;
    .resume_section {
      width: 100%;

      h2 {
        font-size: 18px ;
        margin: 10px;
      }

      p {
         font-size:12px;
        width: 100%;

      }
      form {
        margin: 5vh auto;
        text-align: center;
        padding: 2px;
        input[type="text"], textarea {
          padding: 10px 10px 10px 10px;
          width: 100%;
        }
        input[type="file"], textarea {
          padding: 10px 10px 10px 10px;
          width: 100%;
        }

      }
    }
  }
  .staffing {
    padding: 10px;

    h2 {
      text-align: center;
      font-size: 30px;
      padding: 10px;
    }

    .staffing_info {
      grid-template-columns: 1fr 1fr;
      padding: 10px;

    }

    .staffing_details {
      margin: 0 auto;

      img {
        width: 60px;
      }
    }
  }
}
@media (min-width: 768px) and  (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    margin: 10vh auto !important;
    .resume_section {
      width: 100%;
      h2 {

        margin: 10px;
      }

      p {
         font-size:16px;
        width: 100%;

      }
      form {
        margin: 2vh auto;
        text-align: center;
        padding: 2px;
        input[type="text"], textarea {
          padding: 10px 10px 10px 10px;
          width: 50%;
        }
        input[type="file"], textarea {
          padding: 10px 10px 10px 10px;
          width: 50%;
        }

      }
    }
  }

}
</style>