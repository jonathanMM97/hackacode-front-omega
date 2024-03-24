<template>
  <Manage class="hk-manage-page" />
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const router = useRouter()
const store = useHackacodeStore();
onMounted(() => {
  if(!store.getShowUserLogin) {
    router.push('/')
  }
})
</script>


<style lang="scss">
.hk-footer {
  display: none;
}
</style>
