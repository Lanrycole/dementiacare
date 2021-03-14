<template>
  <div id="container">
    <div class="staffing">
      <h2>Staffing Categories</h2>
      <p> Submit an application to get started.
      </p>
      <div class="staffing_info">
        <div class="staffing_details">
          <img src="../assets/Images/doctors.svg" alt="">
          <p>Health Practitioner</p>
        </div>
        <div class="staffing_details">
          <img src="../assets/Images/nurses.svg" alt="">
          <p>Registered Nurse</p>
        </div>
        <div class="staffing_details">
          <img src="../assets/Images/nurse_prac.svg" alt="">
          <p>Registered Practical Nurse</p>
        </div>
        <div class="staffing_details">
          <img src="../assets/Images/health_worker.svg" alt="">
          <p>PSW</p>
        </div>
        <div class="staffing_details">
          <img src="../assets/Images/home_care.svg" alt="">
          <p>Nursing Aide</p>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "staffing_categories"
}
</script>

<style scoped lang="scss">
@import "../assets/Colors/colors";
@import "../assets/Fonts/fonts.css";
@import "../assets/Buttons/buttons";
@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');

#container {
  .staffing {
    padding: 40px;
    text-align: center;

    h2 {
      text-align: center;
      font-size: 50px;
      padding: 40px;
      opacity: 0.9;
      color: $headerColor;
    }

    .staffing_info {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
      padding: 40px;
    }

    .staffing_details {
      margin: 0 auto;

      img {
        width: 200px;

        &:hover {

          cursor: pointer;
        }
      }

      p {
        text-align: center;
      }
    }
  }
}

@media (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
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

@media (min-width: 411px) and (max-width: 823px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .staffing {
      padding: 10px;

      h2 {
        text-align: center;
        font-size: 30px;
        padding: 10px;
      }

      .staffing_info {
        grid-template-columns: 1fr 1fr !important;
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

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
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
</style>