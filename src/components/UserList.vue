<template>
  <ULink
    class="flex flex-row gap-8 w-full"
    v-for="user in users"
    :key="user.id"
    :to="`/users/${user.id}`"
  >
    <UAvatar class="mb-6" size="2xl" :src="user.avatar" />
    <div>Firstname : {{ user.firstname }}</div>
    <div>Lastname : {{ user.lastname }}</div>
    <div>Age : {{ user.age }}</div>
    <div>Gender : {{ user.gender }}</div>
  </ULink>
</template>

<script setup>
// Replace this users const by a props named users which receive a list of users
const users = [
  {
    id: 1,
    firstname: 'Fake',
    lastname: 'User',
    age: 28,
    avatar: 'https://avatar.iran.liara.run/public/1',
    gender: 'female',
  },
  {
    id: 2,
    firstname: 'Fake',
    lastname: 'User 2',
    age: 28,
    avatar: 'https://avatar.iran.liara.run/public/1',
    gender: 'female',
  },
]
</script>
