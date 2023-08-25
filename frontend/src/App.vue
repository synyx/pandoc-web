<template>
  <v-app>
    <v-main>
      <v-app-bar>
        <template #title>
          <div class="tw-flex tw-items-center">
            <v-img :inline="true" width="40px" src="/panda.svg" />
            <h1 class="text-h6 tw-ml-3">Pandoc Web</h1>
          </div>
        </template>
        <template #append>
          <ThemeToggle />
        </template>
      </v-app-bar>

      <PandocConverter />
    </v-main>
  </v-app>
</template>

<script setup>
import ThemeToggle from '@/components/ThemeToggle.vue';
import PandocConverter from '@/components/PandocConverter.vue';
</script>
