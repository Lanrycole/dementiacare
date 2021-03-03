<template>
  <div id="container">
    <div class="hot_link">
      <div class="call_us">
        <img src="../assets/Images/contact-us.svg" alt="call">
        <br>
        <br>
        <br>
        <p>
          <a href="tel:6479092011">Call Us</a>
        </p>

      </div>
      <div class="book_us">
        <img src="../assets/Images/book.svg" alt="calendar">
        <p>
          <router-link :to="{name: 'Contact'}" class="router-link" exact v-scroll-to="'#book'">Book An Appointment</router-link>
        </p>
      </div>
      <div class="join_uS">
        <img src="../assets/Images/resume.svg" alt="">
        <p>
          <router-link :to="{name: 'Joinus'}" class="router-link" exact  v-scroll-to="'#book'">Join Us</router-link>

        </p>

      </div>
    </div>
    <div class="frame">
      <iframe width="100%" height="300" id="gmap_canvas" title="gmap"
              src="https://maps.google.com/maps?width=595&amp;height=490&amp;hl=en&amp;q=%20London+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>

    <div class="footer">
      <div class="footer_menu">
        <div class="menu_lst">
          <h2>Menu</h2>
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
                <router-link :to="{name: 'Contact'}" class="router-link" exact>Contact</router-link>
              </li>
              <li>
                <router-link :to="{name: 'JoinUs'}" class="router-link" exact>Join Us</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu_lst">
          <h2>External Link</h2>
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
                <router-link :to="{name: 'JoinUs'}" class="router-link" exact>Join Us</router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="menu_lst">
          <h2>Social Media</h2>
          <div class="nav_items">
            <ul>
              <li>
                <a href="https://www.instagram.com/diversified.dementia/" target="_blank"><img
                    src="https://img.icons8.com/fluent/28/ffffff/instagram-new.png" alt="instagram"/></a>

              </li>
              <li>
                <a href="https://www.facebook.com/Diversified-Dementia-Care-107213841327774/"><img
                    src="https://img.icons8.com/fluent/28/ffffff/facebook-new.png" alt="facebook"/>
                </a>
              </li>

            </ul>
          </div>
        </div>
        <div class="menu_lst">
          <h2>Career</h2>
          <div class="nav_items">
            <ul>
              <li>
                <router-link :to="{name: 'Joinus'}" class="join_us" exact>Apply for a job</router-link>

              </li>
              <li>
                <router-link :to="{name: 'Contact'}" class="router-link" exact  v-scroll-to="'#book'">Check status of Application</router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped lang="scss">
@import "./src/assets/Colors/colors";
@import "./src/assets/Fonts/fonts";

#container {

  .footer {
    .footer_menu {
      background: $headerColor;
      padding: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 20px;

      .menu_lst {
        margin: 0 auto;
        text-align: start;

        h2 {
          color: $textColor;
          font-weight: bolder;
          font-size: 30px;
        }

        .nav_items {
          ul {
            list-style: none;
            color: $textColor;

            li {
              list-style: none;
              color: $highlight;
              padding: 10px;
              cursor: pointer;

              &:hover {
                color: $secondaryColor;
              }

              a {
                color: $highlight;
                text-decoration: none;
              }

              .router-link {
                list-style: none;
                color: $highlight;
                text-decoration: none;

                &:hover {
                  color: $secondaryColor;
                }

              }
            }
          }
        }
      }

    }
  }

  .hot_link {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    text-align: center;
    padding: 10px;
    cursor: pointer;

    div {
      padding: 20px;

      img {
        width: 180px;
      }

      p {
        font-weight: bolder;
        cursor: pointer;
        a{
          color: $headerColor;
          &:hover{
            color: $secondaryColor;
          }
        }

      }

      &:hover {
        transition: 0.3s linear;
      }
    }

  }

}

@media (max-width: 599px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .hot_link {
      grid-template-columns: 1fr;
      grid-gap: 5px;

      div {
        margin: 5vh auto;
        padding: 10px;

        img {
          max-width: 100%;
        }
      }
    }

    .footer {
      .footer_menu {

        padding: 10px;
        grid-template-columns: 1fr !important;
        grid-gap: 10px;

        .menu_lst {
          width: 100%;

          .nav_items {
            text-align: start !important;

            ul {
              list-style: none;
              color: $textColor;

              li {
                list-style: none;
                color: $highlight;
                padding: 10px;
                cursor: pointer;
              }
            }
          }
        }

      }
    }
  }
}

@media (min-width: 768px) and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 2) {
  #container {
    .footer {
      .footer_menu {

        padding: 10px;

        grid-gap: 10px;

        .menu_lst {
          width: 100%;

          .nav_items {
            text-align: start !important;

            ul {
              list-style: none;
              color: $textColor;

              li {
                list-style: none;
                color: $highlight;
                padding: 10px;
                cursor: pointer;
              }
            }
          }
        }

      }
    }
  }
}
</style>