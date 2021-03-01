<template>
  <div id="container">

    <landing :text="text" :title="title" :board-image="boardImg"/>

    <div class="resume_section">
      <h2>Fill the form below and upload resume</h2>

      <form>
        <div class="input_fields">
          <div class="firstname"><label for="fname">First Name</label><br><input type="text" id="fname" name="fname">
          </div>
          <div class="lastName"><label for="lname">Last Name</label><br><input type="text" id="lname" name="lname"
                                                                               value=""></div>
          <div class="phone"><label for="num">Phone Number</label><br><input type="text" id="num" name="phone"></div>
          <div class="email"><label for="email">Email</label><br><input type="text" id="email" name="email"></div>
          <div class="city"><label for="city">City</label><br><input type="text" id="city" name="city"></div>
          <div class="availability"><label for="availability">Availability</label><br><input type="text"
                                                                                             id="availability"
                                                                                             name="availability"></div>
          <div class="startDate"><label for="startDate">Start Date</label><br><input type="date" id="startDate"
                                                                                     name="startDate"></div>
          <div class="resume">
            <label for="resume">Upload Resume</label><br><br>
            <input type="file" id="resume" name="filename">
          </div>

        </div>
        <br>

        <div class="message">
          <label for="message">Additional information </label><br><textarea name="text" id="message" cols="100"
                                                                            rows="10"></textarea>
        </div>

        <br>
        <br>
        <Button type="button" class="btn1">Send Application</Button>
      </form>
      <p>You can also forward your resume to admin@demential.com</p>
    </div>
    <div class="staffing">
      <h2>Staffing Areas</h2>
      <p class="staffing_p"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias, ut?
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
    color: #586070;
    font-weight: bolder;
    padding: 10px;
    width: 60%;
    margin: 0 auto;
    opacity: 0.8;
  }

  form {
    margin: 5vh auto;

    padding: 2px;
    text-align: center;

    .input_fields {
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 0 auto;
      text-align: center !important;

      div {
        text-align: start !important;

        label {
          text-align: start;
          font-weight: bolder;
          opacity: 0.6;
        }
      }


      input[type="text"] {
        //transform: scale(0.8);
        position: relative;
        padding: 10px 10px 10px 10px;
        width: 80%;
        font-weight: 100;
        letter-spacing: 2px;
        transition: width 0.8s ease;
        outline: none;
        background: none;
        //border: 1px solid #586070;
        border: none;
        font-size: 18px;
        display: inline-block;
        margin-top: 10px;
        margin-bottom: 10px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

        &:hover {
          box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
          border: none;
        }
      }


      input[type="date"] {
        position: relative;
        padding: 10px 10px 10px 10px;
        width: 80%;
        font-weight: 100;
        letter-spacing: 2px;
        transition: width 0.8s ease;
        outline: none;
        background: none;
        //border: 1px solid #586070;
        border: none;
        font-size: 18px;
        display: inline-block;
        margin-top: 10px;
        margin-bottom: 10px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

        &:hover {
          box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
          border: none;
        }

      }

      input[type="file"] {
        width: 300px;
        border: none;
        outline: none;
        cursor: pointer;
      }

    }

    .btn1 {
      text-align: center;
      @include homeButton;
      border: 1px solid $textColor;
      margin: 10px auto;
      width: 200px;
      box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
    }

    .message {
      margin: 0 auto;
      text-align: start;

      label {
        text-align: start;
        font-weight: bolder;
        opacity: 0.6;
      }

      textarea {
        width: 90%;
        resize: none;
        border: none;
        outline: none;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

        &:hover {
          box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
          border: none;
        }

      }
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

      form {
        margin: 2vh auto;
        text-align: center;
        padding: 10px;

        .input_fields {
          display: grid;
          grid-template-columns: 1fr;

          input[type="text"] {
            padding: 10px 10px 10px 10px;
            width: 100%;
          }

          input[type="file"] {
            padding: 10px 10px 10px 10px;
            width: 100%;
          }

          input[type="date"] {
            padding: 10px 10px 10px 10px;
            width: 100%;
          }
        }

        textarea {
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

      form {
        margin: 2vh auto;
        text-align: center;
        padding: 30px;

        .input_fields {
          display: grid;

          input[type="text"] {
            padding: 10px 10px 10px 10px;
            width: 90%;
          }

          input[type="file"] {
            padding: 10px 10px 10px 10px;
            width: 100%;
          }

          input[type="date"] {
            padding: 10px 10px 10px 10px;
            width: 100%;
          }
        }

        textarea {
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

    .staffing_p {
      width: 60%;
      margin: 0 auto;
      padding: 20px;
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
</style>