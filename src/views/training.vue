<template>
  <div id="container">
    <img src="../assets/Images/training_full.jpeg" alt="Training Image">
    <div class="training">
      <div class="training_img">
        <img src="../assets/Images/training.jpeg" alt="training">
      </div>
      <div class="training_text">
        <div class="training_text_header"><h3>CPI- Nonviolent Crisis intervention</h3></div>

        <div class="training_text_details"> Training is provided to our DDC staff and affiliates only*
          <br>
          CPI training program espouses a philosophy of providing the best possible Care, Welfare, Safety and SecuritySM
          to staff and those in their care during a crisis situation.
          The programme focuses on prevention and verbal de-escalation techniques and offers proven
          strategies for safely managing anxious, disruptive and violent behaviour.
          <br>
          <Button type="button" class="btn2">
            <a href="mailto: Info@ddchealthservices.com">Contact</a>

          </Button>
        </div>
      </div>
    </div>
    <div class="training">
      <div class="training_img">
        <img src="../assets/Images/training_short.jpeg" alt="training">
      </div>
      <div class="training_text">
        <div class="training_text_header"><h3>CPR training</h3></div>

        <div class="training_text_details"> Training is provided to our DDC staff and affiliates only*
          CPI training program espouses a philosophy of providing the best possible Care, Welfare, Safety and SecuritySM
          to staff and those in their care during a crisis situation.
          The programme focuses on prevention and verbal de-escalation techniques and offers proven
          strategies for safely managing anxious, disruptive and violent behaviour.
          <br>
          <Button type="button" class="btn2">
            <a href="mailto: Info@ddchealthservices.com">Contact</a>

          </Button>
        </div>
      </div>
    </div>
    <div class="health">
      <HealthResources/>
    </div>
  </div>

</template>

<script>

import HealthResources from '@/components/HealthResources'


export default {
  name: "Services",
  components: {
    HealthResources
  },
  data() {

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

  img {

    width: 100%;
  }

  .training {
    width: 60%;
    margin: 10VH auto;
    justify-content: center;

    .training_img {


    }

    .training_text {
      margin: 0 auto;
      padding: 20px;

      .training_text_header {
        padding: 20px;
        font-size: 30px;
        font-weight: bold;
        color: $headerColor;
      }

      .training_text_details {
        line-height: 30px;
        padding: 20px;

        .btn2 {
          @include homeButton;
          background: $secondaryColor;
          color: $headerColor;
          padding: 8px;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          transition: 0.5s;
          text-align: center;
          margin-top: 20px;


          a {
            color: $headerColor;
          }


          &:hover {
            background: $highlight;
            color: $headerColor;

            img {
              display: block;

            }

          }

        }


      }
    }

  }

}

@media (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    background: $textColor;

    img {
      margin-top: 40px;
      width: 100%;
    }

    .training {
      width: 100%;
      margin: 5vh auto;
      justify-content: center;


      .training_text {
        margin: 0 auto;
        padding: 10px;

        .training_text_header {
          padding: 10px;

          h3 {
            font-size: 25px;
          }
        }

        .training_text_details {
          line-height: 30px;
          padding: 10px;

          .btn2 {
            @include homeButton;
            background: $secondaryColor;
            color: $headerColor;
            padding: 8px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.5s;
            text-align: center;
            margin-top: 20px;


            a {
              color: $headerColor;
            }


            &:hover {
              background: $highlight;
              color: $headerColor;

              img {
                display: block;

              }

            }

          }


        }
      }

    }

  }


}

@media (min-width: 411px) and (max-width: 823px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    background: $textColor;

    img {
      margin-top: 40px;
      width: 100%;
    }

    .training {
      width: 100%;
      margin: 5vh auto;
      justify-content: center;


      .training_text {
        margin: 0 auto;
        padding: 10px;

        .training_text_header {
          padding: 10px;

          h3 {
            font-size: 25px;
          }
        }

        .training_text_details {
          line-height: 30px;
          padding: 10px;

          .btn2 {
            @include homeButton;
            background: $secondaryColor;
            color: $headerColor;
            padding: 8px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.5s;
            text-align: center;
            margin-top: 20px;


            a {
              color: $headerColor;
            }


            &:hover {
              background: $highlight;
              color: $headerColor;

              img {
                display: block;

              }

            }

          }


        }
      }

    }

  }

}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    background: $textColor;

    img {
      margin-top: 40px;
      width: 100%;
    }

    .training {
      width: 100%;
      margin: 5vh auto;
      justify-content: center;


      .training_text {
        margin: 0 auto;
        padding: 10px;

        .training_text_header {
          padding: 10px;

          h3 {
            font-size: 25px;
          }
        }

        .training_text_details {
          line-height: 30px;
          padding: 10px;

          .btn2 {
            @include homeButton;
            background: $secondaryColor;
            color: $headerColor;
            padding: 8px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.5s;
            text-align: center;
            margin-top: 20px;


            a {
              color: $headerColor;
            }


            &:hover {
              background: $highlight;
              color: $headerColor;

              img {
                display: block;

              }

            }

          }


        }
      }

    }

  }
}
</style>