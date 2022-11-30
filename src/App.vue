<script setup lang="ts">
</script>

<template>
  <router-link to="/">Go to Home</router-link>
  <router-link :to="{ path: '/userdetail', query: { id: '111' } }"> Go To MDetail </router-link>
  <router-view></router-view>
</template>
