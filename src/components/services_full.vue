<template>
  <div id="container">
    <div class="services_sec">
      <div class="services_info">
        <div class="services_img">
          <img :src="services_img" alt="">
        </div>
        <div class="services_text">
          <h2>{{ services_header }}</h2>
          <p v-html="services_text">
            {{ services_text }}
          </p>
          <div class="services_text_button">
            <Button type="button" class="btn1">
              <router-link :to="{name: 'Contact'}" class="router-link" exact>Contact</router-link>
            </Button>
            <Button type="button" class="btn2">
              <router-link :to="{name: 'Joinus'}" class="join_us" exact>Join Us</router-link>
            </Button>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "serviceList",
  props: {
    services_img: {

      require: true,
    },
    services_text: {
      require: true,
      type: String,
    },
    services_header: {
      require: true,
      type: String,
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

.services_sec {
  width: 90%;
  background: white;
  margin: 10vh auto;
  .services_img {
    img {
      max-width: 100%;
    }
  }

  .services_text {
    margin: 0 auto;
    background: $textColor;
    width: 70%;
    line-height: 50px;
    padding: 40px !important;
    border-radius: 2rem;
    box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
    text-align:start !important;
    h2 {
      font-size: 40px;
      border-bottom: 2px solid $secondaryColor;

      &::selection {
        background: $secondaryColor;
      }

    }

    p {
      margin-top: 2vh;

    }

    .services_text_button {
      text-align: end;
      margin-top: 3vh;

      .btn1 {
        @include homeButton;

        margin: 10px;
        box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);

        a {
          color: $textColor;
        }
      }

      .btn2 {
        @include homeButton;
        background: $highlight;
        margin: 10px;
        box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);

        a {
          color: $textColor;
        }

        &:hover {
          color: $headerColor;
        }
      }
    }

    p {
      &::selection {
        background: $secondaryColor !important;
      }
    }
  }
}

@media (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .services_sec {
      width: 95%;
      height: unset;
      margin: 9vh auto;

      .services_img {
        img {
          display: none;
        }
      }

      .services_text {
        padding: 10px;
        width: 100%;
        position: unset;
        text-align: center;

        h2 {
          font-size: 30px;
        }

        .services_text_button {
          text-align: center;

          .btn1, .btn2 {
            text-align: center;
            width: 60%;
            margin: 5px auto;
          }
        }
      }
    }


  }
}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .services_sec {
      width: 95%;
      height: unset;
      margin: 10vh auto;

      .services_text {
        padding: 10px;
        width: 100%;
        position: unset;
        text-align: center;

        h2 {
          font-size: 30px;
        }

        .services_text_button {
          text-align: center;

          .btn1, .btn2 {
            text-align: center;
            width: 40%;
            margin: 10px;
          }
        }
      }
    }


  }
}

@media (min-width: 411px) and (max-width: 823px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .services_sec {
      width: 100%;
      height: unset;
      margin: 12vh auto;

      .services_text {
        padding: 20px !important;
        width: 100%;
        position: unset;
        text-align: center;
        line-height: 40px !important;

        h2 {
          font-size: 30px;
          margin: 20px;
        }

        p {
          font-size: 16px !important;
        }

        .services_text_button {
          text-align: center;

          .btn1, .btn2 {
            text-align: center;
            width: 40%;
            margin: 10px;
          }
        }
      }
    }


  }
}

@media (min-width: 1024px) and (max-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .services_sec {
      width: 95%;
      height: unset;
      margin: 7vh auto !important;

      .services_text {
        width: 100%;
        position: unset;
        line-height: 60px;
        text-align: center;
        font-size: 25px;

        h2 {
          font-size: 50px;
          margin-bottom: 2vh;
        }

        .services_text_button {
          text-align: center;

          .btn1, .btn2 {
            text-align: center;
            width: 40%;
            margin: 10px;
          }
        }
      }
    }
  }
}
</style>