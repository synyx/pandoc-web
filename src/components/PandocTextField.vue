<template>
  <v-container class="text-field-container">
    <v-btn-toggle class="toggle-area" mandatory v-model="selectedOption">
      <v-btn color="primary">Markdown</v-btn>
      <v-btn color="primary">Textile</v-btn>
    </v-btn-toggle>
    <v-textarea
      v-model="textProperty"
      :auto-grow="false"
      :rows="25"
      :readonly="readOnly"
      :no-resize="true"
      :hide-details="true"
    ></v-textarea>
    <transition name="loading">
      <div v-if="loading" class="loading-overlay">
        <v-progress-circular indeterminate color="primary" />
        <span class="loading-overlay-text">Downloading Pandoc WASM</span>
      </div>
    </transition>
  </v-container>
</template>

<script setup lang="ts">
import { computed } from "vue";

const OPTIONS = ["gfm", "textile"];

const props = withDefaults(
  defineProps<{
    format: string;
    text: string;
    readOnly?: boolean;
    loading?: boolean;
  }>(),
  {
    readOnly: false,
    loading: false,
  },
);
const emit = defineEmits(["update:format", "update:text"]);

const selectedOption = computed({
  get: () => OPTIONS.indexOf(props.format),
  set: (value) => emit("update:format", OPTIONS[value] || OPTIONS[0]),
});

const textProperty = computed({
  get: () => props.text,
  set: (value) => emit("update:text", value),
});
</script>

<style scoped>
.toggle-area {
  margin-bottom: 1rem;
}

.text-field-container {
  position: relative;
}

.loading-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: light-dark(rgba(210, 210, 210, 0.8), rgba(20, 20, 20, 0.8));
}

.loading-overlay-text {
  margin-left: 0.5em;
}

.loading-enter-active,
.loading-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.loading-enter-from,
.loading-leave-to {
  opacity: 0;
}
</style>
