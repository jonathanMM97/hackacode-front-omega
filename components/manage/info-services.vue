<template>
  <div class="hk-services" :data-color="store.getTheme">
    <h4>{{ $t("manage.active") }}</h4>
    <div class="hk-services__status">
      <p>{{ $t("manage.service-1") }}</p>
      <img class="hk-services__active" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-services__status">
      <p>{{ $t("manage.service-2") }}</p>
      <img class="hk-services__active" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-services__status">
      <p>{{ $t("manage.service-3") }}</p>
      <img class="hk-services__active" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-services__status">
      <p>{{ $t("manage.service-4") }}</p>
      <img class="hk-services__active" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-services__status">
      <p>{{ $t("manage.service-5") }}</p>
      <img class="hk-services__active" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-services__status">
      <p>{{ $t("manage.service-6") }}</p>
      <img class="hk-services__active" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-services__status">
      <p>{{ $t("manage.service-7") }}</p>
      <img class="hk-services__active" src="@/public/media/icon-active.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-services {
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  font-size: $font-size--small;
  padding-left: 2rem;
  padding-bottom: 2rem;
  margin-right: 6rem;
  margin-top: 4rem;
  border-radius: 20px;
  gap: 20px;
  transform: translateX(-150px);

  &[data-color="light"] {
    color: $font-color--dark;
    box-shadow: -10px 10px 10px rgba($font-color--dark, 0.2);
  }
  &[data-color="dark"] {
    color: $font-color--light;
    box-shadow: -10px 10px 10px rgba($font-color--light, 0.2);
  }

  h4 {
    font-size: 26px;
    font-weight: $font-weight--bold;
    margin-bottom: rem(10px);
  }

  p {
    margin: 0;
  }

  &__status {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  &__active {
    width: 10px;
    height: 10px;
    padding-right: 2rem;
  }
}
</style>
