<script setup lang="ts">
import type { ITags } from '@components/TagsInput/types/props';
import { ref } from 'vue';

// COMPONENTS
import TagsInput from '@components/TagsInput/TagsInput.vue';

const tags = ref<ITags[]>([]);
</script>

<template>
  <main class="grid w-full h-screen place-content-center">
    <tags-input v-model="tags" />
  </main>
</template>
