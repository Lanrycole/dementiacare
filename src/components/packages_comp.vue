<template>
  <div class="pricing">
    <div class="pricing_info">
      <div class="pricing_pic">
        <img src="../assets/Images/g1.jpg" alt="">
      </div>
      <div class="pricing_desc">
        <h2>Silver Package</h2>
        <h3 style="color:#37B9F1;"> $<span class="price_name">20</span></h3>
        <h4>Details</h4>
        <hr>
        <p> - Lorem ipsum dolor sit amet, </p>
        <p> - Lorem ipsum dolor sit amet, </p>
        <p> - Lorem ipsum dolor sit amet, </p>
        <p> - Lorem ipsum dolor sit amet, </p>
        <p> - Lorem ipsum dolor sit amet, </p>
        <div class="pricing_btn">
          <Button type="button" class="silver_btn">Contact
            <img src="https://img.icons8.com/dotty/24/ffffff/ringing-phone.png" alt="phone"/>
          </Button>

        </div>
      </div>
    </div>
    <div class="pricing_info">
      <div class="pricing_pic">
        <img src="../assets/Images/g2.jpg" alt="">
      </div>
      <div class="pricing_desc">
        <h2>Gold Package</h2>

        <h3 style="color:#FF9F1A;"> $<span class="price_name">40</span></h3>
        <h4>Details</h4>
        <hr>
        <p> - Lorem ipsum dolor sit amet, </p>
        <p> - Lorem ipsum dolor sit amet, </p>
        <p> - Lorem ipsum dolor sit amet, </p>
        <p> - Lorem ipsum dolor sit amet, </p>
        <p> - Lorem ipsum dolor sit amet, </p>
        <div class="pricing_btn">
          <Button type="button" class="btn2">Contact
            <img src="https://img.icons8.com/dotty/24/ffffff/ringing-phone.png" alt="phone"/>
          </Button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "packages"
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

.pricing {
  background: lighten($secondaryColor, 10%);
  margin: 0 auto;
  text-align: center;
  padding: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .pricing_info {
    margin: 20px auto 10px;
    text-align: start;
    width: 80%;
    display: grid;
    grid-template-columns: 1fr ;
     background: $textColor;
    position: relative;
    border-radius: 2rem;

    &::selection {
      background: $secondaryColor;
    }

    .pricing_pic {
      position: absolute;
      top: 20px;
      left: -60px;
      grid-column-start: 1;
      grid-column-end: 2;
      height: 100%;

      img {
        width: 350px;
        border-radius: 2rem;
        box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
        transition: 0.5s;
      }
    }

    .pricing_desc {
      grid-column-start: 2;
      grid-column-end: 4;
      align-items: center;
      justify-content: center;
      overflow: hidden;
padding:30px;

      &::selection {
        background: $secondaryColor;
      }

      hr {
        width: 50%;
      }

      h2 {
        font-size: 40px;
        font-weight: bolder;
        opacity: 0.9;

        &::selection {
          background: $secondaryColor;
        }
      }

      h3 {
        font-size: 20px;

        &::selection {
          background: $secondaryColor;
        }

        .price_name {
          font-size: 60px;

          &::selection {
            background: $secondaryColor;
          }
        }
      }

      h4 {
        font-size: 30px;
        opacity: 0.7;

        &::selection {
          background: $secondaryColor;
        }
      }

      p {
        display: block;
        margin: 10px;

        &::selection {
          background: $secondaryColor;
        }
      }

      .pricing_btn {
        margin-top: 5vh;
        margin-bottom: 5vh;

        .silver_btn {
          @include homeButton;
          background: none;
          color: $headerColor;
          box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
          border: 1px solid $highlight;

          img {
            top: 10px;
            right: 10px;
            position: absolute;
            display: none;
          }

          &:hover {
            img {
              display: block;
            }
          }

          &:before {
            background: $highlight;
          }
        }

        .btn2 {
          @include homeButton;
          background: none;
          color: $headerColor;
          box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
          border: 1px solid $secondaryColor;

          img {
            top: 10px;
            right: 10px;
            position: absolute;
            display: none;
          }

          &:hover {
            img {
              display: block;
            }
          }
        }
      }
    }
  }

}

@media (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2) {
  .pricing {

    grid-template-columns: 1fr;
    padding: 10px;

    .pricing_info {
      grid-gap: 10px;
      grid-template-columns: 1fr;
      width: 100%;

      .pricing_pic {
        top: 0;
        left: 10px;
        display: none;

        img {

        }


      }

      .pricing_desc {
        grid-column-start: 1;
        grid-column-end: 4;
        padding: 10px;
        text-align: center;
        margin: 0 auto !important;

        hr {
          width: 90%;
        }

        h2 {
          font-size: 30px;
        }

        h3 {
          .price_name {
            font-size: 40px;
            padding: 0;
            margin: 0 auto !important;

          }

        }

        .pricing_btn {
          margin-top: 0;
          margin-bottom: 2vh;
        }

        p {
          padding: 10px;
          width: 100%;
          margin: 0 auto !important;
        }
      }
    }

  }

}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  .pricing {

    grid-template-columns: 1fr;

    .pricing_info {

      grid-template-columns: 1fr;
      grid-gap:0;
      width: 90%;
      .pricing_pic {
        top: 0;
        left: -20px;
        grid-column-start: 1;
        grid-column-end: 2;
        img {
         width:326px;

        }


      }

      .pricing_desc {
        grid-column-start: 2;
        grid-column-end: 4;

        margin: 0 auto !important;
        padding: 20px;

        hr {
          width: 90%;
        }

        h2 {
          font-size: 30px;
        }

        h3 {
          .price_name {
            font-size: 40px;
            padding: 0;
            margin: 0 auto !important;

          }

        }

        .pricing_btn {
          margin-top: 0;
          margin-bottom: 2vh;
        }

        p {
          padding: 10px;
          width: 100%;
          margin: 0 auto !important;
        }
      }
    }

  }
}
@media (min-width: 1024px) and (max-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  .pricing {


    .pricing_info {
      width: 68%;

    }

  }
}
</style>