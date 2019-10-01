<template>
  <div class="col-lg-3 order-2 order-lg-1">
    <div class="filter-widget">
      <h2 class="fw-title">Categories</h2>
      <ul class="category-menu">
        <li
          v-for="(category, index) in categories"
          :key="category.id"
          :class="{ active: currentFilter }"
        >
          <a @click.prevent="addFilter(category, index)">{{ category.category }}</a>
          <ul class="sub-menu"></ul>
        </li>
      </ul>
    </div>
    <div class="filter-widget mb-0">
      <h2 class="fw-title">refine by</h2>
      <div class="price-range-wrap">
        <h4>Price</h4>
        <vue-slider :min-range="100" :max-range="150" :max="1200" v-model="value"></vue-slider>
      </div>
    </div>
    <div class="filter-widget mb-0">
      <h2 class="fw-title">color by</h2>
      <div class="fw-color-choose">
        <div class="cs-item">
          <input type="radio" name="cs" id="gray-color" />
          <label class="cs-gray" for="gray-color">
            <span>(3)</span>
          </label>
        </div>
        <div class="cs-item">
          <input type="radio" name="cs" id="orange-color" />
          <label class="cs-orange" for="orange-color">
            <span>(25)</span>
          </label>
        </div>
        <div class="cs-item">
          <input type="radio" name="cs" id="yollow-color" />
          <label class="cs-yollow" for="yollow-color">
            <span>(112)</span>
          </label>
        </div>
        <div class="cs-item">
          <input type="radio" name="cs" id="green-color" />
          <label class="cs-green" for="green-color">
            <span>(75)</span>
          </label>
        </div>
        <div class="cs-item">
          <input type="radio" name="cs" id="purple-color" />
          <label class="cs-purple" for="purple-color">
            <span>(9)</span>
          </label>
        </div>
        <div class="cs-item">
          <input type="radio" name="cs" id="blue-color" checked />
          <label class="cs-blue" for="blue-color">
            <span>(29)</span>
          </label>
        </div>
      </div>
    </div>
    <div class="filter-widget mb-0">
      <h2 class="fw-title">Size</h2>
      <div class="fw-size-choose">
        <div class="sc-item" v-for="(size, index) in allSizesFromProduct" :key="index">
          <input type="radio" name="sc" id="xs-size" />
          <label for="xs-size">{{ size }}</label>
        </div>
      </div>
    </div>
    <div class="filter-widget">
      <h2 class="fw-title">Brand</h2>
      <ul class="category-menu">
        <li v-for="(brend, index) in allBrendsFromProducts" :key="index">
          <a @click.prevent="addFilterByBrend(brend, index)" href="#">
            {{ brend }}
            <span></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/default.css";
export default {
  components: { VueSlider },
  props: {
    categories: {
      required: true
    },
    products: {
      required: true
    }
  },
  data() {
    return {
      activeFilter: false,
      currentFilter: "",
      value: [0, 1000]
    };
  },
  methods: {
    addFilter(category, index) {
      this.$store.commit("storeFilters", category.id);
      const item = this.categories[index];
      this.currentFilter = item;
    },
    addFilterByBrend(brend, index) {
      this.$store.commit("storeFilters", brend);
      const item = this.allBrendsFromProducts[index];
      this.currentFilter = item;
    }
  },
  computed: {
    allBrendsFromProducts() {
      const brends = [];
      let arrOfBrends = Object.values(this.products);

      arrOfBrends.map(product => {
        if (!brends.includes(product.Brend) && product.Brend) {
          brends.push(product.Brend);
        }
      });

      return brends;
    },
    allSizesFromProduct() {
      const size = [];
      let arrOfSizes = Object.values(this.products);
      arrOfSizes.map(product => {
        product.size.every(s => {
          if (!size.includes(s)) {
            size.push(s);
          }
        });
      });
      return size;
    }
  }
};
</script>
<style scoped></style>
