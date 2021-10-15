<template>
  <div id="container">
    <div class="hiring" v-if="scrollPosition<300">
      <p><img src="https://img.icons8.com/ios/22/ffffff/apple-phone.png" alt="phone"/> 1(833)564-6332 (EXT 0)</p>
      <p><img src="https://img.icons8.com/windows/22/ffffff/place-marker.png" alt="location"/> London, ON | Toronto, ON </p>
      <p><img src="https://img.icons8.com/material-sharp/22/ffffff/filled-sent.png" alt="email"/>admin@ddchealthservices.com
      </p>
      <p id="hire_p">
        <router-link :to="{name: 'joinus'}" class="join_us" exact v-scroll-to="'#book'"> We are Hiring</router-link>

      </p>

    </div>

    <div id="desktop_nav" :class="{db: scrollPosition>250}">

      <div class="nav_logo">
        <router-link :to="{name: 'home'}" class="router-link" exact v-scroll-to="'#container'">
          <img src="../../assets/Images/newlogo.png" alt="logo" width="80px" v-if="scrollPosition>300"></router-link>
      </div>

      <div class="nav_items">
        <ul>
          <li>
            <router-link :to="{name: 'home'}" class="router-link" exact>Home</router-link>
          </li>
          <li>
            <router-link :to="{name: 'about'}" class="router-link" exact>About</router-link>
          </li>
          <li id="ser">
            <a id="service">
              Services <img src="https://img.icons8.com/pastel-glyph/24/ffffff/expand-arrow.png" alt="arrow down"/></a>
            <div id="dropdown">
              <ul>
                <li data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="100"
                    data-aos-duration="100">
                  <router-link :to="{name: 'consultation'}" class="router-link dropdown">Dementia Consultation</router-link></li>
                <li data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="200"
                    data-aos-duration="200">
                  <router-link :to="{name: 'staffing'}" class="router-link dropdown" exact>Staffing
                  </router-link>
                </li>
                <li data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="300"
                    data-aos-duration="300">
                  <router-link :to="{name: 'training'}" class="router-link dropdown" exact>Training
                  </router-link>
                </li>
                <li data-aos="fade-left"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="300"
                    data-aos-duration="300">
                  <router-link :to="{name: 'homeservice'}" class="router-link dropdown" exact>Home Care
                    Services
                  </router-link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <router-link :to="{name: 'contact'}" class="router-link" exact>Contact</router-link>

          </li>
          <li>
            <router-link :to="{name: 'joinus'}" class="join_us" exact>Join Us</router-link>
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

.db {
  background: white !important;
  transition: .7s ease-out;

}

#container {
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 99;

  .hiring {
    background: $headerColor;
    padding: 10px;
    text-align: end;
    font-size: 16px;
    color: $textColor;
    display: flex;
    justify-content: space-around;
    //border-bottom: 3px solid $highlight;


    p {
      text-align: center;
      position: relative;
      padding-left: 30px;

      img {
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        align-self: center;
      }

      &::selection {
        background: $highlight;
      }

    }

    #hire_p {
      text-align: start;
      position: relative;
      padding: 5px 20px 5px 20px;
      cursor: pointer;
      border-radius: 6rem;
      background: #57606f;
      color: $textColor;
      transition: .5s ease-in-out;

      a {
        text-decoration: none;
        color: $textColor;

      }

    }
  }

  #desktop_nav {
    background: $textColor;
    display: flex;
    width: 100%;
    justify-content: space-between;
    text-align: center;
    padding: 0;
    margin: 0;


    box-shadow: 0 5px 10px rgba(154, 160, 185, .05), 0 15px 40px rgba(166, 173, 201, .2);
    text-transform: uppercase;
    //background: $headerColor;
    //background: white;
    .nav_logo {
      width: 30%;

      text-align: start;

      img {
        display: block;
      }
    }

    .nav_items {
      text-align: center;
      width: 60%;
      position: relative;

      ul {
        top: 0;
        padding: 0;
        margin: 0;

        li {
          display: inline-block;
          list-style: none;
          text-decoration: none;
          margin: 15px;
          padding: 10px;


          .router-link-exact-active {
            color: $secondaryColor !important;

          }

          .join_us {
            //padding: px;
            text-decoration: none;
            color: $headerColor !important;
            overflow: hidden;
            font-weight: 600;
            border-radius: 0;
            background: $secondaryColor;

            &:hover {
              color: $headerColor !important;

            }

          }

          .router-link, a {
            text-decoration: none;
            overflow: hidden;
            font-weight: 600;
            padding: 10px;
            cursor: pointer;
            position: relative;
            color: $headerColor !important;

            img {
              position: absolute;
              top: 09px;
            }

            &::selection {
              background: $highlight;
            }

            &:hover {
              color: $secondaryColor !important;
            }
          }

          #service {
            background: none !important;
          }
        }

        #ser {
          #dropdown {
            position: absolute;
            margin: 10px auto;
            text-align: center;
            background-color: $textColor;
            width: 40%;

            display: none !important;


            ul {
              text-align: start;


              li {
                display: block;

              }

              .router-link {
                text-align: start;
                margin: 0 !important;
                padding: 0 !important;
                color: $headerColor !important;
                &:hover {
                  color: $secondaryColor !important;
                }

              }
            }
          }

          &:hover {
            #dropdown {
              display: block !important;
            }

          }
        }
      }
    }
  }

}


@media (max-width: 1117px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    #desktop_nav {

      .nav_logo {
        width: 10%;
        text-align: start;
      }

      .nav_items {
        text-align: center;
        width: 80%;
        position: relative;

        ul {
          li {
            padding: 2px;

          }

          #ser {
            #dropdown {

              width: 50%;

            }

          }
        }
      }
    }
  }

}
</style>