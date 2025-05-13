import { defineStore } from "pinia";
import { fetchClient } from "../utils/fetchClient";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    token: localStorage.getItem("token") || null,
  }),

  actions: {
    async register(email, password) {
      await fetchClient("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      // after registration, we connect the user
      await this.login(email, password);
    },

    async login(email, password) {
      const data = await fetchClient("/api/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });

      this.token = data.token;
      this.user = { email: data.email };
      localStorage.setItem("token", data.token);
    },

    logout() {
      this.user = null;
      this.token = null;
      localStorage.removeItem("token");
    },
  },
});
