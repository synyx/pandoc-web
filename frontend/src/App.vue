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
      <HelloWorld />
    </v-main>
  </v-app>
</template>

<script setup>
import HelloWorld from '@/components/HelloWorld.vue';
import ThemeToggle from '@/components/ThemeToggle.vue';
</script>
