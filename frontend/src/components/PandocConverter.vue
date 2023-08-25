<template>
  <div class="tw-grid tw-grid-cols-2 tw-grid-rows-1 tw-space-x-4 tw-px-4 tw-py-6 tw-h-full">
    <PandocTextField v-model:format="firstFormat" />
    <PandocTextField v-model:format="secondFormat" />
  </div>
</template>

<script setup>
import PandocTextField from '@/components/PandocTextField.vue';
import { computed, ref } from 'vue';

const inputFormat = ref('markdown');

const firstFormat = computed({ get: () => inputFormat.value, set: (value) => (inputFormat.value = value) });
const secondFormat = computed({
  get: () => (inputFormat.value === 'markdown' ? 'textile' : 'markdown'),
  set: (value) => (inputFormat.value = value === 'markdown' ? 'textile' : 'markdown'),
});
</script>
