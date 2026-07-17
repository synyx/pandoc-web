<template>
  <v-app>
    <v-main>
      <v-app-bar color="primary" density="compact">
        <template #title>
          <div class="title">
            <v-img :inline="true" width="40px" src="/panda.svg" />
            <h1>Pandoc Web</h1>
          </div>
        </template>
        <template #append>
          <GitHubLink />
          <ThemeToggle />
        </template>
      </v-app-bar>

      <PandocConverter />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import ThemeToggle from '@/components/ThemeToggle.vue';
import PandocConverter from '@/components/PandocConverter.vue';
import GitHubLink from '@/components/GitHubLink.vue';
</script>

<style scoped>
.title {
  display: flex;
  align-items: center;
}

.title h1 {
  margin-left: 0.75em;
  font-size: 2rem;
}
</style>
