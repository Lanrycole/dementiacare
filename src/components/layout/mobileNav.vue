<template>
  <div id="mobile_container">
    <div id="mobile_nav">
      <div class="nav_logo">
        <router-link :to="{name: 'Home'}" class="router-link" exact>
          <img src="../../assets/Images/newlogo.png" alt="logo" width="40px"></router-link>
      </div>

      <div class="menu_icon">
<!--        <img :src="menu_icon" @click="toggleMenu" alt="close menu"/>-->
        <p @click="toggleMenu">Menu</p>
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
        <li id="ser" @click="showDropDown">
           <a id="service">Services <img src="https://img.icons8.com/pastel-glyph/24/0F0F34/expand-arrow.png"
                                        alt="arrow down"/></a>
          <div id="dropdown" v-if="dropdown">
            <ul>
              <li data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="100"
                  data-aos-duration="100" @click="toggleMenu">
                <router-link :to="{name: 'Consultation'}" class="router-link dropdown" exact>
                 Consultation
                </router-link>
              </li>
              <li data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="200"
                  data-aos-duration="200" @click="toggleMenu">
                <router-link :to="{name: 'Staffing'}" class="router-link dropdown" exact >Staffing
                </router-link>
              </li>
              <li data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="200"
                  data-aos-duration="200" @click="toggleMenu">
                <router-link :to="{name: 'Training'}" class="router-link dropdown" exact >Training
                </router-link>
              </li>
              <li data-aos="fade-left"
                  data-aos-anchor="#example-anchor"
                  data-aos-offset="300"
                  data-aos-duration="300" @click="toggleMenu">
                <router-link :to="{name: 'Homeservice'}" class="router-link dropdown" exact >Home
                  Services
                </router-link>

              </li>
            </ul>
          </div>
        </li>

        <li @click="toggleMenu">
          <router-link :to="{name: 'Contact'}" class="router-link" exact>Contact</router-link>
        </li>
        <li @click="toggleMenu">
          <router-link :to="{name: 'Joinus'}" class="join_us" exact>Join Us</router-link>
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
      dropdown: false,
      menu_icon: 'https://img.icons8.com/fluent-systems-regular/24/ffffff/menu--v3.png'
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
      if (this.menu_icon === 'https://img.icons8.com/fluent-systems-regular/24/ffffff/menu--v3.png') {
        this.menu_icon = 'https://img.icons8.com/windows/32/ffffff/macos-close.png'
      } else {
        this.menu_icon = 'https://img.icons8.com/fluent-systems-regular/24/ffffff/menu--v3.png'
      }

    },
    showDropDown() {
      this.dropdown = !this.dropdown;
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


@media (max-width: 960px) {

  #mobile_container {
    #mobile_nav {
      background: $textColor;
      color: $headerColor;
      width: 100%;
      z-index: 3;
      padding: 10px 10px 10px;
      display: flex;
      justify-content: space-between;
      position: fixed;
      top: 0;

      .menu_icon {
        cursor: pointer;

        p {
     font-weight: bolder;
        }
      }

    }

    .nav_items {
      background: $textColor;
      height: 0;
      position: fixed;
      width: 100%;
      overflow-x: hidden;
      top: 51px;
      z-index: 2;

      p {
        margin: 30px auto;
        text-align: center;
        position: relative;
        width: 40%;
        padding: 8px;
        border-radius: 6rem;
        background: #57606f;
        color: $textColor;
        transition: .5s ease-in-out;

        img {
          position: absolute;
          top: 10px;
          right: 10px;
          display: none;
        }

        &:hover {
          width: 45%;
          text-align: start;

          img {
            display: block;
          }
        }
      }

      ul {

        margin-left: 20px;
        margin-bottom: 30px;
        list-style: none;
        text-decoration: none;

        li {
          padding: 20px;
          list-style: none;
          text-decoration: none;

          .router-link, a {
            font-weight: bolder;
            list-style: none;
            text-decoration: none;

            color: $headerColor;

          }
        }

        #ser {
          list-style: none;
          text-decoration: none;

          #dropdown {
            margin-left: 20px;

            ul {
              li {
                list-style: none;
                text-decoration: none;
              }


            }
          }

          a {
            position: relative;
            list-style: none;
            text-decoration: none;

            img {
              position: absolute;
              top: 0;
            }
          }

          &:hover {

          }

        }

      }

    }

    .expandMenu {
      height: auto;

    }
  }

}
</style>