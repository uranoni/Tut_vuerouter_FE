import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  // mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",

      component: () => import("./views/About.vue"),
      children: [
        {
          path: "profile",
          name: "profile",
          component: () => import("./components/Profile.vue")
        },
        {
          path: "award",
          component: () => import("./components/Award.vue")
        },
        // 如果要預設about頁面 呈現
        {
          path: "",
          component: () => import("./components/HelloWorld.vue")
        }
      ]
    },
    {
      // path: "/products",

      // path: "/products/:id",

      // 加問號表可有可無
      path: "/products/:id?",

      name: "products",

      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Products.vue")
    }
    // {
    //   path: "*",
    //   redirect: "/"
    // }
  ]
});
