<template>
  <div id="container">
    <iframe width="1660" height="300" id="gmap_canvas"
            src="https://maps.google.com/maps?width=595&amp;height=490&amp;hl=en&amp;q=%20London+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

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
                <img src="https://img.icons8.com/fluent/28/ffffff/instagram-new.png"/>
              </li>
              <li>
                <img src="https://img.icons8.com/fluent/28/ffffff/facebook-new.png"/>
              </li>

              <li>
                <img src="https://img.icons8.com/color/28/ffffff/twitter--v1.png"/>
              </li>

            </ul>
          </div>
        </div>
        <div class="menu_lst">
          <h2>Career</h2>
          <div class="nav_items">
            <ul>
              <li>
                Apply for a job
              </li>
              <li>
                Request status of Application
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

.footer {
  .footer_menu {
    background: $headerColor;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 20px;

    .menu_lst {
      margin: 0 auto;

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


</style>