//  Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@popperjs/core";

//  SCSS
import "./assets/scss/main.scss";

//  Font Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { faSun } from "@fortawesome/free-solid-svg-icons";
library.add(faMoon, faSun);

//  Vue App
import { createApp } from "vue";
import App from "./App.vue";

//  Vue Route
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      components: {
        options: () => import("./components/Options.vue"),
      },
    },
    {
      path: "/to-do",
      name: "ToDo",
      component: () => import("./components/ToDo.vue"),
    },
    {
      path: "/timer",
      name: "Timer",
      component: () => import("./components/Timer.vue"),
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: () => import("./components/NotFound.vue"),
    },
  ],
});

//  VM
const vm = createApp(App);
vm.component("font-awesome-icon", FontAwesomeIcon);
vm.use(router);
vm.mount("#app");
