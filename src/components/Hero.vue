<template>
  <section class>
    <div class="hero-swiper-slide">
      <swiper
        v-on:slide-change-transition-end="turnOffShowText()"
        v-on:progress="turnOffShowText()"
        v-on:slide-next-transition-start="turnOnShowText()"
        :options="swiperOption"
        ref="mySwiper"
      >
        <swiper-slide v-for="slide in sliders">
          <div :class="slide.style">
            <div class="container">
              <div class="row">
                <div v-if="show" class="col-xl-6 col-lg-7 text-white" style="margin: 60px">
                  <span class="fade-in-bottom">{{ slide.title }}</span>

                  <h2 class="fade-in-bottom-h2">{{ slide.subtitle }}</h2>

                  <p class="fade-in-bottom-p">{{ slide.text }}</p>

                  <router-link :to="{ name: 'CategoryPage' }" class="site-btn sb-line">DISCOVER</router-link>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
require("vue2-animate/dist/vue2-animate.min.css");

export default {
  components: { swiper, swiperSlide },
  methods: {
    turnOffShowText() {
      this.show = true;
    },
    turnOnShowText() {
      this.show = false;
    }
  },
  data() {
    return {
      sliders: {
        first: {
          style: "carouselBG1",
          title: "Новые поступления",
          subtitle: "Осенняя коллекция",
          text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magna  qua. Quis ipsum sus-pendisse ultrices gravida. Risus    commodo viverra maecenas accumsan lacus vel facilisis."
        },
        second: {
          style: "carouselBG2",
          title: "Новые поступления",
          subtitle: "Осенняя коллекция",
          text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed  do eiusmod tempor incididunt ut labore et dolore magna     aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus              commodo viverra maecenas accumsan lacus vel facilisis."
        },
        third: {
          style: "carouselBG3",
          title: "Новые поступления",
          subtitle: "Осенняя коллекция",
          text:
            " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed     do eiusmod tempor incididunt ut labore et dolore magna    aliqua. Quis ipsum sus-pendisse ultrices gravida. Risus               commodo viverra maecenas accumsan lacus vel facilisis."
        }
      },
      show: false,
      swiperOption: {
        slidesPerView: 1,
        loop: true,
        centeredSlides: false,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        paginationClickable: true,

        keyboardControl: true
      }
    };
  },
  created() {
    this.show = true;
  }
};
</script>
<style scoped>
.fade-in-bottom-p {
  -webkit-animation: fade-in-bottom 0.6s ease-in 1s both;
  animation: fade-in-bottom 0.6s ease-in 1s both;
}
.fade-in-bottom-h2 {
  -webkit-animation: fade-in-bottom 0.6s ease-in 0.5s both;
  animation: fade-in-bottom 0.6s ease-in 0.5s both;
}
.fade-in-bottom {
  -webkit-animation: fade-in-bottom 0.6s ease-in both;
  animation: fade-in-bottom 0.6s ease-in both;
}
/* ----------------------------------------------
 * Generated by Animista on 2019-10-6 20:2:41
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation fade-in-bottom
 * ----------------------------------------
 */
@-webkit-keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-in-bottom {
  0% {
    -webkit-transform: translateY(50px);
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

.carouselBG1 {
  background-image: url(../assets/img/bg.jpg);
  height: 500px;
  background-position: top center;
}
.carouselBG2 {
  background-image: url(../assets/img/bg-2.jpg);
  height: 500px;
  background-position: top center;
}
.carouselBG3 {
  background-image: url(../assets/img/bg.jpg);
  height: 500px;
  background-position: top center;
}
.hero-swiper-slide {
  position: relative;
}
.hs-item {
  height: 100%;
}
</style>
