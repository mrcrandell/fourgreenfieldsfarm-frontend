<script setup lang="ts">
import { ref, reactive, computed } from "vue";
import { useAuthStore } from "~/store/auth";

const authStore = useAuthStore();
const router = useRouter();

interface loginForm {
  email: string;
  password: string;
}

const loginForm: loginForm = {
  email: "",
  password: "",
};

const email: string = "";
const password: string = "";
const isLoading: boolean = false;
const formError: any = reactive({});
const submitBtnText = computed(() => {
  if (isLoading) {
    return "Loading...";
  }
  return "Submit";
});

/**
 * If success: redirect to home page
 * Else display alert error
 */
/* function login() {
  authStore
    .login(loginForm)
    .then((_response) => router.push("/"))
    .catch((error) => console.log("API error", error));
} */

function validateForm() {
  // formError.value = {};
  let isFormValid = true;
  if (email === "") {
    isFormValid = false;
    formError.email = "Please enter an email.";
  } else {
    formError.email = null;
  }
  if (password === "") {
    isFormValid = false;
    formError.password = "Please enter a password.";
  } else {
    formError.password = null;
  }
  console.log(formError);
  return isFormValid;
}

function submitForm() {
  console.log(email);
  const isFormValid = validateForm();
  if (isFormValid) {
    console.log("submit");
    authStore.login({ email, password });
  }
}
</script>

<template>
  <form
    class="login-form"
    autocomplete="off"
    @submit.prevent="submitForm"
  >
    <div class="logo-container">
      <!-- <Logo /> -->
    </div>
    <div
      class="form-group"
      :class="{ 'is-invalid': formError && formError.username }"
    >
      <label for="username">Email
        <input
          id="email"
          v-model="email"
          type="text"
          class="form-control"
          :class="{ 'is-invalid': formError && formError.email }"
        ></label>
      <div
        v-if="formError && formError.email"
        class="invalid-feedback"
      >
        {{ formError.email }}
      </div>
    </div>
    <div
      class="form-group"
      :class="{ 'is-invalid': formError && formError.password }"
    >
      <label for="password">Password
        <input
          id="password"
          v-model="password"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': formError && formError.password }"
        ></label>
      <div
        v-if="formError && formError.password"
        class="invalid-feedback"
      >
        {{ formError.password }}
      </div>
    </div>
    <div class="form-group">
      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isLoading"
      >
        {{ submitBtnText }}
      </button>
    </div>
  </form>
</template>