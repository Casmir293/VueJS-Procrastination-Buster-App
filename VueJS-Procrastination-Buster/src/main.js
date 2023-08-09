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

const vm = createApp(App);
vm.component("font-awesome-icon", FontAwesomeIcon);
vm.mount("#app");
