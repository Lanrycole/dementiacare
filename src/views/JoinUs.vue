<template>
  <div id="container">
    <div class="hiring">
      <hiring/>
    </div>
<div class="staffing">
  <staffing/>
</div>
    <div class="resume_section" id="joinus">
      <iframe src="https://www.cognitoforms.com/f/XgneZ0-g00OXljwZXvzjrA?id=2" style="position:relative;width:1px;min-width:100%;*width:100%;" frameborder="0" scrolling="yes" seamless="seamless" height="817" width="100%"></iframe>
    </div>

  </div>

</template>

<script>
import hiring from '@/components/hiring_comp'
import staffing from '@/components/staffing_areas'


export default {
  name: "JoinUs",

  components: {
    hiring,
    staffing
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

.hiring{
  margin-top: 13vh;
}

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
        font-size: 18px;
        padding: 10px 10px 10px 10px;
        box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;

        &:hover {
          box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
          border: none;
        }

      }
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

}
</style>