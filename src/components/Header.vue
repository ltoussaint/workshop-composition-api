<template>
  <div class="header">
    <UHorizontalNavigation
      :links="links"
      class="flex justify-center gap-6 header__navigation border-b border-gray-200 dark:border-gray-800"
    />
  </div>
</template>

<script setup lang="ts">
const links = [
  {
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/',
  },
]
</script>
