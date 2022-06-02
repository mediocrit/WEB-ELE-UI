import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./assets/less/index.less";

import router from "../router";
import store from "../store";
import http from "axios";
import "../api/mock";

Vue.config.productionTip = false;
Vue.use(ElementUI);

Vue.prototype.$http = http;
// Vue.prototype.$confirm=MessageBox.confirm

router.beforeEach((to, from, next) => {
  store.commit("getToken");
  const token = store.state.user.token;
  if (!token && to.name !== "vueLogin") {
    next({ name: "vueLogin" });
  } else if (token && to.name === "vueLogin") {
    next({ name: "/vueHome" });
    
  } else {
    next();
  }
});

new Vue({
  store,
  router,
  render: (h) => h(App),
  created() {
    store.commit("addMenu", router);
  },
}).$mount("#app");
