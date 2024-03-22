<template>
  <div class="hk-main-view">
    <div class="hk-main-view__operations">
      <h3>{{ $t("manage.operations") }}</h3>
      <SelectOperation />
    </div>
    <div class="hk-main-view__info">
      <InfoProfile class="hk-main-view__info-profile" />
      <InfoServices class="hk-main-view__info-service" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.hk-main-view {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: $font-size--medium;
  }

  &__info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  &__info-profile {
    width: 100%;
  }
}
</style>
