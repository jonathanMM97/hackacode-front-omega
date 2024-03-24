<template>
  <Main class="hk-home__main" />
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
onMounted(() => {
  store.setCurrentPage('main')
})
</script>

<style lang="scss">
.hk-home {
  &__main {
    background-color: $font-color--light;
  }
}
</style>
