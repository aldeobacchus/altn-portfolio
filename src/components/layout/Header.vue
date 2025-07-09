<template>
  <header class="text-white font-tex-gyre-heros p-4">
    <div class="flex flex-col md:flex-row md:justify-between md:items-start w-full">
      <!-- Artist Name / texttop2 -->
      <div class="mb-4 md:mb-0 md:w-1/6">
        <h1 class="text-sm leading-tight">hi, i’m jules (louis) moynat (b.1999)</h1>
      </div>

      <!-- Artist Information Part 1 / texttop3 -->
      <div class="mb-4 md:mb-0 md:w-2/6">
        <p class="text-sm leading-tight">
          i do graphic design, art, research and creative direction. i’m really interested in spaces
          (physical, immaterial or invisible) and their components (objects, flows & infrastructures).
        </p>
      </div>

      <!-- Artist Information Part 2 / texttop4 -->
      <div class="mb-4 md:mb-0 md:w-2/6">
        <p class="text-sm leading-tight">
          i work in the fields of music, fashion, publishing, art and industrial design (among others).
        </p>
      </div>

      <!-- Placeholder for texttop1, texttop5, texttop6 - handled by spacing/flex behavior -->
    </div>

    <div class="flex flex-col md:flex-row md:justify-between md:items-start w-full mt-4">
      <!-- View Switcher Button / textmid2 -->
      <div class="mb-4 md:mb-0 md:w-1/6">
        <button @click="toggleView" class="text-sm leading-tight underline cursor-pointer">
          feed
        </button>
      </div>

      <!-- Placeholder for textmid1, textmid3 -->

      <!-- "you can find me here:" / textmid4 -->
      <div class="mb-4 md:mb-0 md:w-1/6">
        <p class="text-sm leading-tight">you can find me here:</p>
      </div>

      <!-- Social Links / textmid5 -->
      <div class="mb-4 md:mb-0 md:w-1/6">
        <ul class="list-none p-0 m-0">
          <li><a href="mailto:moynatjules@gmail.com" class="text-sm leading-tight underline">mail</a></li>
          <li><a href="https://www.instagram.com/julesmoynat/" target="_blank" class="text-sm leading-tight underline">ig</a></li>
          <li><a href="https://www.are.na/jules-moynat/channels" target="_blank" class="text-sm leading-tight underline">are.na</a></li>
        </ul>
      </div>

      <!-- "portfolio available upon request." / textmid6 -->
      <div class="md:w-1/6">
        <p class="text-sm leading-tight">portfolio available upon request.</p>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
// This component will emit an event to its parent to handle view switching
const emit = defineEmits(['toggle-view']);

const toggleView = () => {
  emit('toggle-view');
};
</script>

<style scoped>
/* Add any specific styles here if needed, but prefer Tailwind classes */
</style>