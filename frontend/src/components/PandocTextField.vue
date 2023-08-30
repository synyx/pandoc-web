<template>
  <v-container>
    <v-btn-toggle class="tw-mb-4" mandatory="mandatory" v-model="selectedOption">
      <v-btn>Markdown</v-btn>
      <v-btn>Textile</v-btn>
    </v-btn-toggle>
    <v-textarea
      v-model="textProperty"
      :auto-grow="false"
      :rows="25"
      :readonly="readOnly"
      :no-resize="true"
      :hide-details="true"
    ></v-textarea>
  </v-container>
</template>

<script setup>
import { computed } from 'vue';

const OPTIONS = ['markdown', 'textile'];

const props = defineProps({
  format: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  readOnly: {
    type: Boolean,
    default: false,
  },
});
const emit = defineEmits(['update:format', 'update:text']);

const selectedOption = computed({
  get: () => OPTIONS.indexOf(props.format),
  set: (value) => emit('update:format', OPTIONS[value] || OPTIONS[0]),
});

const textProperty = computed({
  get: () => props.text,
  set: (value) => emit('update:text', value),
});
</script>
