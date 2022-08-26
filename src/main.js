import "./assets/scss/index.scss";
import { createApp } from "vue";
import Notifications from "@kyvg/vue3-notification";
import { store } from "./store/store";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(store).use(Notifications).mount("#main");
