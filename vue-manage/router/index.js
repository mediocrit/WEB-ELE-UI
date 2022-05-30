import Vue from "vue";
import VueRouter from "vue-router";
// import Home from '../views/Home.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "vueMain",
    // component:Home
    component: () => import("../views/Main.vue"),
    children: [
    //   {
    //     path: "/home",
    //     name: "vueHome",
    //     component: () => import("../views/Home"),
    //   },
    //   {
    //     path: "/user",
    //     name: "vueUser",
    //     component: () => import("../views/User"),
    //     // component: () => import("../views/User/some.vue"),
    //   },
    //   {
    //     path: "/mall",
    //     name: "vueMall",
    //     component: () => import("../views/Mall"),
    //   },
    //   {
    //     path: "/page1",
    //     name: "vuePageOne",
    //     component: () => import("../views/Other/pageOne.vue"),
    //   },
    //   {
    //     path: "/page2",
    //     name: "vuePageTwo",
    //     component: () => import("../views/Other/pageTwo.vue"),
    //   },
    ],
  },
  {
    path:'/login',
    name:'vueLogin',
    component:()=>import("../views/Login/login.vue")
  }
];
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
