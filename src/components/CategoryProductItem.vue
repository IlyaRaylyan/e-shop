<template>
  <div class="col-lg-4 col-sm-6">
    <div class="product-item">
      <div class="pi-pic">
        <div class="tag-sale">ON SALE</div>
        <router-link :to="{name: 'ProductPage', params:{ id:product.product_article}}">
          <img :src="product.product_images[0]" alt />
        </router-link>
        <div class="pi-links">
          <router-link class="add-card" :to="{name: 'cart'}">
            <i class="flaticon-bag"></i>
            <span>ADD TO CART</span>
          </router-link>

          <a href="#" class="wishlist-btn">
            <i class="flaticon-heart"></i>
          </a>
        </div>
      </div>
      <div class="pi-text">
        <h6>{{product.product_retail_prices}}</h6>
        <p>{{product.product_name}}</p>
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
  }
};
</script>