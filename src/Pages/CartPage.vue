<template>
  <section class="cart-section spad">
    <div class="container">
      <div class="row">
        <div class="col-lg-8">
          <div class="cart-table">
            <h3>Your Cart</h3>
            <div class="cart-table-warp" tabindex="1" style="overflow: hidden; outline: none;">
              <table>
                <thead>
                  <tr>
                    <th class="product-th">Product</th>
                    <th class="quy-th">Quantity</th>
                    <th class="size-th">SizeSize</th>
                    <th class="total-th">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="product in products" :key="product.product_article">
                    <td class="product-col">
                      <img :src="product.product_images[0]" alt />
                      <div class="pc-title">
                        <h4>{{product.product_name}}</h4>
                        <p>{{product.product_retail_prices}}</p>
                      </div>
                    </td>
                    <td class="quy-col">
                      <div class="quantity">
                        <div class="pro-qty">
                          <span class="dec qtybtn">-</span>
                          <input type="text" value="1" />
                          <span class="inc qtybtn">+</span>
                        </div>
                      </div>
                    </td>
                    <td class="size-col">
                      <h4>{{product.size[0]}}</h4>
                    </td>
                    <td class="total-col">
                      <h4>{{product.product_retail_prices}}</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="total-cost">
              <h6>
                Total
                <span>$99.90</span>
              </h6>
            </div>
          </div>
        </div>
        <div class="col-lg-4 card-right">
          <form class="promo-code-form">
            <input type="text" placeholder="Enter promo code" />
            <button>Submit</button>
          </form>
          <a href class="site-btn">Proceed to checkout</a>
          <a href @click.prevent="goBack()" class="site-btn sb-dark">Continue shopping</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.productsInCart;
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: "CategoryPage" });
    }
  }
};
</script>