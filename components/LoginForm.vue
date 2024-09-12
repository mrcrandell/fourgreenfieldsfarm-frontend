<script setup>
import { ref, computed } from "vue";
import { useAuthStore } from "~/store/auth";
import jwtDecode from 'jwt-decode';

const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const isLoading = false;
const formError = ref({});
const submitBtnText = computed(() => {
  if (isLoading) {
    return "Loading...";
  }
  return "Submit";
});

// Forgot Password
const isModalOpen = ref(false);

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
  if (email.value === "") {
    isFormValid = false;
    formError.value.email = "Please enter an email.";
  } else {
    formError.value.email = null;
  }
  if (password.value === "") {
    isFormValid = false;
    formError.value.password = "Please enter a password.";
  } else {
    formError.value.password = null;
  }
  console.log(formError);
  return isFormValid;
}

async function submitForm() {
  console.log(email);
  const isFormValid = validateForm();
  if (isFormValid) {
    console.log("submit");
    // authStore.login({ email: email.value, password: password.value });
    await $fetch(`/api/user/auth`, {
        method: 'POST',
        body: { email: email.value, password: password.value }
      })
        .then((response) => {
          console.log(response);

          const { token } = response;
          authStore.userAccess = token;
          authStore.user = jwtDecode(token);
          // const token = response.token;

          /* Update Pinia state */
          /* this.user = response
          this.token = this.user.jwt_token
          // Store user in local storage to keep them logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(this.user))
          localStorage.setItem('token', JSON.stringify(this.token)) */
        })
        .catch(error => { throw error })
  }
}

async function submitForgotPassword() {
  console.log('forgot password')
}
</script>

<template>
  <div class="login-form-container">
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
    <button
      class="btn btn-link"
      @click="isModalOpen = true"
    >
      Forgot Password
    </button>
    <BaseModal 
      :is-shown="isModalOpen"
      @closed="isModalOpen = false"
    >
      <form
        class="forgot-password-form"
        autocomplete="off"
        @submit.prevent="submitForgotPassword"
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
    </BaseModal>
  </div>
</template>