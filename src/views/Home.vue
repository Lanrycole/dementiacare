<template>
  <div id="home">
    <div class="welcome">
      <div class="landing">
        <VueSlickCarousel :arrows="false" :dots="false" v-bind="settings">
          <div class="landing_info">
            <div class="landing_text">
              <img src="./../assets/Images/newlogo.png" alt="logo"  v-if="scrollPosition<300">
              <p class="msg">
                Professional Health care workers
              </p>
              <h1>Staffing & Recruitment</h1>
              <p>
                We hire Compassionate and Professional health care workers across Canada</p>
              <div class="landing_text_button">
                <Button type="button" class="btn1">
                  <router-link :to="{name: 'contact'}" class="router-link" exact v-scroll-to="'#contact'">Contact
                  </router-link>
                </Button>
                <Button type="button" class="btn2">
                  <router-link :to="{name: 'contact'}" class="router-link" exact v-scroll-to="'#book'">Booking

                  </router-link>

                </Button>
              </div>

            </div>
            <div class="landing_img">
              <img src="../assets/Images/staffing2.jpg" alt="">
            </div>
          </div>
          <div class="landing_info">

            <div class="landing_text">
              <img src="./../assets/Images/newlogo.png" alt="logo"  v-if="scrollPosition<300">
              <p class="msg">
                Exceptional
              </p>
              <h1>Home Care Services</h1>
              <p>
                We provide professional health care services at the comfort of your home
              </p>
              <div class="landing_text_button">
                <Button type="button" class="btn1">
                  <router-link :to="{name: 'contact'}" class="router-link" exact v-scroll-to="'#contact'">Contact
                  </router-link>
                </Button>
                <Button type="button" class="btn2">
                  <router-link :to="{name: 'contact'}" class="router-link" exact v-scroll-to="'#book'">Booking

                  </router-link>

                </Button>
              </div>

            </div>
            <div class="landing_img">
              <img src="../assets/Images/homeserve.jpeg" alt="homeservices">
            </div>
          </div>

        </VueSlickCarousel>
      </div>
    </div>
    <div class="intro">

        <div class="intro_title">
          <h3>DDC Health Services</h3>
          </div>
      <div class="intro_text">
        <p>
          DDC is a temporary staffing agency specializing in the provision of health care professionals to Long-Term Care homes, in-home, community health care and support services to children, youth with behavioural challenges, seniors, and people with challenging abilities (developmental, mental, physical and dementia). Our services are aimed at providing freedom of choice, respect and promoting social inclusion for people with different abilities.
        </p>
      </div>
      </div>

    <div class="review">
      <review/>
    </div>
    <div class="our_services">
      <Services/>
    </div>

    <dropdown :dropdown_header="dropdown_title" :dropdown_text="dropdown_text" :icon="icon"/>
    <div class="welcome_card">
      <welcome-card/>
    </div>
    <div class="hiring">
      <hiring/>
    </div>
    <div class="staffing">
      <staffing_cat/>
    </div>

    <div class="partners">
      <img src="../assets/Images/insignaLogo.jpg" alt="logo">

    </div>
    <div class="health">
      <HealthResources/>
    </div>
  </div>
</template>
<script>

import Services from '@/components/ShortServices'
import welcomeCard from '@/components/OurHistory'
import Hiring from '@/components/Hiring'
import staffing_cat from '@/components/Staffing'
import Review from '@/components/Reviews'
import HealthResources from '@/components/HealthResources'
import dropdown from '@/components/Dropdown'
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
    VueSlickCarousel,
    dropdown
  },
  data() {
    return {
      showCookies: true,
      showCookiesMsg: true,
      scrollPosition: 0,
      settings: {
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 2000,
        "edgeFriction": 0.35,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1

      },
      dropdown_title: 'Read Our COVID Statement. ',
      dropdown_text: '<strong>DDC is taking a proactive and cautious approach to COVID-19 (coronavirus) as some of our clients and careers may be in the high-risk category for the virus. Our priority is to protect our community including staff, clients and their families, advocates, students, partners and our visitors.</strong>' +
          '<br> <br>' +
          'We are monitoring the situation daily and adhering to the guidelines and precautions set by the Ministry of health, local and public health units. We are ensuring our protocols are best practice and offering alternatives services to our clients, carers, students and partners.' +
          '<br><br>' +
          'This has an impact on the availability of some services and change of delivery of Our home care services. We are looking at additional ways we can continue to support our clients and adapt to the changing environment that coronavirus has created.\n' +
          'During this time of uncertainty, our goal is to continue to support our community. Our services continue to ensure careers have a break and our clients have the opportunity to receive therapy, clinical support and socialization.\n' +
          '<br><br>' +
          'We are here to support you and help you in any way we can. Please contact us on 1(833) 564-6332 if you need any assistance and we will do our best to help you and/or provide you with the right resources.',
      icon: 'https://img.icons8.com/fluent-systems-regular/30/000000/high-importance.png'
    }
  },
  methods: {

    updateScroll() {
      this.scrollPosition = window.scrollY
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
  margin-top: 14vh;
  position: relative;

  .welcome {
    position: relative;

    .landing {
      //background: black;
      outline: none;

      .landing_info {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        //background: $headerColor;
        outline: none;

        .landing_text {
          align-items: center;
          margin: 10px;
          outline: none;
          padding: 20px;

          img {
            text-align: center;
            justify-content: center;
            margin: 0 auto;
            align-items: center;
            width: 60%;

          }


          h1 {
            font-size: 60px;
            font-weight: bolder;
            color: $headerColor;

          }

          .msg {
            margin-top: 1vh;
            color: $secondaryColor;
            font-weight: bolder;
            font-size: 30px;
            opacity: 1;
          }

          p {
            opacity: 0.8;
            color: $headerColor;
            font-size: 16px;
          }

          .landing_text_button {
            margin: 2vh auto;
            text-align: start;
            justify-content: space-around;

            .btn1 {
              @include homeButton;

              background: $highlight;

              a {
                color: $textColor;
              }
            }

            .btn2 {
              @include homeButton;
              margin: 20px;
              border: 1px solid $textColor;

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

  .partners {
    text-align: center;
    padding: 40px;

    img {
      max-width: 100%;
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

  .intro {
     margin: 5vh auto;
    width: 80%;

    background: white;
    border-radius: 8px;
    box-shadow: 0 5px 10px rgba(192, 200, 224, 0.05), 0 15px 40px rgb(255, 255, 255);
    transition: 0.5s ease-in-out;
    z-index: 5;
    padding: 40px;
    .intro_title {
      font-size: 30px;
      color: $headerColor;
      border-bottom: 2px solid $secondaryColor;
      margin: 5px;
      h3 {
        font-size: 30px;
      }

    }
      .intro_text {
        p{
          margin-top: 40px;
          line-height:40px;

        }


      }

  }

}

@media (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  #home {
    margin-top: 0;

    .welcome {
      .landing {
        margin-top: 3vh;

        .landing_info {
          grid-template-columns: 1fr !important;
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
                border: 1px solid $textColor;
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
      .intro {
        margin: 5vh auto;
        width: 100%;


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
        grid-template-columns: 1fr 1fr !important;;
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
    .intro {
      margin: 5vh auto;
      width: 100%;


    }
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

            .btn2 {
              border: 1px solid $textColor;
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
        margin-top: 1vh !important;

        .landing_info {
          grid-template-columns: 1fr !important;
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
                border: 1px solid $textColor;

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

@media (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
  #home {
    .intro {
      margin: 5vh auto;
      width: 100%;


    }
    margin-top: 0;

    .welcome {
      .landing {
        margin-top: 4vh !important;

        .landing_info {
          grid-template-columns: 1fr !important;
          grid-template-areas:
          "a a a"
          "a a a";

          .landing_text {
            width: 100% !important;
            margin: 0 auto;
            text-align: center;

            h1 {
              font-size: 28px;
            }

            .msg {
              margin-top: 2vh;
              font-size: 16px;
            }


            .landing_text_button {

              margin: 2vh auto;
              text-align: center !important;
              width: 80% !important;
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
                border: 1px solid $textColor;

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
    .intro {
      margin: 5vh auto;
      width: 100%;


    }
    .welcome {
      .landing {
        margin-top: 10vh !important;

        .landing_info {
          grid-template-columns: 1fr !important;
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

              .btn1 {
                @include homeButton;
                margin: 20px;
                width: 30%;
                background: $highlight;
              }

              .btn2 {
                @include homeButton;
                margin: 20px;
                width: 30%;
                border: 1px solid $textColor;

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
