<template>
  <div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md mx-auto">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <h1 class="text-2xl font-bold text-gray-900 mb-6">My Profile</h1>

        <div class="space-y-6">
          <div>
            <p class="text-sm text-gray-600">Email: {{ user?.email }}</p>
          </div>

          <button
            @click="handleLogout"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/authStore";

const router = useRouter();
const authStore = useAuthStore();
const { user } = storeToRefs(authStore);

const handleLogout = () => {
  authStore.logout();
  router.push("/login");
};
</script>
