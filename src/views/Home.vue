<template>
  <div id="home">
    <div class="welcome">
      <div class="landing_info">
        <div class="landing_text" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom"
             data-aos-duration="3000">
          <p id="msg">
            Super care for adults
          </p>
          <h1> Reliable Dementia Care</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, voluptatum?
          </p>
          <div class="landing_text_button">
            <Button type="button" class="btn1">Contact</Button>
            <Button type="button" class="btn2">Book Now</Button>
          </div>
        </div>

        <div class="landing_img">
          <img src="../assets/Images/slide-19.png" alt="">
        </div>
      </div>
    </div>

    <div class="our_services">
      <Services/>
    </div>

    <div class="welcome_card">
      <welcome-card/>
    </div>
    <div class="packages">
      <packages/>
    </div>
    <div class="hiring">
      <hiring/>
    </div>


  </div>
</template>


<script>

import Services from '@/components/Services'
import welcomeCard from '@/components/welcomeCard'
import Hiring from '@/components/Hiring'
import packages from '@/components/packages'


export default {
  name: 'Home',
  components: {
    Services,
    welcomeCard,
    Hiring,
    packages
  },
  data() {
    return {}
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
  margin-top: 12vh;

  .welcome {
    position: relative;

    .landing_info {
      position: relative;

      .landing_img {
        margin: 0 auto;
        grid-column-start: 2;
        grid-column-end: 4;

        img {
          width: 100%;
          max-width: 100%;
        }
      }

      .landing_text {
        position: absolute;
        grid-column-start: 1;
        grid-column-end: 2;
        top: 160px;
        left: 5%;
        padding: 20px;
        align-items: center;
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.6);

        h1 {
          font-size: 60px;
          font-weight: bolder;
          color: $highlight;
          margin-top: 20px;
        }

        #msg {
          color: $secondaryColor;
          font-weight: bolder;
          font-size: 30px;
          opacity: 1;

        }

        p {
          margin-top: 20px;
          opacity: 0.8;
          color: $textColor;
          font-size: 18px;
        }

        .landing_text_button {
          margin: 6vh auto;
          text-align: center;
          display: flex;
          justify-content: space-around;

          .btn1 {
            @include homeButton;
            border: 1px solid $textColor;
          }

          .btn2 {
            @include homeButton;
            background: $highlight;

            &:hover {
              color: $headerColor;
            }
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

@media (max-width: 599px) {
  #home {
    .landing_info {

      grid-template-columns: 1fr;

      .landing_text {

      }

      .landing_img {
        img {
          width: 20px;
        }
      }
    }
  }


}


</style>
