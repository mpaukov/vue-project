import { createRouter, createWebHistory } from "vue-router";

import ErrorPage from "./pages/ErrorPage.vue";
import { store } from "./store/store";

const HomePage = () => import("./pages/HomePage.vue");
const ApartmentPage = () => import("./pages/ApartmentPage.vue");
const LoginPage = () => import("./pages/Login.vue");
const RegistrationPage = () => import("./pages/Registration.vue");
const MyOrdersPage = () => import("./pages/MyOrders.vue");

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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginPage,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/registration",
    name: "registration",
    component: RegistrationPage,
    meta: {
      hideForAuth: true,
    },
  },
  {
    path: "/my-orders",
    name: "my-orders",
    component: MyOrdersPage,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)",
    name: "error",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = store.getters["auth/isLoggedIn"];

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: "login" });
    }
  }
  if (to.matched.some((record) => record.meta.hideForAuth)) {
    if (isLoggedIn) {
      next({ name: "home" });
    }
  }
  next();
});

export default router;
