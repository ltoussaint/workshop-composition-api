<template>
  <UCard class="w-80">
    <template #header>
      <div class="flex items-center">
        <UAvatar class="mb-6 mr-8" size="2xl" :src="user.avatar" :alt="fullname" />
        {{ fullname }}
      </div>
    </template>
    <div>Firstname : {{ user.firstname }}</div>
    <div>Lastname : {{ user.lastname }}</div>
    <div>Age : {{ user.age }}</div>
    <div>Gender : {{ user.gender }}</div>
  </UCard>
</template>

<script setup>
// Replace this user const by a props named user
const user = {
  firstname: 'Jane',
  lastname: 'Doe',
  age: 28,
  avatar: 'https://avatar.iran.liara.run/public/52',
  gender: 'female',
}

// Create a computed to build a fullname from firstname and lastname
const fullname = 'Fake fullname'
</script>
