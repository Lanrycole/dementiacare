<template>

  <div id="container">

    <div class="team_member ">
      <div class="team_member_info">
        <div class="team_member_img">
          <img src="../assets/Images/ceo.jpg" alt="">
        </div>
        <div class="team_member_desc">
          <h2>Lorem Ipsum</h2>
          <h4>Director</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aut commodi culpa, cum delectus doloremque,
            dolores fuga in maiores nemo nesciunt nulla numquam officia possimus quaerat qui quibusdam quis quod
            repellat repudiandae saepe sapiente soluta tempora totam ut veniam voluptate!</p>
          <div class="team_member_desc_btn">
            <Button type="button" class="btn1">
              <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#contact'">Contact
              </router-link>

            </Button>

          </div>
        </div>
      </div>

    </div>
    <hr>
    <div class="about_us_menu ">
      <div class="left_section">
        <div class="left_menu">
          <ul>
            <li @click="toggleMessage(partner_text); align_partners()" :style="{'text-align': text_align_partners}">
              Partners
            </li>
            <li @click="toggleMessage(licenses_text); align_license()" :style="{'text-align':text_align_license }">
              License
            </li>
            <li @click="toggleMessage(location_text); align_location()" :style="{'text-align': text_align_vision}">
              Location
            </li>
            <li @click="toggleMessage(contact_text); align_contact()" :style="{'text-align': text_align_history}">
              Contact
            </li>
          </ul>
        </div>
      </div>
      <div class="right_section ">
        <div class="content" v-html="menu_content"></div>
      </div>
    </div>

    <div class="more_info">
      <div class="info" data-aos="fade-up"
           data-aos-anchor-placement="top-bottom">
        <div class="info_img">
          <img src="../assets/Images/nurse1.jpg" alt="">
        </div>
        <div class="info_text">
          <h2>Highlight 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse et officiis provident sit tempore.
            Adipisci amet explicabo possimus vero!.
          </p>
        </div>
      </div>
      <div class="info" data-aos="fade-up"
           data-aos-anchor-placement="top-bottom">
        <div class="info_img">
          <img src="../assets/Images/nurse2.jpg" alt="">
        </div>
        <div class="info_text">
          <h2>Highlight 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse et officiis provident sit tempore.
            Adipisci amet explicabo possimus vero!.
          </p>
        </div>

      </div>
      <div class="info" data-aos="fade-up"
           data-aos-anchor-placement="top-bottom">
        <div class="info_img">
          <img src="../assets/Images/nurse3.jpg" alt="">
        </div>
        <div class="info_text">
          <h2>Highlight 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse et officiis provident sit tempore.
            Adipisci amet explicabo possimus vero!.
          </p>
        </div>
      </div>
      <div class="info" data-aos="fade-up"
           data-aos-anchor-placement="top-bottom">
        <div class="info_img">
          <img src="../assets/Images/nurse4.jpg" alt="">
        </div>
        <div class="info_text">
          <h2>Highlight 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta esse et officiis provident sit tempore.
            Adipisci amet explicabo possimus vero!
          </p>
        </div>
      </div>
    </div>
    <div class="review">
      <Review/>
    </div>
  </div>
</template>
<script>

import Review from '@/components/reviews_comp'


export default {
  name: 'About',
  components: {

    Review,
  },
  data: function () {
    return {
      landingImg: require('../assets/Images/staffing_header.png'),
      tittle: "About Us",
      // text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum ex illum ipsa ipsam natus optio placeat." +
      //     " In nihil pariatur plac",
      text_align_team: 'end',
      text_align_history: 'end',
      text_align_vision: 'end',
      text_align_partners: 'end',
      text_align_license: 'end',
      text_align: 'center',
      menu_content: '   <h1>Partners</h1> <br> <p style="line-height:32px">   Lorem ipsum dolor sit amet, consectetur adipisicing elitatur placeat voluptas. Corporis labore modi necessitatibus perferendis.' +
          '          Lorem ipsum dolor m </p> ',
      partner_text: '   <h1>Partners</h1> <br> <p style="line-height:32px">    sitatibus perferendis.\n' +
          '          Lorem Corporis labore modi necessitatibus perferendis.</p>',

      location_text: '    <h1>Location</h1> <br> <p style="line-height:32px">  We are located in Address. We serve Ontario, Quebec and environs.</p>',
      contact_text: '    <h1>Contact</h1> <br> <p style="line-height:32px">     Our customer service is always available. You can <a href="#">Send us an email</a> or <a href="#">Call us</a>. You can also nook am appointment</p>',
      licenses_text: '  <h1>License</h1> <br> <p style="line-height:32px">      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum orporis labore modi necessitatibus perferendis.</p>'
    }
  },
  methods: {
    toggleMessage(props) {
      this.resetTextAlign();
      this.menu_content = props;
      this.text_align = 'end'
    },
    resetTextAlign() {
      this.text_align_team = 'center';
      this.text_align_history = 'center';
      this.text_align_vision = 'center';
      this.text_align_partners = 'center';
      this.text_align_license = 'center';
    },

    align_contact() {
      this.text_align_history = 'end';
    },
    align_location() {
      this.text_align_vision = 'end';
    },
    align_partners() {
      this.text_align_partners = 'end';
    },
    align_license() {
      this.text_align_license = 'end';
    }
  },
  mounted() {
    this.resetTextAlign()
  },
  computed: {}

}
</script>

<style lang="scss" scoped>
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";
@import "./src/assets/Buttons/buttons";
@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#container {
  .team_member {
    margin: 20vh auto 5vh;

    .team_member_info {
      background: $textColor;
      width: 50%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      //box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
      .team_member_img {
        padding: 0;
        margin: 0;

        img {
          max-width: 100%;
          width: 440px;
          height: 100%;
        }
      }

      .team_member_desc {
        padding: 20px;

        h2 {
          font-size: 35px;
          margin-top: 2vh;
        }

        h4 {
          opacity: 0.7;
          font-size: 26px;
          margin-top: 1vh;
        }

        p {
          margin-top: 1vh;
          line-height: 30px;
        }

        .team_member_desc_btn {
          text-align: end;
          margin-top: 2vh;

          .btn1 {
            @include homeButton;
            background: none;
            color: $headerColor;
            border: 1px solid $headerColor;
            //border: 1px solid $textColor;
            box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);

            a {
              color: $headerColor;
            }
          }
        }
      }
    }

  }

  hr {
    width: 50%;
    margin: 0 auto;
  }

  .about_us_menu {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 8vh auto 0;

    .left_section {
      width: 30%;
      background: $textColor;
      text-align: center;
      align-items: center;
      justify-content: center;
      background: $headerColor;
      border-right: 0.5rem solid $highlight;

      .left_menu {
        height: 100%;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        padding-top: 2vh;

        ul {

          li {
            cursor: pointer;
            list-style: none;
            padding: 20px;
            font-size: 30px;
            font-weight: bolder;
            background: linear-gradient(to right, $secondaryColor, $secondaryColor 50%, $textColor 50%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-size: 200% 100%;
            background-position: 100%;
            transition: background-position 275ms ease;
            text-align: center;

            &:hover {
              background-position: 0 100%;

            }
          }

        }
      }

    }

    .right_section {
      grid-column-start: 2;
      grid-column-end: 4;
      width: 65%;
      margin-top: 5vh;

    }
  }

  .forms-studio {
    position: relative;
    padding-bottom: 56.25%;
    overflow: hidden;
    width: 100%;
    height: 600px;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;
    }

    .forms-studio-form-content {
      display: none !important;
    }
  }

  .partner {
    margin: 10vh auto 10vh;

    .partner_info {

      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

      .partner_img {
        img {
          max-width: 100%;
        }
      }

      .partner_text {
        margin-top: 5vh;
        text-align: start;

      }
    }
  }

  .more_info {
    margin: 10vh auto 10vh;
    padding: 80px;
    background: $textColor;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;

    .info {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;
      background: white;

      img {
        max-width: 100%;
        height: 320px;
      }

      .info_text {
        line-height: 32px;
        padding: 20px;

        h2 {
          margin-top: 7vh;
          font-size: 30px;

          &::selection {
            background: $secondaryColor;
          }
        }

        p {
          margin-top: 2vh;
          opacity: 0.8;
          line-height: 32px;

          &::selection {
            background: $secondaryColor;
          }
        }
      }
    }
  }
}

@media (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {

  #container {
    .team_member {
      margin: 5vh auto 5vh;

      .team_member_info {
        background: $textColor;
        width: 90%;
        grid-template-columns: 1fr;
      }
    }

    .about_us_menu {
      padding: 0 !important;
      margin: 10px auto !important;
      width: 100% !important;

      .left_section {
        width: 40% !important;
        border-right: 0.5rem solid $highlight !important;

        .left_menu {
          width: 100% !important;

          ul {

            li {

              padding: 10px;
              font-size: 14px !important;

              &:hover {
                background-position: 0 100%;

              }
            }

          }
        }

      }

      .right_section {
        width: 90% !important;
        margin: 10px;
      }
    }

    .more_info {
      grid-template-columns: 1fr !important;
      grid-gap: 10px;
      padding: 10px !important;

      .info {
        grid-template-columns: 1fr !important;
        grid-gap: 5px;

        .info_text {
          h2 {
            margin-top: 1vh !important;
          }
        }

      }
    }
  }

}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .team_member {
      margin: 15vh auto 5vh;

      .team_member_info {
        background: $textColor;
        width: 100%;
        grid-template-columns: 1fr;

        .team_member_img {
          padding: 20px;
          margin: 0 auto;

          img {
            margin: 0 auto;
            width: 700px;
            height: 100%;
          }
        }

        .team_member_desc {
          .team_member_desc_btn {
            text-align: center;
          }

        }

      }
    }

    .about_us_menu {
      padding: 0 !important;
      margin: 10px auto !important;
      width: 100% !important;

      .left_section {
        width: 30% !important;
        border-right: 0.5rem solid $highlight !important;

        .left_menu {
          width: 100% !important;

          ul {

            li {

              padding: 10px;
              font-size: 20px !important;

              &:hover {
                background-position: 0 100%;

              }
            }

          }
        }

      }

      .right_section {
        width: 90% !important;
        margin: 10px;
      }
    }

    .more_info {
      grid-template-columns: 1fr !important;
      grid-gap: 10px;
      padding: 10px !important;
      margin: 0 auto;

      .info {
        grid-template-columns: 1fr !important;
        grid-gap: 0px;
        width: 100%;
        margin: 5vh auto;

        .info_img {
          margin: 0 auto;

          img {
            width: 800px;
            height: 600px;
          }
        }

        .info_text {
          h2 {
            margin-top: 1vh !important;
          }
        }

      }
    }
  }
}

@media (min-width: 411px) and (max-width: 823px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .team_member {
      margin: 10vh auto 5vh;

      .team_member_info {
        background: $textColor;
        width: 100%;
        grid-template-columns: 1fr;

        .team_member_img {
          padding: 20px;
          margin: 0 auto;

          img {
            margin: 0 auto;
            width: 700px;

          }
        }

        .team_member_desc {
          padding: 10px;

          h2 {
            margin: 0;
            padding: 0;
          }

        }

      }
    }

    .about_us_menu {
      padding: 0 !important;
      margin: 10px auto !important;
      width: 100% !important;

      .left_section {
        width: 30% !important;
        border-right: 0.5rem solid $highlight !important;

        .left_menu {
          width: 100% !important;

          ul {

            li {

              padding: 10px;
              font-size: 20px !important;

              &:hover {
                background-position: 0 100%;

              }
            }

          }
        }

      }

      .right_section {
        width: 90% !important;
        margin: 10px;
      }
    }

    .more_info {
      grid-template-columns: 1fr !important;
      grid-gap: 10px;
      padding: 10px !important;
      margin: 0 auto;

      .info {
        grid-template-columns: 1fr !important;
        grid-gap: 0px;
        width: 100%;
        margin: 5vh auto;

        .info_img {
          margin: 0 auto;

          img {
            width: 800px;

          }
        }

        .info_text {
          h2 {
            margin-top: 1vh !important;
          }
        }

      }
    }
  }
}
</style>

