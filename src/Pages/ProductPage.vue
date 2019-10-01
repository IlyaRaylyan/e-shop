<template>
  <section v-if="product" class="product-section">
    <div class="container">
      <div class="back-link">
        <router-link :to="{name: 'CategoryPage'}">Back to category</router-link>
      </div>
      <div class="row">
        <div class="col-lg-6">
          <div class="product-pic-zoom" style="position: relative; overflow: hidden;">
            <img
              class="product-big-img"
              :src="currentPic? currentPic :product.product_images[0]"
              alt
            />
            <img
              role="presentation"
              alt
              :src="product.product_images[0]"
              class="zoomImg"
              style="position: absolute; top: -140.81px; left: -436.309px; opacity: 0; width: 1000px; height: 1358px; border: none; max-width: none; max-height: none;"
            />
          </div>
          <div class="product-thumbs" tabindex="1" style="overflow: hidden; outline: none;">
            <div class="product-thumbs-track">
              <div
                class="pt"
                v-for=" (image, index) in product.product_images"
                :key="index"
                v-on:click=" ChoosePic(index)"
                v-bind:class="{ active:  currentPic == image}"
              >
                <img :src="image" alt />
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 product-details">
          <h2 class="p-title">{{product.product_name}}</h2>
          <h3 class="p-price">{{product.product_retail_prices}}</h3>
          <h4 class="p-stock">
            <span>{{AvailableStatus(product.available)}}</span>
          </h4>
          <div class="p-rating">
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o"></i>
            <i class="fa fa-star-o fa-fade"></i>
          </div>
          <div class="p-review">
            <a href>3 reviews</a>|
            <a href>Add your review</a>
          </div>
          <div class="fw-size-choose">
            <p>Размеры</p>
            <div class="sc-item" v-for="size in product.size">
              <input type="radio" name="sc" id="xs-size" />
              <label for="xs-size">{{size}}</label>
            </div>
          </div>
          <div class="quantity">
            <p>Количество</p>
            <div class="pro-qty">
              <span class="dec qtybtn">-</span>
              <input type="text" value="1" />
              <span class="inc qtybtn">+</span>
            </div>
          </div>
          <button @click="addProductToCart()" class="site-btn">добавить в корзину</button>

          <div id="accordion" class="accordion-area">
            <div class="panel">
              <div class="panel-header" id="headingOne">
                <button
                  @click="CollapseDiv1()"
                  v-bind:class="{ active: triggerButton1Colapse }"
                  class="panel-link active"
                  data-toggle="collapse"
                  data-target="#collapse1"
                  aria-expanded="true"
                  aria-controls="collapse1"
                >Описание</button>
              </div>
              <div
                v-bind:class="{ show: triggerButton1Colapse }"
                id="collapse1"
                class="collapse"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="panel-body">
                  <p>{{GetDescriptions(product.product_description)}}</p>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-header" id="headingTwo">
                <button
                  @click="CollapseDiv2()"
                  v-bind:class="{ active: triggerButton2Colapse }"
                  class="panel-link"
                  data-toggle="collapse"
                  data-target="#collapse2"
                  aria-expanded="false"
                  aria-controls="collapse2"
                >care details</button>
              </div>
              <div
                v-bind:class="{ show: triggerButton2Colapse }"
                id="collapse2"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordion"
              >
                <div class="panel-body">
                  <img src="../assets//img/cards.png" alt />
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-header" id="headingThree">
                <button
                  @click="CollapseDiv3()"
                  v-bind:class="{ active: triggerButton3Colapse }"
                  class="panel-link"
                  data-toggle="collapse"
                  data-target="#collapse3"
                  aria-expanded="false"
                  aria-controls="collapse3"
                >shipping &amp; Returns</button>
              </div>
              <div
                v-bind:class="{ show: triggerButton3Colapse }"
                id="collapse3"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordion"
              >
                <div class="panel-body">
                  <h4>7 Days Returns</h4>
                  <p>
                    Cash on Delivery Available
                    <br />Home Delivery
                    <span>3 - 4 days</span>
                  </p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra tempor so dales. Phasellus sagittis auctor gravida. Integer bibendum sodales arcu id te mpus. Ut consectetur lacus leo, non scelerisque nulla euismod nec.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="social-sharing">
            <a href>
              <i class="fab fa-google-plus"></i>
            </a>
            <a href>
              <i class="fab fa-pinterest"></i>
            </a>
            <a href>
              <i class="fab fa-facebook"></i>
            </a>
            <a href>
              <i class="fab fa-twitter"></i>
            </a>
            <a href>
              <i class="fab fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <AppSpinner v-else />
</template>
<script>
import AppSpinner from "../components/AppSpinner.vue";
export default {
  components: { AppSpinner },
  data() {
    return {
      showComponent: false,
      products: {},
      selectedImage: false,
      triggerButton1Colapse: true,
      triggerButton2Colapse: false,
      triggerButton3Colapse: false,
      currentPic: ""
    };
  },
  created() {
    this.$store
      .dispatch("fetchProducts")
      .then(product => {
        this.products = product;
      })
      .then(() => {
        this.showComponent = true;
      });
  },
  computed: {
    product() {
      return Object.values(this.products).filter(product => {
        console.log(product.product_article == this.$route.params.id);

        return product.product_article == this.$route.params.id;
      })[0];
    }
  },
  methods: {
    addProductToCart() {
      this.$store.commit("storeProductsInCart", {
        key: this.$route.params.id,
        value: this.product
      });
      this.$router.push({ name: "cart" });
    },
    GetDescriptions(el) {
      console.log(el.split("src="));

      return el.split("<p>")[0];
    },
    AvailableStatus(el) {
      if (el) {
        return "есть в наличии";
      } else {
        return "нет в наличии";
      }
    },
    CollapseDiv1() {
      this.triggerButton1Colapse = !this.triggerButton1Colapse;
    },
    CollapseDiv2() {
      this.triggerButton2Colapse = !this.triggerButton2Colapse;
    },
    CollapseDiv3() {
      this.triggerButton3Colapse = !this.triggerButton3Colapse;
    },
    ChoosePic(index) {
      const item = this.product.product_images[index];
      this.currentPic = item;
    }
  }
};
</script>