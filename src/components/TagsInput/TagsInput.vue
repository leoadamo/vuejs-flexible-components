<script setup lang="ts">
import { ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import type { ITags } from './types/props';

const tags = defineModel<ITags[]>();

const newTag = ref('');

function addTag(text: string) {
  tags.value?.push({
    id: uuidv4(),
    text,
  });

  newTag.value = '';
}

function removeTag(index: number) {
  tags.value?.splice(index, 1);
}
</script>

<template>
  <div class="tags-input">
    <span
      v-for="(tag, index) in tags"
      :key="`${tag}-${index}`"
    >
      <span>{{ tag }}</span>

      <button
        type="button"
        class="tags-input-remove"
        @click="removeTag(index)"
      >
        &times;
      </button>
    </span>

    <input
      v-model="newTag"
      class="tags-input-text"
      placeholder="Add tag..."
      @keydown.enter="addTag(newTag)"
    >
  </div>
</template>
