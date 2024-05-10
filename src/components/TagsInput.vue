<script setup lang="ts">
// EMITS
const emits = defineEmits([
  'refresh-items',
]);

// MODELS
const model = defineModel<string[]>();

// METHODS
function removeTag(tag: string) {
  model.value = model.value?.filter(t => t !== tag);
}
</script>

<template>
  <div class="flex gap-2">
    <template v-if="model?.length">
      <div
        v-for="tag in model"
        :key="tag"
        class="inline-flex"
      >
        <span class="text-2xl">
          {{ tag }}
        </span>

        <button
          type="button"
          class="tags-input-remove"
          @click="removeTag(tag)"
        >
          &times;
        </button>
      </div>
    </template>

    <template v-else>
      <div class="flex gap-1">
        <p>😿 Unfortunately, the fruits are over</p>

        <button
          type="button"
          title="Restore fruits"
          @click="emits('refresh-items')"
        >
          🔂
        </button>
      </div>
    </template>
  </div>
</template>
