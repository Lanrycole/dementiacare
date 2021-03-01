<template>
  <div id="container">
    <div class="welcome_card">

      <div class="cards" data-aos="zoom-in">
        <div class="card_img">
          <img src="../assets/Images/doctor.svg" alt="">
        </div>
        <div class="card_text" data-aos="zoom-in">
          <h2>
            Our History
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis cupiditate eaque eum explicabo in
            ipsam quod repudiandae tempora voluptate?
          </p>
          <h2>
            Philosophy
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis cupiditate eaque eum explicabo in
            ipsam quod repudiandae tempora voluptate?
          </p>
          <h2>
            Mission
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis cupiditate eaque eum explicabo in
            ipsam quod repudiandae tempora voluptate?
          </p>

          <div class="card_btn">
            <Button type="button" class="btn2">
              <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#book'">Contact
              </router-link>

            </Button>

            <Button type="button" class="btn1">
              <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#book'">Book Us
        </router-link>

            </Button>
          </div>
        </div>
      </div>
      <hr>
      <div class="cards" data-aos="zoom-in">
        <div class="card_img" data-aos="zoom-in">
          <img src="../assets/Images/suburbs.svg" alt="office">
        </div>
        <div class="card_text" data-aos="zoom-in">
          <h2>Address</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis cupiditate eaque eum explicabo in
            ipsam quod repudiandae tempora voluptate?
          </p>
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis cupiditate eaque eum explicabo in
            ipsam quod repudiandae tempora voluptate?
          </p>
          <h2>Where we serve</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut blanditiis cupiditate eaque eum explicabo in
            ipsam quod repudiandae tempora voluptate?
          </p>

          <div class="card_btn">
            <Button type="button" class="btn2">
              <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#book'">Contact
             </router-link>

            </Button>

            <Button type="button" class="btn1">
              <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#book'">Book Us
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
  name: "welcomeCard",
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
          max-width: 100%;
          height: 500px;
          background: #dfe4ea;
        }
      }

      .card_text {
        padding: 20px;

        &::selection {
          background: $secondaryColor;
        }

        h2 {
          color: $headerColor;
          font-weight: bolder;
          font-size: 50px;
          opacity: 0.9;

          &::selection {
            background: $secondaryColor;
          }
        }

        .card_btn {
          margin: 20px;
          text-align: end;
          display: flex;
          justify-content: space-around;

          .btn2 {
            @include homeButton;
            background: $secondaryColor;
            color: $headerColor;
            padding: 8px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.5s;
            position: relative;
            text-align: center;

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

@media (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2) {
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

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
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