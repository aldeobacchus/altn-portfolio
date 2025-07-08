<template>
  <div>
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
</script>

<style scoped>
/* Add your layout styles here */
</style>
