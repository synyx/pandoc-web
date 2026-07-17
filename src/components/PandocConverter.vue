<template>
  <div class="pandoc-converter">
    <PandocTextField v-model:format="firstFormat" v-model:text="inputText" />
    <PandocTextField v-model:format="secondFormat" :text="outputText" read-only />
  </div>
</template>

<script setup>
import PandocTextField from '@/components/PandocTextField.vue';
import { computed, ref, watch } from 'vue';
import { convert } from 'pandoc-wasm';
import { debounceFunc } from '@/helpers/Debounce';

const INPUT_DEBOUNCE_DELAY_IN_MS = 500;

const inputFormat = ref('gfm');
const inputText = ref('');
const outputText = ref('');

const firstFormat = computed({ get: () => inputFormat.value, set: (value) => (inputFormat.value = value) });
const secondFormat = computed({
  get: () => (inputFormat.value === 'gfm' ? 'textile' : 'gfm'),
  set: (value) => (inputFormat.value = value === 'gfm' ? 'textile' : 'gfm'),
});

function runPandoc() {
  convert(
    {
      from: firstFormat.value,
      to: secondFormat.value,
    },
    inputText.value,
    {},
  ).then((res) => {
    outputText.value = String(res.stdout);
  });
}
const debouncedRunPandoc = debounceFunc(runPandoc, INPUT_DEBOUNCE_DELAY_IN_MS);

watch([inputText, firstFormat], () => {
  debouncedRunPandoc();
});
</script>

<style scoped>
.pandoc-converter {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1rem;

  padding: 1rem 1.5rem;
  height: 100%;
}
</style>
