<template>
  <div class="col-lg-9 order-1 order-lg-2 mb-5 mb-lg-0">
    <div class="row">
      <CategoryProductItem
        v-for="(product, index) in products"
        v-if="index<productAmount"
        :product="product"
      />
      <div class="text-center w-100 pt-3">
        <button @click="loadMore()" class="site-btn sb-line sb-dark">LOAD MORE</button>
      </div>
    </div>
  </div>
</template>
<script>
import CategoryProductItem from "./CategoryProductItem.vue";
export default {
  components: {
    CategoryProductItem
  },
  data() {
    return {
      productAmount: 21
    };
  },
  props: {
    products: {
      required: true,
      type: Array
    }
  },
  methods: {
    loadMore() {
      this.productAmount = this.productAmount + 10;
    }
  }
};
</script>