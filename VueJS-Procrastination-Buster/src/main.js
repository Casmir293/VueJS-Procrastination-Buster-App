import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";
import "@popperjs/core";
import "./assets/scss/main.scss";

import { createApp } from "vue";
import App from "./App.vue";

const vm = createApp(App);
vm.mount("#app");
