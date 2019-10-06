<template>
  <section class="top-letest-product-section">
    <div class="container">
      <div class="section-title">
        <h2>LATEST PRODUCTS</h2>
      </div>

      <div class="row">
        <swiper :options="swiperOption" ref="mySwiper">
          <!-- slides -->

          <swiper-slide
            v-for="(product, index) in products"
            v-if="index < productAmount"
            :key="index"
          >
            <div class="product-item shadow-sm">
              <div class="pi-pic">
                <!-- <div class="tag-sale">ON SALE</div> -->
                <router-link
                  :to="{
                    name: 'ProductPage',
                    params: { id: product.product_article }
                  }"
                >
                  <img v-lazy="product.product_images[0]" alt />
                </router-link>
                <div class="pi-links">
                  <a
                    class="add-card"
                    @click.prevent="addProductToCart(product)"
                  >
                    <i class="flaticon-bag"></i>
                    <span>ADD TO CART</span>
                  </a>

                  <a href="#" class="wishlist-btn">
                    <i class="flaticon-heart"></i>
                  </a>
                </div>
              </div>

              <div class="pi-text">
                <h6>{{ product.product_retail_prices }}</h6>
                <p>{{ product.product_name }}</p>
              </div>
            </div>
          </swiper-slide>

          <!-- Optional controls -->
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar" slot="scrollbar"></div>
        </swiper>

        <div class="text-center w-100 pt-3">
          <router-link
            :to="{ name: 'CategoryPage', params: { products: products } }"
            tag="button"
            class="site-btn sb-line sb-dark"
            >Смотреть все</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  data() {
    return {
      productAmount: 40,
      swiperOption: {
        lazy: true,
        slidesPerView: 4,
        loop: true,
        centeredSlides: false,
        autoplay: {
          delay: 3500,
          disableOnInteraction: true
        },
        paginationClickable: true,
        spaceBetween: 5,
        keyboardControl: true,
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      }
    };
  },
  components: { swiper, swiperSlide },
  props: {
    products: {
      required: true
    }
  },
  methods: {
    getImageFromArr(product) {
      console.log(product["Изображения"]);
      //   return product.URL[0]
    },

    addProductToCart(product) {
      this.$store.commit("storeProductsInCart", {
        key: product.product_article,
        value: product
      });
      this.$router.push({ name: "cart" });
    }
  }
};
</script>
