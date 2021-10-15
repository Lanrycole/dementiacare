<template>
  <div id="container">
    <div class="welcome_card">

      <div class="cards" data-aos="fade-up"
           data-aos-duration="2000">
        <div class="card_img">
          <img src="../assets/Images/doctor.svg" alt="">
        </div>
        <div class="card_text">
          <h2>
            Our History
          </h2>
          <p>
            We are a growing company dedicated to providing professional health care services through recruitment, consultation and home care services.
          </p>
          <h2>
            Philosophy
          </h2>
          <p>
            Our philosophy of care embraces a person-centered approach that respects the individuality and the experience of those living with dementia.

          We welcome everyone irrespective of their cultural background, race, sex, religion and identity.
          </p>
          <h2>
            Mission
          </h2>
          <p>
            We aim to provide excellent care that will improve the quality of life of people in the community, through our specialized health services and professionals.
          </p>

          <div class="card_btn">
            <Button type="button" class="btn2">
              <router-link :to="{name: 'contact'}" class="router-link" exact v-scroll-to="'#book'">Contact
              </router-link>

            </Button>

            <Button type="button" class="btn1">
              <router-link :to="{name: 'contact'}" class="router-link" exact v-scroll-to="'#book'">Book Us
              </router-link>

            </Button>
          </div>
        </div>
      </div>
      <hr>
      <div class="cards" data-aos="fade-up"
           data-aos-duration="2000">
        <div class="card_img">
          <img src="../assets/Images/suburbs.svg" alt="office">
        </div>
        <div class="card_text" >
          <h2>Address</h2>
          <p>

           <span style="border-bottom: 2px solid #F39E1C">2230 Blackwater Road London, ON N5X0L1.</span>
          </p>
          <h2>Contact</h2>
          <p>
            You can <a href='tel:1(833)564-6332' >call (EXT 0) </a>  or send us an <a href='mailto:info@ddchealthservices.com
'>send an email. </a>.
            <br> We are also available on our various social media platforms  <span style='border-bottom: 2px solid #F39E1C'>@diversifieddementiacare</span>
          </p>
          <h2>Where we serve</h2>
          <p>
            We provide services and recruits health care professionals all over the country.

          </p>

          <div class="card_btn">
            <Button type="button" class="btn2">
              <router-link :to="{name: 'contact'}" class="router-link" exact v-scroll-to="'#book'">Contact
              </router-link>

            </Button>

            <Button type="button" class="btn1">
              <router-link :to="{name: 'contact'}" class="router-link" exact v-scroll-to="'#book'">Book Us
              </router-link>

            </Button>
          </div>
        </div>

      </div>


    </div>
  </div>
</template>

<script>


export default {
  name: "History",
  components: {},

}
</script>

<style scoped lang="scss">
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";
@import "./src/assets/Buttons/buttons";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#container {
  .welcome_card {
    //padding: 30px;
    margin: 5vh auto 5vh;
    padding: 10px;
    //background: $textColor;

    hr {
      width: 50%;
      text-align: center;
      margin: 0 auto;
    }

    .cards {
      height: 100%;
      margin: 5vh auto 5vh;
      grid-gap: 10px;
      display: grid !important;
      grid-template-columns: 1fr 1fr;
      width: 80%;
      border-radius: 6px;

      p {
        opacity: 0.7;
        margin-bottom: 3vh;
        line-height:35px;

        &::selection {
          background: $secondaryColor;
        }
      }

      //transition: 0.3s;

      .card_img {
        height: 100%;
        padding: 0;
        margin: 0;

        img {
          width: 100%;
          max-width: 100%;
          height: 100%;
          background: #dfe4ea;
        }
      }

      .card_text {
        padding: 10px;

        &::selection {
          background: $secondaryColor;
        }

        h2 {
          color: $headerColor;
          font-weight: bolder;
          font-size: 30px;
          opacity: 0.9;

          &::selection {
            background: $secondaryColor;
          }
        }

        .card_btn {
          margin: 20px;
          text-align: end;

          .btn2 {
            @include homeButton;
            background: $secondaryColor;
            color: $headerColor;
            padding: 8px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.5s;
            position: relative;
            text-align: center;
            margin: 20px;
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

          .btn1 {
            @include homeButton;
            background: none;
            color: $headerColor;
            padding: 8px;
            border: 1px solid $highlight;
            transition: 0.5s;
            position: relative;
            text-align: center;
            margin: 20px;
            a {
              color: $headerColor;
            }

            img {
              top: 10px;
              right: 10px;
              position: absolute;
              display: none;
            }

            &:hover {

              background: $secondaryColor;
              color: $headerColor;

              img {
                display: block;

              }

            }

            &::before {
              background: $highlight;
            }

          }
        }
      }

    }

  }
}

@media (max-width: 767px)  {
  #container {
    margin: 0;

    .welcome_card {
      margin: 0;
      padding: 10px;

      hr {
        width: 80%;
      }

      .cards {
        grid-template-columns: 1fr;
        width: 100%;

        .card_img {
          width: 100%;

          img {

          }
        }

        .card_text {
          width: 100%;
          padding: 0;

          h2 {
            font-size: 20px;
          }

          p {
            width: 100%;
            padding: 0;

          }

          .card_btn {
            display: none;
          }
        }


      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px)  {
  #container {
    margin: 0;

    .welcome_card {
      margin: 0;
      padding: 10px;

      hr {
        width: 80%;
      }

      .cards {
        grid-template-columns: 1fr;
        width: 100%;

        .card_img {
          width: 100%;
          margin: 0 auto;
          text-align: center;
        }

        .card_text {
          width: 100%;
          padding: 20px;

          h2 {
            font-size: 30px;
          }

          p {
            width: 100%;
            padding: 0;

          }

          .card_btn {
            display: none;
          }
        }


      }
    }
  }
}
</style>