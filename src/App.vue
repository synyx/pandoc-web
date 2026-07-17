<template>
  <v-app>
    <v-main>
      <v-app-bar color="primary" density="compact">
        <template #title>
          <div class="title">
            <v-img :inline="true" width="40px" src="/panda.svg" />
            <h1 class="text-h6">Pandoc Web</h1>
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

<style scoped>
.title {
  display: flex;
  align-items: center;
}

.title h1 {
  margin-left: 0.75em;
}
</style>
