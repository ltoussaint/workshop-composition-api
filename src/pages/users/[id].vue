<template>
  <ULink class="text-primary" to="/users">&lt; Back to user list</ULink>
  <h1 class="mt-4 mb-8 uppercase text-primary h1 text-xl">Load and display a single user</h1>
  <UCard class="my-4">
    <div class="mb-4 uppercase text-lg font-bold">Objective</div>
    <p>Retrieve the user id using `useRoute`</p>
    <p class="mt-4">
      Use <UKbd size="lg">useAsyncData</UKbd> and <UKbd size="lg">fetchUser</UKbd> service to load
      the user from the id in the url.
    </p>
    <p class="mt-4">
      Change the <UKbd size="lg">UserProfile</UKbd> component to use the
      <UKbd size="lg">user</UKbd> props.
    </p>
  </UCard>
  <UDivider class="mb-8" />
  <div v-if="!user">User not found</div>
  <UserProfile v-else class="mt-6" :user="user" />
</template>

<script setup>
const user = null
</script>
