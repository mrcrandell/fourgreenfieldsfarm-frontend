<script setup>
import { useAuthStore } from "~/store/auth";
const config = useRuntimeConfig();
const authStore = useAuthStore();

// console.log(authStore.isTokenValid);

authStore.userAccess = { firstName: "Matt" };

console.log(config.public.appUrl);

/* const data = await useFetch(`${config.public.appUrl}/api/cal-event`)
  .then((response) => {
    console.log(response.data);
    const data = response["data"]["_rawValue"];
    // console.log(calEvent);
    return data;
  })
  .catch((err) => {
    console.log(err);
  });*/

const { data } = await useFetch(`${config.public.appUrl}/api/cal-event`);
const calEvent = ref(data?.calEvent)
console.log(calEvent.value);

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
