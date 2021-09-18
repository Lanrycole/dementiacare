<template>
  <div id="container">
    <div class="message">
      <div class="modal_header">
        <h3 v-html="modal_title ">{{ modal_title }}</h3>
        <p v-on:click="closeModal">close</p>
      </div>

      <p v-html="modal_text " >{{ modal_text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modal_title: {
      required: true,
      type: String
    },
    modal_text: {
      required: true,
      type: String
    }

  },
  data(){
    return{
      showModal:false,
    }

  },
  methods:{
    closeModal(){
      this.showModal = false
    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";
@import "./src/assets/Buttons/buttons";
@import url('https://fonts.googleapis.com/css2?family=Rozha+One&display=swap');

#container {
  position: absolute;
  bottom: 200px;
  left: 250px;
  width: 70%;
  background: $textColor;
  border-radius: 8px;
  box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
  transition: 0.5s ease-in-out;
  .message {
    padding: 40px;

    .modal_header {
      display: flex;
      justify-content: space-between;

      p {
        font-weight: bolder;
        border-bottom: 2px solid $secondaryColor;
        padding: 0;
        cursor: pointer;

      }
    }
  }
}

</style>