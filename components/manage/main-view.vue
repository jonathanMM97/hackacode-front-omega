<template>
  <div class="hk-main-view">
      <InfoProfile class="hk-main-view__info-profile" />
      <InfoServices class="hk-main-view__info-service" />
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-main-view {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
</style>
