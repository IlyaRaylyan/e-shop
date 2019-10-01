<template>
  <div class="col-lg-4 col-sm-6 mb-3">
    <div class="product-item">
      <div class="pi-pic">
        <div class="tag-sale">ON SALE</div>
        <router-link
          :to="{ name: 'ProductPage', params: { id: product.product_article } }"
        >
          <img v-lazy="product.product_images[0]" alt />
        </router-link>
        <div class="pi-links">
          <a class="add-card" @click.prevent="addProductToCart()">
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
  </div>
</template>
<script>
export default {
  props: {
    product: {
      required: true
    }
  },
  methods: {
    addProductToCart() {
      this.$store.commit("storeProductsInCart", {
        key: this.product.product_article,
        value: this.product
      });
      this.$router.push({ name: "cart" });
    }
  }
};
</script>
