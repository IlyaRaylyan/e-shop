import Vue from "vue";
import Router from "vue-router";
import Home from "./Pages/PageHome.vue";
import CategoryPage from "./Pages/CategoryPage.vue";
import ProductPage from "./Pages/ProductPage.vue";
import CartPage from "./Pages/CartPage.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/category",
      name: "CategoryPage",
      component: CategoryPage
    },
    {
      path: "/cart",
      name: "cart",
      component: CartPage
    },
    {
      path: "/product/:id",
      name: "ProductPage",
      component: ProductPage,
      props: true
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./Pages/About.vue")
    }
  ]
});
