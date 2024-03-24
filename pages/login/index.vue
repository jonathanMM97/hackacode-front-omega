<template>
  <Register />
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
onMounted(() => {
  store.setCurrentPage('main')
})
</script>
