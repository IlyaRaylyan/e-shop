import Vue from "vue";
import Vuex from "vuex";
import firebase from "firebase";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    category: {},
    products: {},
    cart: {},
    filters: [],
    productsInCart: {}
  },
  mutations: {
    storeProductsInCart(state, { key, value }) {
      Vue.set(state.productsInCart, key, value);
    },
    storeCategories(state, { key, value }) {
      Vue.set(state.category, key, value);
    },
    storeProduct(state, { key, value }) {
      Vue.set(state.products, key, value);
    },
    storeFilters(state, filter) {
      if (state.filters.length == 1) {
        state.filters.pop();
      } else {
        state.filters.push(filter);
      }
    }
  },
  actions: {
    fetchCategory() {
      return new Promise(resolve => {
        firebase
          .database()
          .ref("category")
          .once("value", snapshot => {
            resolve(snapshot.val());
          });
      });
    },
    fetchProducts() {
      return new Promise(resolve => {
        firebase
          .database()
          .ref("products")
          .once("value", snapshot => {
            console.log(snapshot.val());
            resolve(snapshot.val());
          });
      });
    },
    fetchFortyRandomProducts({ commit }) {
      const numberForFetch = 40;

      for (let i = 0; i < numberForFetch; i++) {
        firebase
          .database()
          .ref("products")
          .child(i)
          .once("value", snapshot => {
            console.log(snapshot.val());
            const product = snapshot.val();
            commit("storeProduct", { key: i, value: product });
          });
      }
    }
  }
});
