<template>
  <div id="container">
    <div class="dropdown">
      <div class="dropdown_header" @click="toggleDropDown">
        <img :src="icon" alt="arrow right" height="22px"/>
        <h3>{{ dropdown_header }}</h3>
      </div>
      <div class="dropdown_text" v-if="dropdown">
        <p v-html="dropdown_text">{{ dropdown_text }}</p>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: "dropdown",
  data() {
    return {
      dropdown: false,
      icon: "https://img.icons8.com/material-rounded/20/000000/long-arrow-right.png"
    }
  },
  methods: {
    toggleDropDown() {
      if (this.icon === "https://img.icons8.com/material-rounded/20/000000/long-arrow-right.png") {
        this.icon = "https://img.icons8.com/material-two-tone/24/000000/down--v1.png "

      }else{
        this.icon = "https://img.icons8.com/material-rounded/20/000000/long-arrow-right.png"
      }
      this.dropdown = !this.dropdown;
    },
    closeDropDown() {
      this.dropdown = false;
    }
  },
  props: {
    dropdown_header: {
      required: true,
      type: String,
    },
    dropdown_text: {
      required: true,
      type: String,
    },

  }
}
</script>

<style scoped lang="scss">
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
  .dropdown {
    padding: 20px;
    width: 50%;
    text-align: center;
    margin: 1vh auto;
    background: $textColor;
    border-radius: 6px;

    .dropdown_header {
      display: flex;
      justify-content: start;
      cursor: pointer;

      h3 {
        margin-left: 10px;
      }
      img{
       transition: 0.5s ease-in-out;
      }
    }

    .dropdown_text {
      padding: 15px;
      text-align: start;

      p {
        line-height: 37px;
      }

      .close {
        display: flex;
        width: 100%;
        justify-content: center;
        margin: 2vh auto 0;

        #close_window {
          cursor: pointer;
          border-radius: 2rem;
          border: 1px solid $highlight;
          width: 120px;
          padding: 4px;
          transition: 0.5s;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);

          &:hover {
            color: $textColor;
            background: $highlight;
          }

        }
      }

    }
  }
}
@media (max-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  #container{
    .dropdown {
      padding: 10px;
      width: 90%;

    }
  }
}
@media (min-width: 375px) and (max-width: 667px) and (-webkit-min-device-pixel-ratio: 2) {
  #container{

    .dropdown {
      padding: 10px;
      width: 90%;
      .dropdown_header {


        h3 {
          margin-left: 10px;
          font-size:16px;
        }
      }
    }
  }
}
@media (min-width: 411px) and (max-width: 823px) and (-webkit-min-device-pixel-ratio: 2) {
  #container{
    .dropdown {
      padding: 10px;
      width: 90%;

    }
  }
}
@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container{
    .dropdown {
      padding: 10px;
      width: 90%;

    }
  }

}
</style>