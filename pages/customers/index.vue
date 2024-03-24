<template>
  <Commitment />
  <Banner>
    {{ $t("text-customers.banner") }}
  </Banner>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
onMounted(() => {
  store.setCurrentPage('main')
})
</script>
