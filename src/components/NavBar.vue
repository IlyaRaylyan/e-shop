<template>
  <header class="header-section">
    <div class="header-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-2 text-center text-lg-left">
            <!-- logo -->
            <router-link class="site-logo" :to="{ name: 'home' }">
              <img src="../assets/img/logo.png" alt />
            </router-link>
          </div>
          <div class="col-xl-6 col-lg-5">
            <div class="header-search-form">
              <input
                type="text"
                placeholder="Search on e-fashion...."
                v-model="search"
                @change.prevent="filteredList()"
              />
              <button>
                <i class="flaticon-search"></i>
              </button>
            </div>
            <ul
              class="sub-menu"
              v-for="(item, index) in searchFilter"
              v-if="index < 5"
            >
              <div class="user-panel">
                <div class="up-item">
                  <a href @click.prevent="goToProduct(item.product_article)">{{
                    item.product_name
                  }}</a>
                </div>
                <img :src="item.product_images[0]" height="100px" alt />
              </div>
            </ul>
          </div>
          <div class="col-xl-4 col-lg-5">
            <div class="user-panel">
              <div class="up-item">
                <i class="flaticon-profile"></i>
                <a href="#">Sign</a> In or
                <a href="#">Create Account</a>
              </div>
              <div class="up-item">
                <div class="shopping-card">
                  <i class="flaticon-bag"></i>
                  <span>{{ amountCartProducts }}</span>
                </div>
                <router-link :to="{ name: 'cart' }">Shopping Cart</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nav class="main-navbar">
      <div class="container">
        <div class="slicknav_menu">
          <a
            href="#"
            aria-haspopup="true"
            role="button"
            tabindex="0"
            class="slicknav_btn"
            style="outline: none;"
            @click="showMobileMenu = !showMobileMenu"
            v-bind:class="{
              slicknav_collapsed: !showMobileMenu,
              clicknav_open: showMobileMenu
            }"
          >
            <span class="slicknav_menutxt">MENU</span>
            <span class="slicknav_icon">
              <span class="slicknav_icon-bar"></span>
              <span class="slicknav_icon-bar"></span>
              <span class="slicknav_icon-bar"></span>
            </span>
          </a>
          <ul
            class="slicknav_nav"
            aria-hidden="true"
            role="menu"
            v-bind:class="{
              disableMenuClass: !showMobileMenu,
              slicknav_hidden: !showMobileMenu
            }"
          >
            <li>
              <a href="#" role="menuitem" tabindex="-1">Home</a>
            </li>
            <li>
              <a href="#" role="menuitem" tabindex="-1">Women</a>
            </li>
            <li>
              <a href="#" role="menuitem" tabindex="-1">Men</a>
            </li>
            <li>
              <a href="#" role="menuitem" tabindex="-1">
                Jewelry
                <span class="new">New</span>
              </a>
            </li>
            <li class="slicknav_parent slicknav_open">
              <a
                href="#"
                role="menuitem"
                aria-haspopup="true"
                tabindex="-1"
                class="slicknav_item slicknav_row"
                style="outline: none;"
              >
                <a href="#" tabindex="-1">Shoes</a>
                <span class="slicknav_arrow">
                  <i class="flaticon-down-arrow"></i>
                </span>
              </a>
              <ul class="sub-menu" role="menu" aria-hidden="true" style>
                <li>
                  <a href="#" role="menuitem" tabindex="-1">Sneakers</a>
                </li>
                <li>
                  <a href="#" role="menuitem" tabindex="-1">Sandals</a>
                </li>
                <li>
                  <a href="#" role="menuitem" tabindex="-1">Formal Shoes</a>
                </li>
                <li>
                  <a href="#" role="menuitem" tabindex="-1">Boots</a>
                </li>
                <li>
                  <a href="#" role="menuitem" tabindex="-1">Flip Flops</a>
                </li>
              </ul>
            </li>
            <li class="slicknav_collapsed slicknav_parent">
              <a
                href="#"
                role="menuitem"
                aria-haspopup="true"
                tabindex="-1"
                class="slicknav_item slicknav_row"
                style="outline: none;"
              >
                <a href="#" tabindex="-1">Pages</a>
                <span class="slicknav_arrow">
                  <i class="flaticon-right-arrow"></i>
                </span>
              </a>
              <ul
                class="sub-menu slicknav_hidden"
                role="menu"
                aria-hidden="true"
                style="display: none;"
              >
                <li>
                  <a href="./product.html" role="menuitem" tabindex="-1"
                    >Product Page</a
                  >
                </li>
                <li>
                  <a href="./category.html" role="menuitem" tabindex="-1"
                    >Category Page</a
                  >
                </li>
                <li>
                  <a href="./cart.html" role="menuitem" tabindex="-1"
                    >Cart Page</a
                  >
                </li>
                <li>
                  <a href="./checkout.html" role="menuitem" tabindex="-1"
                    >Checkout Page</a
                  >
                </li>
                <li>
                  <a href="./contact.html" role="menuitem" tabindex="-1"
                    >Contact Page</a
                  >
                </li>
              </ul>
            </li>
            <li>
              <a href="#" role="menuitem" tabindex="-1">Blog</a>
            </li>
          </ul>
        </div>
        <!-- menu -->
        <ul class="main-menu">
          <li>
            <router-link :to="{ name: 'home' }">Home</router-link>
          </li>

          <li>
            <a href="#">Shoes</a>
            <ul class="sub-menu">
              <li>
                <a href="#">Sneakers</a>
              </li>
              <li>
                <a href="#">Sandals</a>
              </li>
              <li>
                <a href="#">Formal Shoes</a>
              </li>
              <li>
                <a href="#">Boots</a>
              </li>
              <li>
                <a href="#">Flip Flops</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Pages</a>
            <ul class="sub-menu">
              <li>
                <a href="./product.html">Product Page</a>
              </li>
              <li>
                <a href="./category.html">Category Page</a>
              </li>
              <li>
                <a href="./cart.html">Cart Page</a>
              </li>
              <li>
                <a href="./checkout.html">Checkout Page</a>
              </li>
              <li>
                <a href="./contact.html">Contact Page</a>
              </li>
            </ul>
          </li>
          <li>
            <router-link :to="{ name: 'CategoryPage' }">Category</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      searchFilter: [],
      showMobileMenu: false,
      showSubMenuForMobile: false
    };
  },

  computed: {
    amountCartProducts() {
      return Object.keys(this.$store.state.productsInCart).length;
    },
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    filteredList() {
      if (!this.search) {
        this.searchFilter = [];
        return;
      }

      this.searchFilter = this.products.filter(prod => {
        return prod.product_name
          .toLowerCase()
          .includes(this.search.toLowerCase());
      });
    },
    cleanSearch() {
      this.search = "";
      this.searchFilter = [];
    },
    goToProduct(id) {
      this.$router.push({ name: "ProductPage", params: { id } });
      this.search = "";
      this.searchFilter = [];
    }
  }
};
</script>

<style scoped>
.disableMenuClass {
  display: none;
}
</style>
