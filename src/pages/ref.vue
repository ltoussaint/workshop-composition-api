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
    <p>Create a ref called <UKbd size="lg">displayCard</UKbd> to handle the toggle state.</p>
    <p class="mt-4">
      Create a computed which display "true" or "false" depending on the value of the
      <UKbd size="lg">displayCard</UKbd>.
    </p>
    <p class="mt-4">
      Create a function <UKbd size="lg">hideCard</UKbd> which force
      <UKbd size="lg">displayCard</UKbd> to <UKbd size="lg">false</UKbd>.
    </p>
  </UCard>
  <UDivider class="mb-8" />

  <div>
    <UToggle v-model="displayCard" class="mr-6" />
    Toggle value : {{ displayText }}
  </div>

  <UCard class="mt-4" v-if="displayCard">
    <div>This card must be displayed when toggle is true</div>
    <UButton class="mt-4" @click="hideCard">Hide card</UButton>
  </UCard>
</template>

<script setup>
const displayCard = ref(false)

const displayText = 'false'
</script>
