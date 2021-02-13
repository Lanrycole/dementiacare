<template>
  <div id="container">
    <div class="hiring">
      <p>We are hiring</p>
    </div>

    <div id="desktop_nav" :class="{db: scrollPosition>800}">

      <div class="nav_logo">
        <img src="https://img.icons8.com/fluent/24/000000/facebook-new.png"/>
      </div>

      <div class="nav_items">
        <ul>
          <li>
            <router-link :to="{name: 'Home'}" class="router-link" exact>Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'About'}" class="router-link" exact>About</router-link>
          </li>
          <li>
            <router-link :to="{name: 'Services'}" class="router-link" exact>Services</router-link>

          </li>
          <li>
            <router-link :to="{name: 'Clients'}" class="router-link" exact>Clients</router-link>

          </li>
          <li>
            <router-link :to="{name: 'Contact'}" class="router-link" exact>Contact</router-link>
          </li>
          <li>
            <router-link :to="{name: 'JoinUs'}" class="router-link join_us" exact>Join Us</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "desktopNav",
  data() {
    return {
      scrollPosition: 0,
    }
  },
  methods: {
    updateScroll() {
      this.scrollPosition = window.scrollY
    },

  },
  mounted() {
    window.addEventListener('scroll', this.updateScroll);

  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;

  .db {
    background: $highlight !important;
    transition: ease-out 0.3s;
    .nav_items {
      text-align: center;
      width: 60%;
      ul {
        li {
          display: inline-block;
          list-style: none;
          text-decoration: none;
          margin: 20px;

          .router-link {
            text-decoration: none;
            color: $headerColor !important;

            &:hover {
              border-bottom: 1px solid $headerColor !important;
            }
          }
          .join_us {
            background-color: $headerColor !important;
            padding: 15px;

          }
        }
      }
    }

    border-bottom: 4px solid $headerColor !important;
  }

  .hiring {
    background: $secondaryColor;
    padding: 12px;
    text-align: end;
    font-size: 20px;
    font-weight: bolder;
    color: $textColor;

    p {
      margin-right: 40px;
    }
  }

  #desktop_nav {
    background: $headerColor;
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-align: center;
    color: $textColor;
    padding: 10px;
    border-bottom: 4px solid $highlight;

    .nav_logo {
      width: 30%;
      text-align: start;
    }

    .nav_items {
      text-align: center;
      width: 60%;

      ul {
        li {
          display: inline-block;
          list-style: none;
          text-decoration: none;
          margin: 20px;

          .join_us {
            background: $secondaryColor !important;
            padding: 31px;

          }

          .router-link {
            text-decoration: none;
            color: $textColor;


            &:hover {
              border-bottom: 1px solid $highlight;
            }
          }
        }
      }
    }
  }
}
</style>