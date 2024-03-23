<template>
  <div class="hk-select-operation">
    <img class="hk-select-operation__icon hk-operation-customer" src="@/public/media/customer.png">
    <img class="hk-select-operation__icon hk-operation-service" src="@/public/media/service.png">
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.hk-select-operation {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: rem(30px);
  padding-top: 1rem;

  &__icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: rem(40px);
    height: rem(40px);
    padding: rem(10px);
    border-radius: rem(20px);
  }
}

.hk-operation-service {
  scale: 2.5;
  height: rem(30px);
}
</style>
