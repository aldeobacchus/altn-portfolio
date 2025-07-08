<script setup lang="ts">
import { ref } from 'vue'
import Layout from './components/layout/Layout.vue'
import CVView from './views/CVView.vue'
import FeedView from './views/FeedView.vue'

const currentView = ref('cv') // 'cv' or 'feed'

const toggleView = () => {
  currentView.value = currentView.value === 'cv' ? 'feed' : 'cv'
}
</script>

<template>
  <Layout>
    <button @click="toggleView">Switch View</button>
    <CVView v-if="currentView === 'cv'" />
    <FeedView v-else />
  </Layout>
</template>

<style scoped></style>
