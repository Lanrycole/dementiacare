<template>
  <div class="health_resources">
    <div class="health_info" data-aos="fade-right"
         data-aos-offset="100"
         data-aos-easing="ease-in-sine">
      <div class="health_img">
        <img src="../assets/Images/slide-1.jpg" alt="">
      </div>
      <div class="health_text">
        <a href="https://alzheimer.ca/en/help-support#:~:text=Find%20supportWith%20programs%20and,need%20as%20soon%20as%20possible."
           target="_blank"><h2>Alzheimer Society Canada</h2></a>
        <p>Find other people with Alzheimer near you</p>
      </div>
    </div>
    <div class="health_info" data-aos="fade-right"
         data-aos-offset="80"
         data-aos-easing="ease-in-sine">
      <div class="health_img">
        <img src="../assets/Images/slide-3.jpg" alt="">
      </div>
      <div class="health_text">
        <a href="https://www.webmd.com/palliative-care/caring-for-a-person-with-dementia"
           target="_blank"><h2>Caring for people with Dementia</h2></a>
        <p>Caring for people with Dementia.</p>
      </div>
    </div>
    <div class="health_info" data-aos="fade-right"
         data-aos-offset="50"
         data-aos-easing="ease-in-sine">
      <div class="health_img">
        <img src="../assets/Images/slide-4.jpg" alt="">
      </div>
      <div class="health_text">
        <a href="https://www.canada.ca/en/public-health/services/diseases/dementia.html"
           target="_blank"><h2>Dementia in Canada</h2></a>
        <p>Read More about Dementia in Canada for Help and Support</p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "HealthResources"
}
</script>


<style lang="scss" scoped>
@import "../assets/Colors/colors.css";
@import "../assets/Fonts/fonts";
@import "../assets/Buttons/buttons";
@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');


.health_resources {
  background: $textColor;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 10px;
  padding: 80px 80px;

  .health_info {
    width: 90%;
    margin: 0 auto;
    background: white;
    border-radius: 2rem;
    box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);

    .health_img {
      img {
        max-width: 100%;
        border-radius: 2rem 2rem 0 0;

      }
    }

    .health_text {
      padding: 20px;
      a {
        h2 {
          font-size: 18px;
        }

      }
      &::selection {
        background: $secondaryColor;
      }

      p {
        font-weight: normal;
        line-height: 32px;
        &::selection {
          background: $secondaryColor;
        }
      }

    }

    &:hover {
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
      cursor: pointer;
    }
  }

}

@media (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2) {
  .health_resources {
    grid-template-columns: 1fr;
    grid-gap: 5px;
    padding: 10px;

    .health_info {
      width: 90%;
      margin-top: 2vh;
    }
  }
}

@media (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
  .health_resources {
    margin-top: 8vh;
    grid-template-columns: 1fr;
    grid-gap: 5px;
    padding: 20px;

    .health_info {
      width: 100%;

      .health_text {
        a {
          h2 {
            font-size: 20px;
          }

        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  .health_resources {
    margin-top: 8vh;
    padding: 10px;
    grid-template-columns: 1fr;
    grid-gap: 5px;

    .health_info {
      width: 100%;

    }
  }
}
</style>