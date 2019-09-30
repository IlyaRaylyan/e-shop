<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-lg-3 col-sm-4 shadow-sm" v-for="(categ, index) in category" :key="index">
        <div class="product-item">
          <div class="pi-pic">
            <div class="tag-sale">ON SALE</div>
            <img v-if="categ.category_image" :src="categ.category_image" alt />
          </div>
          <div class="pi-text">
            <h2>{{categ.category}}</h2>
            <div class="pi-links">
              <a href="#" class="add-card">
                <i class="fas fa-arrow-right"></i>
                <span>Смотреть</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="text-center w-100 pt-3">
        <button class="site-btn sb-line sb-dark">LOAD MORE</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    category: {
      required: true,
      type: Object
    }
  }
};
</script>