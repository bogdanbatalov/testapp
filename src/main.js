import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./styles/index.scss";
import InfiniteLoading from "vue-infinite-loading";
import vueBacktopPack from "vue-backtop-pack";

Vue.use(vueBacktopPack);

Vue.use(InfiniteLoading, {
  system: {
    throttleLimit: 200,
  },
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
