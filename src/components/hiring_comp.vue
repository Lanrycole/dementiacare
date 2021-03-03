<template>
  <div class="hiring">
    <div class="hiring_img">
      <img src="../assets/Images/staffing.jpg" alt="nurse">
    </div>
    <div class="hiring_text">

      <h2>We are hiring</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam autem consequatur distinctio doloremque
        expedita mollitia pariatur quaerat rem tempore veniam? Dignissimos et id labore maiores non odio odit sint unde?
      </p>
      <div class="hiring_btn">
        <Button type="button" class="btn1">
          <a href="tel:6479092011">Call Us</a>
        </Button>

        <Button type="button" class="btn2">
          <router-link :to="{name: 'Joinus'}" class="join_us" exact>Join Us</router-link>

        </Button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hiring"
}
</script>


<style lang="scss" scoped>
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";
@import "./src/assets/Buttons/buttons";
@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');

.hiring {
  background: $textColor;

  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .hiring_text {
    margin-top: 8vh;
    padding: 60px;

    h2 {
      margin: 0 auto;
      font-size: 50px;
      width: 60%;
      opacity: 0.9;

      &::selection {
        background: $secondaryColor;
      }
    }

    p {
      width: 100%;
      text-align: center;
      font-size: 16px;
      opacity: 0.8;
      margin: 0 auto;

      line-height: 36px;

      &::selection {
        background: $secondaryColor;
      }
    }

    .hiring_btn {
      margin: 50px auto;
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
      .btn2 {
        @include homeButton;
        background: none;
        color: $headerColor;
        box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
        border: 2px solid $secondaryColor;
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
          img {
            display: block;
          }
        }
      }
    }
  }

  .hiring_img {
    img {
      max-width: 100%;
    }
  }
}

@media (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2) {

  .hiring {
    padding: 10px;
    grid-template-columns: 1fr;

    .hiring_text {
      margin-top: 1vh;
      padding: 10px;

      h2 {
        font-size: 30px;
        width: 100%;

        &::selection {
          background: $secondaryColor;
        }
      }

      p {

        margin: 0;
        padding: 0;
      }

      .hiring_btn {
        margin: 10px auto;
      }
    }

  }
}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  .hiring {
    padding: 10px;
    grid-template-columns: 1fr;

    .hiring_text {
      margin-top: 1vh;
      padding: 10px;

      h2 {
        font-size: 35px;
        width: 100%;

        &::selection {
          background: $secondaryColor;
        }
      }

      p {

        margin: 0;
        padding: 20px;
      }

      .hiring_btn {
        margin: 10px auto;
      }
    }

  }
}
</style>