<template>
  <div id="home">
    <div class="welcome">
      <div class="landing">
        <VueSlickCarousel :arrows="false" :dots="false" v-bind="settings">
          <div class="landing_info">
            <div class="landing_text">
              <p class="msg">
                Lorem Ipsum
              </p>
              <h1>Dementia Adult Care</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, voluptatum?
              </p>
              <div class="landing_text_button">
                <Button type="button" class="btn1">
                  <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#contact'">Contact
                  </router-link>
                </Button>
                <Button type="button" class="btn2">
                  <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#book'">Booking

                  </router-link>

                </Button>
              </div>

            </div>
            <div class="landing_img">
              <img src="../assets/Images/diversified.jpeg" alt="diversified_images">
            </div>
          </div>
          <div class="landing_info">
            <div class="landing_text">
              <p class="msg">
                Lorem Ipsum
              </p>
              <h1>Home Service</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, voluptatum?
              </p>
              <div class="landing_text_button">
                <Button type="button" class="btn1">
                  <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#contact'">Contact
                  </router-link>
                </Button>
                <Button type="button" class="btn2">
                  <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#book'">Booking

                  </router-link>

                </Button>
              </div>

            </div>
            <div class="landing_img">
              <img src="../assets/Images/homeservice.jpg" alt="">
            </div>
          </div>
          <div class="landing_info">
            <div class="landing_text">
              <p class="msg">
                Lorem Ipsum
              </p>
              <h1>Staffing</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, voluptatum?
              </p>
              <div class="landing_text_button">
                <Button type="button" class="btn1">
                  <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#contact'">Contact
                  </router-link>
                </Button>
                <Button type="button" class="btn2">
                  <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#book'">Booking

                  </router-link>

                </Button>
              </div>

            </div>
            <div class="landing_img">
              <img src="../assets/Images/staffing2.jpg" alt="">
            </div>
          </div>
        </VueSlickCarousel>

      </div>
    </div>

    <div class="our_services">
      <Services/>
    </div>

    <div class="welcome_card">
      <welcome-card/>
    </div>
    <div class="hiring">
      <hiring/>
    </div>
    <div class="staffing">
      <staffing_cat/>
    </div>

    <div class="review">
      <review/>
    </div>

    <div class="health">
      <HealthResources/>
    </div>

  </div>
</template>


<script>

import Services from '@/components/services_short_comp'
import welcomeCard from '@/components/our_history_comp'
import Hiring from '@/components/hiring_comp'
import staffing_cat from '@/components/staffing_areas'

import Review from '@/components/reviews_comp'
import HealthResources from '@/components/healthresources_comp'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
  name: 'Home',
  components: {
    Services,
    welcomeCard,
    Hiring,
    staffing_cat,
    Review,
    HealthResources,
    VueSlickCarousel
  },
  data() {
    return {
      settings: {
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 2000,
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1

      },
    }
  },
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

#home {
  margin-top: 13vh;

  .welcome {
    position: relative;

    .landing {
      background: black;
      outline: none;

      .landing_info {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        background: black;
        outline: none;

        .landing_text {
          align-items: center;
          margin: 10px;
          outline: none;

          h1 {
            font-size: 60px;
            font-weight: bolder;
            color: $textColor;

          }

          .msg {
            margin-top: 20vh;
            color: $secondaryColor;
            font-weight: bolder;
            font-size: 30px;
            opacity: 1;
          }

          p {
            opacity: 0.8;
            color: $textColor;
            font-size: 16px;
          }

          .landing_text_button {
            margin: 2vh auto;
            text-align: start;
            justify-content: space-around;

            .btn1 {
              @include homeButton;
              margin: 20px;
              background: $highlight;

              a {
                color: $textColor;
              }
            }

            .btn2 {
              @include homeButton;
              margin: 20px;

              a {
                color: $textColor;
              }

              &:hover {
                color: $headerColor;
              }
            }
          }
        }

        .landing_img {
          img {
            width: 1200px;
          }
        }
      }


    }

  }

  .our_services {
    margin: 10vh auto 10vh;
  }

  .our_team {
    h3 {
      text-align: start;
      font-weight: bolder;
      font-size: 60px;
      font-family: $headerFont;
      padding: 20px;
      opacity: 0.4;
    }

    hr {
      width: 50%;
    }
  }


}

@media (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  #home {
    margin-top: 0;

    .welcome {
      .landing {
        margin-top: 4vh;

        .landing_info {
          grid-template-columns: 1fr;
          grid-template-areas:
          "a a a"
          "a a a";

          .landing_text {

            h1 {
              font-size: 25px;
            }

            .msg {
              margin-top: 2vh;
              font-size: 16px;
            }


            .landing_text_button {
              margin: 2vh auto;
              text-align: start;

              justify-content: space-around;

              .btn1 {
                @include homeButton;
                margin: 5px auto;
                width: 100%;
                background: $highlight;
              }

              .btn2 {
                @include homeButton;

                width: 100%;
                margin: 5px auto;

                &:hover {
                  color: $headerColor;
                }
              }
            }
          }

          .landing_img {
            grid-area: a;

            img {
              max-width: 100%;
            }
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

}

@media (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  #home {
    margin-top: 0;

    .welcome {
      .landing {
        .landing_text {
          padding: 5px;
          margin: 0 auto;
          text-align: center;

          h1 {
            font-size: 50px;
            font-weight: bolder;
            margin-top: 10px;
          }

          .msg {
            color: $secondaryColor;
            font-weight: bolder;
            font-size: 20px;
            opacity: 1;
            margin-top: 25vh;
          }

          .landing_text_button {
            width: 100%;

            .btn1, .btn2 {
              width: 40%;
              margin: 10px auto 0 20px;

            }
          }
        }
      }
    }
  }
}

@media (min-width: 411px) and (max-width: 823px) and (-webkit-min-device-pixel-ratio: 2) {
  #home {
    margin-top: 0;

    .welcome {
      .landing {
        margin-top: 2vh !important;

        .landing_info {
          grid-template-columns: 1fr;
          grid-template-areas:
          "a a a"
          "a a a";

          .landing_text {
            width: 90% !important;
            margin: 0 auto;
            text-align: center;

            h1 {
              font-size: 35px;
            }

            .msg {
              margin-top: 2vh;
              font-size: 16px;
            }


            .landing_text_button {

              margin: 2vh auto;
              text-align: center !important;
              width: 100% !important;
              justify-content: space-around;

              .btn1 {
                @include homeButton;
                margin: 5px auto;
                width: 100%;
                background: $highlight;

              }

              .btn2 {
                @include homeButton;
                width: 100%;
                margin: 5px auto;

                &:hover {
                  color: $headerColor;
                }
              }
            }
          }

          .landing_img {
            grid-area: a;

            img {
              max-width: 100%;
            }
          }
        }
      }
    }


  }
}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #home {
    margin-top: 0;

    .welcome {
      .landing {
        margin-top: 10vh !important;

        .landing_info {
          grid-template-columns: 1fr;
          grid-template-areas:
          "a a a"
          "a a a";

          .landing_text {
            text-align: center;
            margin: 0 auto;

            h1 {
              font-size: 45px;
            }

            .msg {
              margin-top: 2vh;
              font-size: 16px;
            }


            .landing_text_button {
              margin: 2vh auto;
              text-align: center;
              width: 100% !important;
              justify-content: space-around;

              .btn1 {
                @include homeButton;
                margin: 5px auto;
                width: 40%;
                background: $highlight;
              }

              .btn2 {
                @include homeButton;
                margin: 5px auto;
                width: 40%;

                &:hover {
                  color: $headerColor;
                }
              }
            }
          }

          .landing_img {
            grid-area: a;

            img {
              max-width: 100%;
            }
          }
        }
      }
    }


  }
}
</style>
