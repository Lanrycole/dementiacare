<template>
  <div id="container">
    <div class="info">
      <div class="info_title">
        <h3 v-html="info_title">{{ info_title }}</h3>
      </div>
      <div class="info_text">

        <div v-html="info_text">{{ info_text }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "policiesetall",

  props: {
    info_title: {
      required: true,
      type: String
    },
    info_text: {
      required: true,
      type: String
    }
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
#container{
  margin:20vh auto;
  width:80%;

  .info {
    .info_title {
      padding:20px;
    }
    .info_text {
      line-height:35px;
      font-size:16px;
      padding:20px;
    }
  }

}
@media (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2){
  #container {
    margin: 20vh auto;
    width: 100%;

    .info {
      .info_title {
        padding: 10px;
      }

    }
  }

}
</style>