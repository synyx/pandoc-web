<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <template #title>
          <div style="display: flex; align-items: center">
            <v-img :inline="true" width="40px" src="/panda.svg" />
            <h1 style="font-size: 22px; margin-left: 8px">Pandoc Web</h1>
          </div>
        </template>
        <template #append>
          <v-btn :icon="isDarkTheme ? 'mdi-weather-sunny' : 'mdi-weather-night'" @click="toggleTheme" />
        </template>
      </v-app-bar>
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
import { useTheme } from 'vuetify';
import HelloWorld from '@/components/HelloWorld.vue';
import { computed } from 'vue';

const theme = useTheme();

const isDarkTheme = computed(() => Boolean(theme.global.current.value.dark));

function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark';
}
</script>
