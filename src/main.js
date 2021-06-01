import Vue from "vue";
import App from "./App.vue";
import VueI18n from 'vue-i18n'
import "./style.scss";

import router from "./router";


Vue.use(VueI18n)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");