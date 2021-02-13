<template>
  <div id="mobile_container">
    <div id="mobile_nav">
      <div class="nav_logo">
        <img src="https://img.icons8.com/fluent/24/000000/facebook-new.png"/>
      </div>

      <div class="menu_icon">
        <img :src="menu_icon" @click="toggleMenu"/>
      </div>
    </div>
    <div class="nav_items" :class="{expandMenu : !showMenu}">

      <ul>
        <li @click="toggleMenu">
          <router-link :to="{name: 'Home'}" class="router-link" exact>Home</router-link>
        </li>
        <li @click="toggleMenu">
          <router-link :to="{name: 'About'}" class="router-link" exact>About</router-link>
        </li>
        <li @click="toggleMenu">
          <router-link :to="{name: 'Services'}" class="router-link" exact>Services</router-link>

        </li>
        <li @click="toggleMenu">
          <router-link :to="{name: 'Clients'}" class="router-link" exact>Clients</router-link>

        </li>
        <li @click="toggleMenu">
          <router-link :to="{name: 'Contact'}" class="router-link" exact>Contact</router-link>

        </li>
        <li @click="toggleMenu">
          <router-link :to="{name: 'JoinUs'}" class="router-link" exact>Join Us</router-link>
        </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: "mobileNav",
  data() {
    return {
      showMenu: true,
      menu_icon: 'https://img.icons8.com/fluent-systems-regular/24/ffffff/menu--v3.png'
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (this.menu_icon === 'https://img.icons8.com/fluent-systems-regular/24/ffffff/menu--v3.png') {
        this.menu_icon = 'https://img.icons8.com/windows/24/ffffff/macos-close.png'
      } else {
        this.menu_icon = 'https://img.icons8.com/fluent-systems-regular/24/ffffff/menu--v3.png'
      }

    }
  }
}
</script>

<style scoped lang="scss">
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


#mobile_nav {
  display: none;
}


@media (max-width: 599px) {

  #mobile_container {
    #mobile_nav {
      background: $headerColor;
      color: $textColor;
      width: 100%;
      z-index: 1;
      padding: 10px 10px 10px;
      display: flex;
      justify-content:space-between;

      .menu_icon {
        cursor: pointer;

        img {
          cursor: pointer;
        }
      }

    }

    .nav_items {
      background: $headerColor;
      height: 0;
      position: fixed;
      width: 100%;
      overflow-x: hidden;
      transition: 0.9s;
      z-index: 2;

      ul {
        margin-top: 40px;

        li {
          padding: 10px;

          .router-link {
            text-decoration: none;
            font-family: $navFont;
            text-align: start;
            list-style: none;
            letter-spacing: 2px;
            font-size: 50px;
            font-weight: bolder;
            color: $textColor;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            width: 70%;

            &:hover {
              border-bottom: 2px solid $highlight;
            }
          }
        }
      }

    }

    .expandMenu {
      height: 100% !important;
    }
  }

}
</style>