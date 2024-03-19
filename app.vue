<template>
  <div class="page" :data-color="store.getTheme">
    <Header />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.page {
  margin: -10px;

  &[data-color="light"] {
    background-color: $font-color--light;
  }
  &[data-color="dark"] {
    background-color: $font-color--dark;
  }
}
</style>
