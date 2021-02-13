<template>
  <div id="container">
    <div class="reviews">
      <VueSlickCarousel :arrows="false" :dots="true" v-bind="settings">
        <div class="review_info">
          <div class="review_img">
            <img src="../assets/Images/review1.jpg" alt="">
          </div>
          <div class="review_text">
            <div class="review_stars">
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
            </div>
            <div class="customer_reviews">
              <p class="custom_name">Sonia</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem eos illum nesciunt obcaecati
                placeat, sapiente. Consectetur debitis, dolorem dolores ex exercitationem pariatur, porro qui rerum
                tempore velit, voluptas voluptate.
              </p>
            </div>
          </div>
        </div>
        <div class="review_info">
          <div class="review_img">
            <img src="../assets/Images/review2.jpg" alt="">
          </div>
          <div class="review_text">
            <div class="review_stars">
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
            </div>
            <div class="customer_reviews">
              <p class="custom_name">Sola</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem eos illum nesciunt obcaecati
                placeat, sapiente. Consectetur debitis, dolorem dolores ex exercitationem pariatur, porro qui rerum
                tempore velit, voluptas voluptate.
              </p>
            </div>
          </div>
        </div>
        <div class="review_info">
          <div class="review_img">
            <img src="../assets/Images/review3.jpg" alt="">
          </div>
          <div class="review_text">
            <div class="review_stars">
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
            </div>
            <div class="customer_reviews">
              <p class="custom_name">Jessica</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem eos illum nesciunt obcaecati
                placeat, sapiente. Consectetur debitis, dolorem dolores ex exercitationem pariatur, porro qui rerum
                tempore velit, voluptas voluptate.
              </p>
            </div>
          </div>
        </div>
        <div class="review_info">
          <div class="review_img">
            <img src="../assets/Images/review4.jpg" alt="">
          </div>
          <div class="review_text">
            <div class="review_stars">
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png"/>
            </div>
            <div class="customer_reviews">
              <p class="custom_name">Dayo</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem eos illum nesciunt obcaecati
                placeat, sapiente. Consectetur debitis, dolorem dolores ex exercitationem pariatur, porro qui rerum
                tempore velit, voluptas voluptate.
              </p>
            </div>
          </div>
        </div>


      </VueSlickCarousel>
    </div>
  </div>

</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
name: "Reviews",
  components: {
    VueSlickCarousel,

  },
  data() {
    return {
      settings: {
        "infinite": true,
        "autoplay": true,
        "autoplaySpeed": 2000,
        "dots": true,
        "dotsClass": "slick-dots custom-dot-class",
        "edgeFriction": 0.35,
        "speed": 500,
        "slidesToShow": 1,
        "slidesToScroll": 1

      },

    }
  },
}
</script>


<style scoped lang="scss">
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";

#container{
  .reviews {
    margin: 0 auto !important;
    padding: 140px;
    outline: none !important;

    .review_info {
      margin: 0 auto !important;
      width: 80% !important;
      display: flex !important;
      justify-content: center;

      .review_img {
        width: 30%;

        img {
          width: 300px;
          border-radius: 50%;
          border: 4px solid $secondaryColor;
        }
      }

      .review_text {
        width: 50%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        margin: 20px;
        padding: 20px;
        line-height: 30px;
        border-left: 4px solid $highlight;

        .review_stars {
          text-align: center;

          img {
            display: inline-block;
          }
        }

        .customer_reviews {
          .custom_name {
            font-size: 30px;
            margin: 10px;
            text-align: center;
            font-weight: bolder;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>