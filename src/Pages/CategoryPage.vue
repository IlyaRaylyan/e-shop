<template>
  <section class="category-section spad">
    <div class="container">
      <div class="row">
        <CategoryFilter v-if="categories" :categories="categories" :products="products" />
        <CategoryProductsSection v-if="showComponent" :products="filteredItems" />
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
  computed: {
    categories() {
      const categoryArr = this.$store.state.category;
      const categoryFilters = this.$store.state.filters;

      return categoryArr;
    },
    filteredItems() {
      const categoryArr = Object.values(this.products);
      const filters = this.$store.state.filters;

      return categoryArr.filter(product => {
        return filters.every(filterApplied => {
          if (filterApplied && product["id_category"].includes(filterApplied)) {
            return product["id_category"].includes(filterApplied);
          }
          if (product["Brend"] && product["Brend"].includes(filterApplied)) {
            return product["Brend"].includes(filterApplied);
          }
        });
      });
    },
    filters() {
      return this.$store.state.filters;
    }
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
    this.$store.dispatch("fetchCategory").then(product => {
      product.map(x => {
        this.$store.commit("storeCategories", {
          key: x.id,
          value: x
        });
      });
    });
  }
};
</script>
<style scoped></style>
