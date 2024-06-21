<script setup lang="ts">
import type { ITagsInputProps } from './types/props';

const props = defineProps<ITagsInputProps>();

// function removeTag() {
//   console.log('REMOVE_TAG');
// }
</script>

<template>
  <div class="tags-input">
    <span
      v-for="(tag, index) in props.tags"
      :key="`${tag}-${index}`"
    >
      <span>{{ tag }}</span>

      <button
        type="button"
        class="tags-input-remove"
      >
        &times;
      </button>
    </span>
  </div>
</template>
