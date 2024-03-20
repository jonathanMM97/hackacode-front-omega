<template>
  <div class="hk-select-operation">
    <Plus class="hk-select-operation__icon" />
    <Search class="hk-select-operation__icon" />
    <Delete class="hk-select-operation__icon" />
  </div>
</template>

<script setup lang="ts">
import Plus from "@/public/media/icon-plus.svg";
import Search from "@/public/media/icon-search.svg";
import Delete from "@/public/media/icon-delete.svg";
</script>

<style lang="scss">
.hk-select-operation {
  display: flex;
  justify-content: center;
  gap: rem(30px);
  padding-top: 1rem;

  &__icon {
    width: rem(40px);
    height: rem(40px);
    padding: rem(10px);
    border-radius: rem(20px);
  }
}
</style>
