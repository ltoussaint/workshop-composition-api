<template>
  <h1 class="mt-4 mb-8 uppercase text-primary h1 text-xl">Load and display user list</h1>
  <p class="my-2 text-sm">
    When coming from another page, with SPA navigation, navigation should wait until data are
    laoded.
  </p>
  <p class="my-2 text-sm">
    When coming from a full page reload, you should see the list of users directly
  </p>

  <UCard class="my-4">
    <div class="mb-4 uppercase text-lg font-bold">Objective</div>
    <p>
      Use <UKbd size="lg">useAsyncData</UKbd> and <UKbd size="lg">fetchUserList</UKbd> service to
      load the user list.
    </p>
    <p class="mt-4">
      Change the <UKbd size="lg">UserList</UKbd> component to use the
      <UKbd size="lg">users</UKbd> props.
    </p>
  </UCard>

  <UDivider class="mb-8" />

  <div v-if="users.length === 0">No users found</div>
  <UserList v-else :users="users" />
</template>

<script setup>
const users = []
</script>
