<template>
  <div id="container">
    <div class="reviews">
      <VueSlickCarousel :arrows="false" :dots="true" v-bind="settings">
        <div class="review_info">
          <div class="review_img">
            <span><img src="../assets/Images/male_avatar.svg" alt="male avatar">
            </span>

          </div>
          <div class="review_text">
            <div class="review_stars">
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
            </div>
            <div class="customer_reviews">
              <p class="custom_name">Sonia</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem eos illum nesciunt obcaecati
                placeat, sapiente. Consectetur debitis, dolorem dolores ex exercitationem pariatur, porro qui rerum
                tempore velit, voluptas voluptate.
              </p>
              <div class="submit_review">
                <Button type="button" class="btn2">Write Review</Button>
              </div>

            </div>
          </div>
        </div>
        <div class="review_info">
          <div class="review_img">
            <img src="../assets/Images/female_avatar.svg" alt="female avatar">
          </div>
          <div class="review_text">
            <div class="review_stars">
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
            </div>
            <div class="customer_reviews">
              <p class="custom_name">Sola</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem eos illum nesciunt obcaecati
                placeat, sapiente. Consectetur debitis, dolorem dolores ex exercitationem pariatur, porro qui rerum
                tempore velit, voluptas voluptate.
              </p>
              <div class="submit_review">
                <Button type="button" class="btn2">Write Review</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="review_info">
          <div class="review_img">
            <img src="../assets/Images/female_avatar.svg" alt="female avater">
          </div>
          <div class="review_text">
            <div class="review_stars">
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
            </div>
            <div class="customer_reviews">
              <p class="custom_name">Jessica</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem eos illum nesciunt obcaecati
                placeat, sapiente. Consectetur debitis, dolorem dolores ex exercitationem pariatur, porro qui rerum
                tempore velit, voluptas voluptate.
              </p>
              <div class="submit_review">
                <Button type="button" class="btn2">Write Review</Button>
              </div>
            </div>
          </div>
        </div>
        <div class="review_info">
          <div class="review_img">
            <img src="../assets/Images/male_avatar.svg" alt="male avatar">
          </div>
          <div class="review_text">
            <div class="review_stars">
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
              <img src="https://img.icons8.com/fluent/20/000000/star.png" alt="review start"/>
            </div>
            <div class="customer_reviews">
              <p class="custom_name">Dayo</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor dolorem eos illum nesciunt obcaecati
                placeat, sapiente. Consectetur debitis, dolorem dolores ex exercitationem pariatur, porro qui rerum
                tempore velit, voluptas voluptate.
              </p>
              <div class="submit_review">
                <Button type="button" class="btn2">Write Review <img src="https://img.icons8.com/dotty/24/000000/ringing-phone.png" alt="phone"/>
                </Button>
              </div>
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
@import "./src/assets/Buttons/buttons";

#container {
  .reviews {
    margin: 0 auto !important;
    padding: 140px;
    outline: none !important;
    /* Set a specific height */


    /* Create the parallax scrolling effect */
    background: url("../assets/Images/reviews.jpg") no-repeat fixed center;
    background-size: cover;

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
        text-align: center;
        margin: 20px;
        padding: 20px;
        line-height: 30px;
        border-left: 4px solid $highlight;
        background-color: rgb(0, 0, 0); /* Fallback color */
        background-color: rgba(0, 0, 0, 0.8);
        color: $textColor;

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
            color: $textColor;
          }

          .submit_review {
            text-align: end;
            margin-top: 40px;

            .btn2 {
              @include homeButton;
              background-color: rgb(0, 0, 0); /* Fallback color */
              background-color: rgba(0, 0, 0, 0.6);
              padding: 8px;
              //box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
              transition: 0.5s;
              position: relative;
              text-align: center;
              color: $textColor;
              border: 2px solid $textColor;
              width: 200px;

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
          border-top: 4px solid $highlight;

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
                border: 2px solid $textColor;
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
          border-top: 4px solid $highlight;

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
                border: 2px solid $textColor;
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
          border-left: 4px solid $highlight;

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
                border: 2px solid $textColor;
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