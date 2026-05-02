<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Navbar />

    <main class="dark:bg-gray-200">
      <slot />
    </main>
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
</script>
