<script setup>
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
</script>

<template>
  <div>
    <h1>Admin child page</h1>
    <button
      class="btn"
      @click="authStore.logout"
    >
      Logout
    </button>
  </div>
</template>
