<template>
  <section class>
    <div class="hero-slide">
      <carousel
        :per-page="1"
        :autoplayTimeout="4000"
        :paginationEnabled="false"
        :autoplay="true"
        :loop="true"
        :speed="1500"
        :adjustableHeight="true"
      >
        <slide>
          <div id="carouselBG1" class>
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-7 text-white" style="margin: 60px">
                  <span>Новый поступления</span>
                  <h2>Осенняя коллекция</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  <router-link :to="{name: 'CategoryPage'}" class="site-btn sb-line">DISCOVER</router-link>
                  <a href="#" class="site-btn sb-white">ADD TO CART</a>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div id="carouselBG2" class="hs-item set-bg">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-7 text-white" style="margin: 60px">
                  <span>New Arrivals</span>
                  <h2>denim jackets</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  <router-link :to="{name: 'CategoryPage'}" class="site-btn sb-line">DISCOVER</router-link>
                  <a href="#" class="site-btn sb-white">ADD TO CART</a>
                </div>
              </div>
            </div>
          </div>
        </slide>
        <slide>
          <div id="carouselBG3" class="hs-item set-bg">
            <div class="container">
              <div class="row">
                <div class="col-xl-6 col-lg-7 text-white" style="margin: 60px">
                  <span>New Arrivals</span>
                  <h2>denim jackets</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                  <router-link :to="{name: 'CategoryPage'}" class="site-btn sb-line">DISCOVER</router-link>
                  <a href="#" class="site-btn sb-white">ADD TO CART</a>
                </div>
              </div>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style scoped>
#carouselBG1 {
  background-image: url(../assets/img/bg.jpg);
  height: 500px;
}
#carouselBG2 {
  background-image: url(../assets/img/bg-2.jpg);
  height: 500px;
}
#carouselBG3 {
  background-image: url(../assets/img/bg.jpg);
  height: 500px;
}
.hero-slide {
  position: relative;
}
.hs-item {
  height: 100%;
}
</style>