<template>
  <div id="app">
    <NavBar />

    <transition
      enter-active-class="animated slideInRight"
      leave-active-class="animated slideOutLeft"
    >
      <router-view appear :key="$route.path"></router-view>
    </transition>
    <FooterSection />
  </div>
</template>
<script>
require("vue2-animate/dist/vue2-animate.min.css");
import NavBar from "./components/NavBar.vue";
import FooterSection from "./components/FooterSection.vue";
export default {
  components: {
    NavBar,
    FooterSection
  }
};
</script>
<style>
@import "./Source/sass/style.scss";
@import "./assets/css/style.css";
@import "./assets/css/flaticon.css";
@import "./assets/css/animate.css";

@import "./assets/css/slicknav.min.css";
@import "./assets/css/bootstrap.min.css";

@import "./assets/fontawesome-free-5.11.2-web/css/all.css";
</style>
