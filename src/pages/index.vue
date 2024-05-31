<template>
  <h1>Excercises</h1>
  <UVerticalNavigation :links="links" />
</template>

<script setup lang="ts">
const links = [
  {
    label: 'Exercise n°1 : ref',
    icon: 'i-heroicons-home',
    to: '/ref',
  },
  {
    label: 'User list',
    icon: 'i-heroicons-home',
    to: '/users',
  },
]
</script>
