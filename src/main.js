import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCarousel from "vue-carousel";
// import { library } from "@fortawesome/fontawesome-svg-core";
// import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// import { faFontAwesome } from "@fortawesome/free-brands-svg-icons";

// library.add(faUserSecret, faFontAwesome);

// Vue.component("font-awesome-icon", FontAwesomeIcon);

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
