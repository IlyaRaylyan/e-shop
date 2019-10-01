<template>
  <div>
    <Hero />
    <FeaturesSection />
    <!-- <CategoryFolders :category="category" /> -->
    <LatestProductSection v-if="showComponent" :products="products" />
    <AppSpinner v-else />
    <BannerSection />
  </div>
</template>



<script>
import asyncDataStatus from "../mixins/asyncDataStatus";

import Hero from "../components/Hero.vue";
import FeaturesSection from "../components/FeaturesSection.vue";
import AppSpinner from "../components/AppSpinner.vue";
import CategoryFolders from "../components/CategoryFolders.vue";
import LatestProductSection from "../components/LatestProductSection.vue";
import BannerSection from "../components/BannerSection.vue";
export default {
  data() {
    return {
      showComponent: false,
      products: {}
    };
  },
  mixins: [asyncDataStatus],
  components: {
    FeaturesSection,
    Hero,
    LatestProductSection,
    BannerSection,
    CategoryFolders,
    AppSpinner
  },
  computed: {
    category() {
      return this.$store.state.category;
    }
  },
  methods: {},
  created() {
    this.$store
      .dispatch("fetchProducts")
      .then(product => {
        this.products = product;
      })
      .then(() => {
        this.showComponent = true;
      });

    // this.$store.dispatch("fetchFortyRandomProducts");
  }
};
</script>
