<template>
  <div>
    <Header @toggle-view="handleToggleView" />
    <main>
      <CVView v-if="isCVViewActive" />
      <FeedView v-else />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from './Header.vue';
import CVView from '../../views/CVView.vue';
import FeedView from '../../views/FeedView.vue';

const isCVViewActive = ref(true);

const handleToggleView = () => {
  isCVViewActive.value = !isCVViewActive.value;
};
</script>

<style scoped>
/* Add your layout styles here */
</style>
