<template>
  <v-btn :icon="isDarkTheme ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="toggleTheme" />
</template>

<script setup>
import { useTheme } from 'vuetify';
import { computed } from 'vue';
import { setSavedTheme } from '@/helpers/Theme';

const theme = useTheme();

const isDarkTheme = computed(() => Boolean(theme.global.current.value.dark));

function toggleTheme() {
  const newTheme = theme.global.current.value.dark ? 'light' : 'dark';
  theme.global.name.value = newTheme;
  setSavedTheme(newTheme);
}
</script>
