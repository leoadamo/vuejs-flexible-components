<script setup lang="ts">
import type { ITags } from '@components/TagsInput/types/props';

import { ref } from 'vue';

// COMPONENTS
import TagsInput from '@components/TagsInput/TagsInput.vue';

const tags = ref<ITags[]>([
  {
    id: 1,
    text: 'Lorem ipsum dolor',
  },

  {
    id: 2,
    text: 'Sit amet',
  },
]);
</script>

<template>
  <main class="grid w-full h-screen place-content-center">
    <tags-input :tags />
  </main>
</template>
