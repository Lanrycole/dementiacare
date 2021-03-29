<template>

  <div id="container">
    <div class="about">
      <div class="about_img_mobile">
        <img src="../assets/Images/theteam.jpeg" alt="team">
      </div>
      <div class="about_text" data-aos="fade-up"
           data-aos-duration="2000">
        <h1>Dementia consultation</h1>
        <p>
          We specialize in providing temporary employments or continuous nursing staffing to long term care homes,
          Home care, Hospitals, Retirements homes and Community and Residential care homes.
          We provide a consultation service that includes dementia information, advice and support services to
          individuals and families of people living with dementia. We also provides consultation and advisory services
          to service providers and actively contributes to
          developing a service sector that is responsive to and can meet the needs of people living with dementia and
          younger onset dementia. <br>
          Our consultation services provides proactive follow-up after diagnosis with information and support by
          carrying out needs assessment,
          goal setting and developing a person-centered care plan that focuses on supporting individuals living with
          dementia.
        </p>

        <p>
          Dementia care training, education, and programming should not be one-size-fits-all. We work with individuals
          and companies to assess their individual needs and provide truly person-centered and company-centered
          services. We are a growing company that aims to provide exceptional, evidence-based dementia care to
          individuals with dementia. <br> We are always looking for new ways to collaborate with
          a variety of professionals across Canada.
          <br>
          Currently, we are welcoming community partnership opportunities from assisted living and dementia communities
          who provide exceptional care to residents with dementia.
        </p>

      </div>
    </div>
    <div class="team_member " data-aos="fade-up"
         data-aos-duration="1500">
      <div class="team_member_info">
        <div class="team_member_img">
          <img src="../assets/Images/team.jpeg" alt="">
        </div>
        <div class="team_member_desc">
          <h2>Meet the Team</h2>
          <p>
            We are a team of dedicated Health care professionals . We take pride in providing exceptional care.
            Our organization team of staff include:
          </p>

          <p><strong>Dementia Care specialist</strong></p>
          <p><strong>Registered Nurses</strong></p>
          <p><strong>Registered Practical Nurses</strong></p>

          <p><strong>Care Managers</strong></p>
          <p><strong>Personal Support Workers</strong></p>

          <p><strong>Talent Acquisition</strong></p>

          <div class="team_member_desc_btn">
            <Button type="button" class="btn1">
              <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#contact'">Contact
              </router-link>
            </Button>

          </div>
        </div>
      </div>

    </div>

    <div class="dropdown">
      <dropdown :dropdown_header="support_org" :dropdown_text="support_org_text"/>
      <dropdown :dropdown_header="philosophy_header" :dropdown_text="philosophy_text"/>
      <dropdown :dropdown_header="consultants_header" :dropdown_text="consultants_text"/>
      <dropdown :dropdown_header="staffing_header" :dropdown_text="staffing_text"/>
      <dropdown :dropdown_header="enabling_header" :dropdown_text="enabling_text"/>
      <dropdown :dropdown_header="coming_soon_header" :dropdown_text="coming_soon_text"/>

    </div>
    <div class="about_us_menu ">
      <div class="left_section">
        <div class="left_menu">
          <ul>
            <li @click="toggleMessage(partner_text); align_partners()" :style="{'text-align': text_align_partners}">
              Partners
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
      <h2>Why choose us ?</h2>
      <div class="infos">
        <div class="info" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
          <div class="info_img">
            <img src="../assets/Images/nurse1.jpg" alt="">
          </div>
          <div class="info_text">
            <h2>Professionals</h2>
            <p>
              We have a large database of highly trained and experienced PSW, RPN, RN and nursing aides’
              staff that are available all times (24/7) and ready to provide adequate compassionate care when needed
            </p>
          </div>
        </div>
        <div class="info" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
          <div class="info_img">
            <img src="../assets/Images/reliable.jpeg" alt="">
          </div>
          <div class="info_text">
            <h2>We are Reliable</h2>
            <p>
              We continue to strive at providing our clients the best candidates for their homes
            </p>
          </div>

        </div>
        <div class="info" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
          <div class="info_img">
            <img src="../assets/Images/nurse3.jpg" alt="nurse">
          </div>
          <div class="info_text">
            <h2>We continue to Improve </h2>
            <p>
              Our confidence in providing excellent care and health professionals relies on our continuous education.

            </p>
          </div>
        </div>
        <div class="info" data-aos="fade-up"
             data-aos-anchor-placement="top-bottom">
          <div class="info_img">
            <img src="../assets/Images/training.jpeg" alt="trainning">
          </div>
          <div class="info_text">
            <h2>Training System</h2>
            <p>
              We provide our staff with a large variety of mandatory training and continuous professional developments
              that set them up for success in their roles. Our training system provides our staff evidence-based
              practices
              and guidelines that they can always access any time anywhere.
            </p>
          </div>
        </div>
      </div>

    </div>
    <div class="staffing">
      <staffing_cat/>
    </div>

    <div class="review">
      <Review/>
    </div>
  </div>
</template>
<script>

import Review from '@/components/reviews_comp'
import staffing_cat from '@/components/staffing_areas'
import dropdown from '@/components/dropdown'


export default {
  name: 'About',
  components: {
    staffing_cat,
    Review,
    dropdown,
  },
  data: function () {
    return {
      support_org: 'How do we support organizations?',
      support_org_text: 'The partnership team will work alongside community care partners to assist in the identification of areas to further develop and improve support to individuals  living with dementia.\n' +
          'Emphasis will be on key areas of client support such as assessment, person-centered approaches, enablement, wellness, dementia enabling environments and career support.\n' +
          '<br>' +
          ' <strong>Activities:</strong> ' +
          '<br>• Coaching and Mentoring' +
          '<br>• Consultancy Services' +
          '<br>• Education and Training' +
          '<br>• Community Dementia Champions' +
          '<br>• Community support organizations can nominate staff to become Community Dementia Champions <br>' +
          '<strong>Benefit of our training:</strong>' +
          '<br>• Improved staff retention and staff satisfaction\n' +
          '<br>• Improved resident satisfaction' +
          '<br>• Decreased use of medication and other psychotropic interventions\n' +
          '<br>• Improved wellbeing for all' +
          '<br>• Increased involvement with wider community and relatives groups\n' +
          '<br>• Improved reputation within the community\n' +
          '<br>• Overall improvement in an organization’s financial position.\n',

      philosophy_header: "Our philosophy",
      philosophy_text: "Our philosophy of care embraces a person-centered approach that respects the individuality and the experience of those living with dementia.\n'" +
          "We aim to help you to remain living at home for as long as possible. <br>" +
          "Our dementia specialist and care managers work with you to understand your needs and help you navigate through the home care package process. \n" +
          "Should you choose DDC as your home care provider, your care manager will help you through the process of signing your <strong>home care agreement.\n</strong>" +
          "Together, we will help you design a personalized care plan that will meet your daily needs and also ensures your " +
          "utmost wellbeing. ",

      enabling_header: "Enabling Home",
      enabling_text: "Based around our Enabling home environment program, our dementia care specialist team will" +
          " provide an evidence-based environment assessment and recommendations  that seeks to maximize the independence of the persons living with dementia at their home. ",
      consultants_header: " Our Consultants",
      consultants_text: "Our consultants apply evidence-based knowledge, objective assessment techniques, " +
          "a collaborative approach and a passion to improve the quality of life of older people and people with dementia. We use proven-in-practice knowledge," +
          "professional expertise and experience for challenging situations, leading clients to new insights and innovative solutions.  <br>" +
          "We operate in a diverse range of care contexts including and not limited to:" +
          " <br>• Homes of older people and people living with dementia\n" +
          " <br>• Community and social clubs\n" +
          " <br>• Respite care programs\n" +
          " <br>• Residential aged care\n" +
          " <br>• Hospitals" +
          "<br>Contact us if you are open to decreasing resident discharge and use of psychotropic medications, while improving staff retention and satisfaction.",
      staffing_header: "Staffing and Recruitments ",
      staffing_text: "DDC specialize in providing temporary employments or continuous nursing staffing to long term care homes, Home care, Hospitals, Retirements homes and Community " +
          "and Residential care homes  ",
      coming_soon_header: "Coming Soon",
      coming_soon_text: "Our Dementia Centre, where we will offer a range of consultancy services on many aspects of caring for older people and people living with dementia.\n" +
          "The service we will be providing at the day program center will include:\n" +
          "\n" +
          " <br> Cognitive stimulation therapy,\n" +
          "<br> Reminiscence Therapy\n" +
          "<br> Positive Snoezelen rooms, a multi-sensory stimulation therapy \n" +
          "<br>  Therapeutic activities\n" +
          "<br>  Sport engagements \n" +
          "<br> Our daily programs will provide the family a short break while also providing an enriching experience for the person living with dementia.\n",

      icon: 'https://img.icons8.com/fluent-systems-regular/30/000000/low-importance.png',
      landingImg: require('../assets/Images/staffing_header.png'),
      tittle: "About Us",
      // text: " Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusantium culpa cupiditate earum ex illum ipsa ipsam natus optio placeat." +
      //     " In nihil pariatur plac",
      text_align_team: 'end',
      text_align_history: 'end',
      text_align_vision: 'end',
      text_align_partners: 'end',

      text_align: 'center',
      menu_content: '   <h1 style="margin:0; padding:0;">Partners</h1> <br> <p style="line-height:32px "> The Dementia Care Partnership Program aims to enhance the experience of all involved and to also improve the quality of life of people living with dementia in their community when accessing support services.\n' +
          'The project’s primary aim is to build capacity within the community care sector in a variety of ways, with a focus on assisting community care providers and healthcare professionals to further develop their skills when responding to the needs of people living with dementia.\n </p> ',
      partner_text: '   <h1>Partners</h1> <br> <p style="line-height:32px"> The Dementia Partnership Project aims to enhance the experience of all involved and to also improve the quality of life of people living with dementia in their community when accessing support services.\n' +
          'The project’s primary aim is to build capacity within the community care sector in a variety of ways, with a focus on assisting community care providers and healthcare professionals to further develop their skills when responding to the needs of people living with dementia.\n',

      location_text: '    <h1>Location</h1> <br> <p style="line-height:32px">  2230 Blackwater Road London, ON N5X0L1.</p>',
      contact_text: "   <h1>Contact</h1> <br> <p style='line-height:32px'> You can <a href='tel:6479092011' >call </a>  or send us an <a href='mailto:info@diversifieddementiacare.com'>send an email. </a>. We are also available on our various social media platforms  <span style='border-bottom: 2px solid #F39E1C'>@diversifieddementiacare</span></p>",
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
  .about {
    margin: 10vh auto 5vh;
    background: url("../assets/Images/theteam.jpeg") fixed center/cover no-repeat;
    //background-size: cover;
    padding: 120px;

    .about_img_mobile {
      display: none;
    }

    .about_text {
      margin: 20vh auto;
      background: $textColor;
      padding: 40px;
      box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
      border-radius: 6px;

      p {
        line-height: 40px;
        margin: 20px;
      }

      h1 {
        border-bottom: 2px solid $secondaryColor;
        width: 30%;
        margin: 20px;
        font-size: 26px;
      }
    }
  }


  .team_member {

    margin: 15vh auto 5vh;
    //background: url("../assets/Images/compLogo.svg") no-repeat fixed center;
    //background-size: cover;

    .team_member_info {
      background: $textColor;
      width: 80%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;

      //box-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
      .team_member_img {
        padding: 0;
        margin: 0;

        img {
          width: 100%;
          height: 100%;

        }
      }

      .team_member_desc {
        padding: 10px;
        margin-top: 2vh;

        h2 {
          font-size: 35px;
          color: $headerColor;
          border-bottom: 2px solid $secondaryColor;
          width: 60%;
        }

        h4 {
          opacity: 0.7;
          font-size: 26px;
          margin-top: 1vh;
        }

        p {
          line-height: 30px;
          padding: 10px;
        }

        hr {
          text-align: start;
          width: 40%;
        }

        .team_member_desc_btn {
          text-align: end;


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


  .about_us_menu {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 12vh auto 0;

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

  .more_info {
    margin: 10vh auto 0;
    padding: 40px;
    background: $textColor;

    h2 {
      text-align: center;
      font-size: 40px;
    }


    .infos {
      margin-top: 5vh;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 20px;

      .info {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 5px;
        background: white;

        img {
          width: 410px;
          height: 100%;

        }

        .info_text {
          line-height: 32px;
          padding: 20px;

          h2 {
            margin-top: 2vh;
            font-size: 30px;
            opacity: 0.8;
            text-align: start;

            &::selection {
              background: $secondaryColor;
            }
          }

          p {
            margin-top: 2vh;
            opacity: 0.8;
            line-height: 34px;

            &::selection {
              background: $secondaryColor;
            }
          }
        }
      }
    }

  }
}


@media (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {

  #container {
    .about {
      margin: 2vh auto;
      background: url("../assets/Images/theteam.jpeg") center/cover no-repeat;
      padding: 10px;

      .about_text {
        margin: 50vh auto;
        background: $textColor;
        padding: 10px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        border-radius: 6px;

        p {
          line-height: 35px;
          margin: 10px;
        }

        h1 {
          border-bottom: 2px solid $secondaryColor;
          width: 100%;
          margin: 20px auto;
          font-size: 30px;
        }
      }
    }

    .team_member {
      margin: 1vh auto 5vh;

      .team_member_info {
        background: $textColor;
        width: 90%;
        grid-template-columns: 1fr;

        .team_member_img {
          padding: 0;
          margin: 0;

          img {
            max-width: 100%;
          }
        }

        .team_member_desc {
          h2 {
            width: 60%;
            font-size: 30px;
          }
        }
      }

    }

    .about_us_menu {
      padding: 0 !important;
      margin: 10vh auto !important;
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
      padding: 5px;

      h2 {
        font-size: 30px;
      }

      .infos {
        margin-top: 0.5vh;
        grid-template-columns: 1fr !important;
        grid-gap: 10px;
        padding: 10px !important;

        .info {
          grid-template-columns: 1fr !important;
          grid-gap: 5px;


          img {
            width: 100%;

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

}

@media (min-width: 411px) and (max-width: 823px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .about {
      margin: 2vh auto;
      background: none;
      padding: 10px;
      .about_img_mobile {
        display: block;
        width: 100%;
margin-top: 2vh;
        img {
          width: 100%;
          padding: 0;
          margin: 0;
        }
      }
      .about_text {
        margin: 10vh auto;
        background: $textColor;
        padding: 10px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        border-radius: 6px;

        p {
          line-height: 35px;
          margin: 10px;
        }

        h1 {
          border-bottom: 2px solid $secondaryColor;
          width: 100%;
          margin: 20px auto;
          font-size: 26px;
        }
      }
    }

    .team_member {
      margin: 1vh auto 5vh;

      .team_member_info {
        background: $textColor;
        width: 90%;
        grid-template-columns: 1fr;

        .team_member_img {
          padding: 0;
          margin: 0;

          img {
            max-width: 100%;
          }
        }

        .team_member_desc {
          h2 {
            width: 60%;
            font-size: 30px;
          }
        }
      }

    }

    .about_us_menu {
      padding: 0 !important;
      margin: 10vh auto !important;
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
      padding: 5px;

      h2 {
        font-size: 30px;
      }

      .infos {
        margin-top: 0.5vh;
        grid-template-columns: 1fr !important;
        grid-gap: 10px;
        padding: 10px !important;

        .info {
          grid-template-columns: 1fr !important;
          grid-gap: 5px;


          img {
            width: 100%;

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
}

@media (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .about {
      margin: 2vh auto;
      background: none;
      padding: 10px;
width: 100%;
      .about_img_mobile {
        display: block;
        width: 100%;
        margin-top: 2vh;
        img {
          width: 100%;
          padding: 0;
          margin: 0;
        }
      }

      .about_text {
        margin: 4vh auto;
        background: $textColor;
        padding: 10px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        border-radius: 6px;

        p {
          line-height: 35px;
          margin: 10px;
        }

        h1 {
          border-bottom: 2px solid $secondaryColor;
          width: 100%;
          margin: 20px auto;
          font-size: 26px;
        }
      }
    }

    .team_member {
      margin: 1vh auto 5vh;

      .team_member_info {
        background: $textColor;
        width: 90%;
        grid-template-columns: 1fr;

        .team_member_img {
          padding: 0;
          margin: 0;

          img {
            max-width: 100%;

          }
        }

        .team_member_desc {
          h2 {
            width: 90%;

            font-size: 26px;
          }
        }
      }

    }

    .about_us_menu {
      padding: 0 !important;
      margin: 10vh auto !important;
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
      padding: 5px;

      h2 {
        font-size: 26px;
      }

      .infos {
        margin-top: 0.5vh;
        grid-template-columns: 1fr !important;
        grid-gap: 10px;
        padding: 10px !important;

        .info {
          grid-template-columns: 1fr !important;
          grid-gap: 5px;


          img {
            width: 100%;

          }

          .info_text {
            h2 {
              margin-top: 0 !important;
              font-size: 20px;
            }
          }

        }
      }

    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .about {
      margin: 10vh auto 5vh;
      padding: 20px;
      .about_img_mobile {
        display: block;
        width: 100%;
        margin-top: 2vh;
        img {
          width: 100%;
          padding: 0;
          margin: 0;
        }
      }
      .about_text {
        margin: 20vh auto;
        background: $textColor;
        padding: 20px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        border-radius: 6px;

        p {
          line-height: 40px;
          margin: 20px;
        }

        h1 {
          border-bottom: 2px solid $secondaryColor;
          width: 90%;
          margin: 20px;
          font-size: 26px;
        }
      }
    }

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
      margin: 10vh auto !important;
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
      margin: 10vh auto 5vh;
      padding: 10px;
      background: $textColor;

      h2 {
        text-align: center;
        font-size: 40px;
      }


      .infos {
        margin-top: 5vh;


        .info {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 5px;
          background: white;

          img {
            width: 100%;

          }

          .info_text {
            line-height: 32px;
            padding: 20px;

            h2 {
              margin-top: 2vh;
              font-size: 30px;
              opacity: 0.8;
              text-align: start;

              &::selection {
                background: $secondaryColor;
              }
            }

            p {
              margin-top: 2vh;
              opacity: 0.8;
              line-height: 34px;

              &::selection {
                background: $secondaryColor;
              }
            }
          }
        }
      }

    }
  }
}

@media (min-width: 1024px) and (max-width: 1366px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .about {
      margin: 10vh auto 5vh;
      background: url("../assets/Images/theteam.jpeg") no-repeat fixed center;
      background-size: cover;
      padding: 20px;

      .about_text {
        margin: 20vh auto;
        background: $textColor;
        padding: 20px;
        box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
        border-radius: 6px;

        p {
          line-height: 40px;
          margin: 20px;
        }

        h1 {
          border-bottom: 2px solid $secondaryColor;
          width: 60%;
          margin: 20px;
        }
      }
    }

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
      margin: 10vh auto !important;
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
      margin: 10vh auto 5vh;
      padding: 10px;
      background: $textColor;

      h2 {
        text-align: center;
        font-size: 40px;
      }


      .infos {
        margin-top: 5vh;


        .info {
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 5px;
          background: white;

          img {
            width: 100%;

          }

          .info_text {
            line-height: 32px;
            padding: 20px;

            h2 {
              margin-top: 2vh;
              font-size: 30px;
              opacity: 0.8;
              text-align: start;

              &::selection {
                background: $secondaryColor;
              }
            }

            p {
              margin-top: 2vh;
              opacity: 0.8;
              line-height: 34px;

              &::selection {
                background: $secondaryColor;
              }
            }
          }
        }
      }

    }
  }
}


</style>

