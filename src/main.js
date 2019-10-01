import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCarousel from "vue-carousel";
import VueLazyload from "vue-lazyload";

Vue.use(VueLazyload, {
  preLoad: 1.3,

  loading: "./assets/img/Spinner-1s-200px.gif",
  attempt: 1
});

Vue.use(VueCarousel);
import $ from "jquery";
// import VueCarousel from "@chenfengyuan/vue-carousel";
// Vue.use(VueCarousel);
Vue.config.productionTip = false;
import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCBo349LVdvLBgNpTO4C3CSDOjnk_GTqMk",
  authDomain: "e-shop-7f179.firebaseapp.com",
  databaseURL: "https://e-shop-7f179.firebaseio.com",
  projectId: "e-shop-7f179",
  storageBucket: "",
  messagingSenderId: "947714260851",
  appId: "1:947714260851:web:3f45ece43013920c3f4f06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
