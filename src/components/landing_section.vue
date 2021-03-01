<template>
  <div id="container">
    <div class="landing">
      <div class="landing">
        <img :src="boardImage" alt="">
      </div>
      <div class="landing_text">
        <h1>{{ title }} </h1>
        <p>
          {{ text }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'landingPage',
  components: {},
  data: function () {
    return {
     }
  },
  props: {
    boardImage: {
      default: require('../assets/Images/slide5.png'),
      required: true
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: false
    },
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

.landing {
  position: relative;

  img {
    filter: blur(1px);
    -webkit-filter: blur(1px);
    max-width: 100%;
    width: 100%;

  }

  .landing_text {
    position: absolute;
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.8); /* Black w/opacity/see-through */
    color: white;
    border: 3px solid #f1f1f1;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    padding: 20px;
    text-align: center;

    h1 {
      font-size: 60px;
    }

    p {
      line-height: 32px;
      opacity: 0.8;
    }
  }
}

@media (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2) {
  .landing {
    img {
      height: 200px;
    }

    .landing_text {
      top: 60%;
      width: 100%;
      padding: 10px;

      h1 {
        font-size: 30px;
      }
    }
    p{

    }
  }

}

@media (min-width: 768px) and (max-width: 1024px)  and (-webkit-min-device-pixel-ratio: 2) {
  .landing {
    img {
      height: 300px;
    }

    .landing_text {
      top: 60%;
      width: 60%;
      padding: 10px;

      h1 {
        font-size: 30px;
      }
    }
    p{

    }
  }

}
</style>