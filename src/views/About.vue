<template>

  <!--TODO: Break About Us landing section into components and add props-->
  <div id="container">
    <div class="landing">
      <landing-page :boardImage="landingImg" :title="tittle" :text="text"/>
    </div>
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
            <Button type="button" class="btn1">Contact</Button>

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

    <!--    <div class='forms-studio'>-->
    <!--      <iframe src='https://script.google.com/macros/s/AKfycbxq6hODm_QQ3Q0ya6LLDWPYAyA1aM6jCyOnpvFKRbtu2F-yTKeIe6Ws/exec'>-->
    <!--      </iframe>-->
    <!--    </div>-->
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
  </div>
</template>
<script>
import LandingPage from '@/components/LandingPage'
export default {
  name: 'About',
  components: {
    LandingPage,
  },
  data: function () {
    return {
      landingImg: require('../assets/Images/slide5.png'),
      tittle: "About",
      text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum ex illum ipsa ipsam natus optio placeat." +
          " In nihil pariatur plac",
      text_align_team: 'end',
      text_align_history: 'end',
      text_align_vision: 'end',
      text_align_partners: 'end',
      text_align_license: 'end',
      text_align: 'center',
      menu_content: '   <h1>Partners</h1> <br> <p style="line-height:32px">   Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum ex illum ipsa ipsam natus optio placeat. In nihil pariatur placeat voluptas. Corporis labore modi necessitatibus perferendis.' +
          '          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum ex illum ipsa ipsam natus optio placeat. In nihil pariatur placeat voluptas. Corporis labore modi necessitatibus perferendis.</p> ',
      partner_text: '   <h1>Partners</h1> <br> <p style="line-height:32px">    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum ex illum ipsa ipsam natus optio placeat. In nihil pariatur placeat voluptas. Corporis labore modi necessitatibus perferendis.\n' +
          '          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum ex illum ipsa ipsam natus optio placeat. In nihil pariatur placeat voluptas. Corporis labore modi necessitatibus perferendis.</p>',

      location_text: '    <h1>Location</h1> <br> <p style="line-height:32px">  We are located in Address. We serve Ontario, Quebec and environs.</p>',
      contact_text: '    <h1>Contact</h1> <br> <p style="line-height:32px">     Our customer service is always available. You can <a href="#">Send us an email</a> or <a href="#">Call us</a>. You can also nook am appointment</p>',
      licenses_text: '  <h1>License</h1> <br> <p style="line-height:32px">      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum ex illum ipsa ipsam natus optio placeat. In nihil pariatur placeat voluptas. Corporis labore modi necessitatibus perferendis.\n' +
          '          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum ex illum ipsa ipsam natus optio placeat. In nihil pariatur placeat voluptas. Corporis labore modi necessitatibus perferendis.</p>'
    }
  },
  methods:  {
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
    margin: 10vh auto 5vh;

    .team_member_info {
      background: $textColor;
      width: 50%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

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
    flex-direction: row;
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
      border-right: 1.5rem solid $highlight;

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
      border: 3px solid blue;
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
</style>

