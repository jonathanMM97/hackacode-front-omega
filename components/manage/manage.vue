<template>
  <main class="hk-manage">
    <h2>{{ $t("manage.welcome") }} {{ store.getNameUser }}</h2>
    <div class="hk-manage__menu">
      <Sidebar />
      <div class="hk-manage__menu-selected">
        <SelectOption />
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-manage {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6rem;
  font-family: $font-main;

  &__menu {
    width: 100%;
    display: flex;
    flex-direction: row;
    padding-top: 3rem;
    padding-left: 10rem;
    padding-bottom: 2rem;
    color: $font-color--light;
    background-image: url(@/public/media/jungle.png);
    background-size: cover;
    background-repeat: no-repeat;
  }

  &__menu-selected {
    position: absolute;
    width: 90rem;
    height: 44rem;
    left: 15rem;
    top: 12rem;
    box-shadow: 10px 10px 10px rgba($font-color--dark, 0.2);
    border-radius: rem(20px);
    background-color: $font-color--light;
  }
}
</style>
