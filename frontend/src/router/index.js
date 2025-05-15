import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const routes = [
  {
    path: "/",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/login",
    component: () => import("../pages/Login.vue"),
    meta: { requiresGuest: true },
  },
  {
    path: "/register",
    component: () => import("../pages/Register.vue"),
    meta: { requiresGuest: true },
  },
  {
    path: "/profile",
    component: () => import("../pages/Profile.vue"),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.token) {
    // redirect to login if the route requires auth and the user is not connected
    next("/login");
  } else if (to.meta.requiresGuest && authStore.token) {
    // redirect  to home if the user is connected and tries to access auth pages
    next("/");
  } else {
    next();
  }
});

export default router;
