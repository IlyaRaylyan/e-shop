<template>
  <section class="category-section spad">
    <div class="container">
      <div class="row">
        <CategoryFilter />
        <CategoryProductsSection v-if="showComponent" :products="products" />
        <AppSpinner v-else />
      </div>
    </div>
  </section>
</template>
<script>
import CategoryFilter from "../components/CategoryFilter.vue";
import CategoryProductsSection from "../components/CategoryProductsSection.vue";
import AppSpinner from "../components/AppSpinner.vue";

export default {
  data() {
    return {
      showComponent: false,
      products: {}
    };
  },
  components: { CategoryFilter, CategoryProductsSection, AppSpinner },

  created() {
    this.$store
      .dispatch("fetchProducts")
      .then(product => {
        this.products = product;
      })
      .then(() => {
        this.showComponent = true;
      });
  }
};
</script>
<style scoped>
</style>