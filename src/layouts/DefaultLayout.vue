<template>
  <div class="min-h-screen bg-white text-gray-900">
    <Navbar />

    <main class="pt-16 dark:bg-gray-200">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from '../components/navbar.vue'
import Footer from '../components/footer.vue'
</script>
