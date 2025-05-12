import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import Login from "../pages/Login.vue";
import Profile from "../pages/Profile.vue";
import Register from "../pages/Register.vue";
import { useAuthStore } from "../stores/authStore";

const routes = [
  { path: "/", component: App },
  {
    path: "/login",
    component: Login,
    meta: { requiresGuest: true },
  },
  {
    path: "/register",
    component: Register,
    meta: { requiresGuest: true },
  },
  {
    path: "/profile",
    component: Profile,
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
