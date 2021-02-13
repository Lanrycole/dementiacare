<template>
  <div id="container">
    <div class="welcome_card">
      <div class="cards">
        <div class="card_img" data-aos="zoom-in-left">
          <img src="../assets/Images/doctor.svg" alt="">
        </div>
        <div class="card_text" data-aos="zoom-in-right">

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
            <Button type="button" class="btn2">Contact
              <img src="https://img.icons8.com/dotty/24/000000/ringing-phone.png"/>
            </Button>

            <Button type="button" class="btn1">Book Us
              <img src="https://img.icons8.com/dotty/24/000000/planner.png"/>
            </Button>
          </div>
        </div>
      </div>
      <hr>
      <div class="cards">

        <div class="card_text" data-aos="zoom-in-left">
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
            <Button type="button" class="btn2">Contact
              <img src="https://img.icons8.com/dotty/24/000000/ringing-phone.png"/></Button>

            <Button type="button" class="btn1">Book Us
              <img src="https://img.icons8.com/dotty/24/000000/planner.png"/>
            </Button>
          </div>
        </div>
        <div class="card_img" data-aos="zoom-in-right">
          <img src="../assets/Images/suburbs.svg" alt="">
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
    background: $textColor;

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
      }

      //transition: 0.3s;

      .card_img {
        height: 100%;
        padding: 0;
        margin: 0;

        img {
          max-width: 100%;
          height: 500px;
        }
      }

      .card_text {
        padding: 20px;
        align-items: center;
        justify-content: center;

        h2 {
          color: $headerColor;
          font-weight: bolder;
          font-size: 50px;
          opacity: 0.9;

        }

        .card_btn {
          margin: 20px;
          text-align: end;
          display: flex;
          justify-content: space-around;

          .btn2 {
            @include homeButton;
            background: none;
            color: $headerColor;
            padding: 8px;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            transition: 0.5s;
            position: relative;
            text-align: center;

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
</style>