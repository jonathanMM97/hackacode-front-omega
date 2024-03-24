<template>
  <div class="hk-select-option">
    <MainView v-if="store.getOption === 'main'" />
    <ShowAll v-if="store.getOption === 'all'" />
    <FormService
      v-if="store.getOption !== 'all' && store.getOption !== 'main'"
    />
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-select-option {
  width: 100%;
  height: 100%;
  overflow: auto;
  color: $font-color--dark;
}
</style>