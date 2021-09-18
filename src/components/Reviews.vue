<template>
  <div id="container">
    <div class="reviews">
      <VueSlickCarousel :arrows="false" :dots="true" v-bind="settings">


      </VueSlickCarousel>
      <div class="review_info">
        <!--          <div class="review_img">-->
        <!--            <span><img src="../assets/Images/male_avatar.svg" alt="male avatar">-->
        <!--            </span>-->

        <!--          </div>-->
        <div class="review_text">
          <div class="review_stars">
            <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
            <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
            <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
            <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>

          </div>
          <div class="customer_reviews">
            <p class="custom_name">Heather Whitfield</p>
            <p class="reviewer_details">Executive Director- Seaforth Long Term Care Home</p>
            <p>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/quote-left.png" alt="quote"/>  Our Home has found that Diversified Dementia Care Services has been able to meet the staffing - agency needs of our LTC Home.  We have received timely responses and great communication.
              We thank DDC for their quality service.
              <img src="https://img.icons8.com/ios-glyphs/30/000000/quote-right.png" alt="quote"/>
            </p>
            <div class="submit_review">

              <Button type="button" class="btn2">
                <a href="https://g.page/r/Cecq-TNdx_jREAg/review" target="_blank"> Write Review</a>
              </Button>
            </div>

          </div>
        </div>
      </div>
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
@import "./src/assets/Buttons/buttons";

#container {
  //display:none;
  .reviews {
    margin: 0 auto !important;
    padding: 140px;
    outline: none !important;
    /* Set a specific height */


    /* Create the parallax scrolling effect */
    //background: url("../assets/Images/reviews.jpg") fixed center/cover no-repeat;
    //background-size: cover;
    //background-size: cover;

    .review_info {
      margin: 0 auto !important;
      width: 80% !important;
      display: flex !important;
      justify-content: center;

      .review_img {
        width: 30%;

        img {
          max-width: 100%;
        }
      }

      .review_text {
        width: 50%;
        //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        //box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);

        text-align: center;
        margin: 20px;
        padding: 20px;
        line-height: 30px;
        border-radius:2rem;
        //border: 2px solid $highlight;
        //background-color: rgb(0, 0, 0); /* Fallback color */
        //background-color: rgba(0, 0, 0, 0.9);

        color: $headerColor;

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
            opacity: 0.9;
            color: $headerColor;

          }
          .reviewer_details{
          padding:4px;
          font-style:italic;
          }

          .submit_review {
            text-align: end;
            margin-top: 40px;

            .btn2 {
              @include homeButton;
              padding: 8px;
              //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              transition: 0.5s;
              position: relative;
              text-align: center;
              color: $textColor;
              border: 1px solid $highlight;
              width: 200px;
              font-weight: normal;
              background:none;
              a {
                color: $headerColor;
                font-weight: bold;
              }

              &:hover {
                background: $highlight;
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
}

@media (max-width: 767px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .reviews {
      padding: 10px;

      .review_info {
        display: grid !important;
        grid-template-columns: 1fr;
        width: 100% !important;

        .review_img {
          width: 60%;
          text-align: center;
          margin: 0 auto;

          img {
            text-align: center;
          }
        }

        .review_text {
          text-align: center;
          width: 100%;
          margin: 20px auto;
          padding: 10px;
          border-left: none;
          //border-top: 4px solid $highlight;

          .customer_reviews {
            .custom_name {
              margin: 5px;

            }

            .submit_review {
              text-align: center;
              margin-top: 40px;

              .btn2 {
                @include homeButton;
                background: none;
                padding: 6px;
                border: 2px solid $highlight;
                width: 300px;

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
            }

          }

        }
      }
    }
  }
}

@media (max-width: 731px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .reviews {
      padding: 10px;

      .review_info {
        display: grid !important;
        grid-template-columns: 1fr;
        width: 100% !important;

        .review_img {
          width: 60%;
          text-align: center;
          margin: 0 auto;

          img {
            text-align: center;
          }
        }

        .review_text {
          text-align: center;
          width: 100%;
          margin: 20px auto;
          padding: 10px;
          border-left: none;
          //border-top: 4px solid $highlight;

          .customer_reviews {
            .custom_name {
              margin: 5px;

            }

            .submit_review {
              text-align: center;
              margin-top: 40px;

              .btn2 {
                @include homeButton;
                background: none;
                padding: 6px;
                border: 2px solid $highlight;
                width: 300px;

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
            }

          }

        }
      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .reviews {
      padding: 10px;

      .review_info {
        display: grid !important;
        grid-template-columns: 1fr 1fr;
        width: 100% !important;

        .review_img {
          width: 70%;
          text-align: center;
          margin: 50px auto;


          img {
            text-align: center;
          }
        }

        .review_text {
          text-align: center;
          width: 100%;
          margin: 20px auto;

          border-left: none;
          //border-left: 4px solid $highlight;

          .customer_reviews {
            .custom_name {
              margin: 5px;

            }

            .submit_review {
              text-align: center;
              margin-top: 40px;

              .btn2 {
                @include homeButton;
                background: none;
                padding: 6px;
                border: 2px solid $highlight;
                width: 300px;

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
            }

          }

        }
      }
    }
  }
}
</style>