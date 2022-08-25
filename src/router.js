import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import ApartmentPage from "./pages/ApartmentPage.vue";
import ErrorPage from "./pages/ErrorPage.vue";
import LoginPage from "./pages/Login.vue";
import RegistrationPage from "./pages/Registration.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/apartments/:id",
    name: "apartment",
    component: ApartmentPage,
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationPage,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
