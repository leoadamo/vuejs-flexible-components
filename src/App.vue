<script setup lang="ts">
// DEPENDENCIES
import { ref } from 'vue';

// COMPONENTS
import TagsInput from './components/TagsInput.vue';

const defaultValue: string[] = [
  '🍌',
  '🥑',
  '🍓',
  '🍇',
];

const fruits = ref([
  ...defaultValue,
]);

// METHODS
function setInitialValue() {
  fruits.value = [
    ...defaultValue,
  ];
}

function init() {
  setInitialValue();
}

init();
</script>

<template>
  <main class="grid w-full h-screen place-content-center">
    <tags-input
      v-model="fruits"
      @refresh-items="setInitialValue"
    />
  </main>
</template>
