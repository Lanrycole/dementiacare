<template>
  <div id="container">

    <div class="services">
      <div class="services_info">
        <div class="services_img">
          <img src="../assets/Images/slide-3.jpg" alt="">
        </div>
        <div class="services_text">
          <h2>Companionship</h2>
          <hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto cumque eum id, labore quasi
            voluptatum? Accusantium dolor natus non?
          </p>
          <div class="services_btn">
            <Button type="button" class="btn1">Read More</Button>
          </div>
        </div>
      </div>
      <div class="services_info">
        <div class="services_img">
          <img src="../assets/Images/slide-8.jpg" alt="">
        </div>
        <div class="services_text">
          <h2> Long-Term Care</h2>
          <hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto cumque eum id, labore quasi
            voluptatum? Accusantium dolor natus non?
          </p>
          <div class="services_btn">
            <Button type="button" class="btn1">Read More</Button>

          </div>
        </div>
      </div>
      <div class="services_info">
        <div class="services_img">
          <img src="../assets/Images/slide-7.jpg" alt="">
        </div>
        <div class="services_text">
          <h2>Home  Services</h2>
          <hr>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid architecto cumque eum id, labore quasi
            voluptatum? Accusantium dolor natus non?
          </p>
          <div class="services_btn">
            <Button type="button" class="btn1">Read More</Button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "team"
}
</script>

<style scoped lang="scss">
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";
@import "./src/assets/Buttons/buttons";
@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');

#container {
  .services {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;

    color: $textColor;

    margin: 0 auto;
    z-index: 2;
    width: 90%;
    text-align: center;

    .services_info {
      transition: 0.5s;
      width: 90%;
      margin: 0 auto;
      border-top-left-radius: 75px;
      border-bottom-right-radius: 75px;
      border: 5px inset $textColor;
      z-index: 4;
      color: $headerColor;

      .services_img {
        text-align: center;

        img {
          border-top-left-radius: 65px;
          max-width: 100%;
          z-index: 4;
        }
      }

      .services_text {
        padding: 20px;

        h2 {
          font-size: 30px;
          text-align: start;
          &::selection{
            background:$secondaryColor;
          }
        }

        hr {
          margin-bottom: 30px;
        }

        p {
          line-height: 30px;
          margin: 10px auto 10px;
          &::selection{
            background:$secondaryColor;
          }
        }

        .services_btn {

          .btn1 {
            @include homeButton;
            @include Button;
            background: none;
            color: $headerColor;
            padding: 8px;
            border: 1px solid $highlight;
width: 140px;
            transition: 0.5s;
            position: relative;
            text-align: center;

            img {
              top: 5px;
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

          }
        }
      }
    }
  }
}

</style>