<template>
  <div>
    <template v-if="authStore.isTokenValid">
      Admin Layout
      <slot />
    </template>
    <template v-else>
      <LoginForm />
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAuthStore } from "~/store/auth";
const config = useRuntimeConfig();
const authStore = useAuthStore();

// console.log(authStore.isTokenValid);

authStore.userAccess = { firstName: "Matt" };

console.log(config.public.appUrl);

const data = await useFetch(`${config.public.appUrl}/api/cal-event`)
  .then((response) => {
    // console.log(response.data["_rawValue"]);
    const data = response["data"]["_rawValue"];
    // console.log(calEvent);
    return data;
  })
  .catch((err) => {
    console.log(err);
  });

// const { data } = await useFetch(`${config.public.appUrl}/api/cal-event`);
console.log(data);

/* const testData = await useFetch(`https://api.sampleapis.com/beers/ale`)
  .then((response) => {
    console.log(response.data.value);
    return response;
  })
  .catch((err) => {
    console.log(err);
  }); */
/* const { data: testData } = await useFetch(
  `https://api.sampleapis.com/beers/ale`
); */
/* const { data: testData } = await useFetch(
  `https://api-dev-2887-3.24preview.com/folder/list`
); */
// console.log(testData["_rawValue"]["folder"]);
// const { folder } = testData.value;
// console.log(folder["Proxy"]);

/* await $fetch(`/api/event`, {
  method: "GET",
})
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    throw error;
  }); */
</script>

<script lang="ts">
export default {
  name: "Admin",
  mounted() {
    // eslint-disable-next-line
    // console.log(authStore);
  },
};
</script>