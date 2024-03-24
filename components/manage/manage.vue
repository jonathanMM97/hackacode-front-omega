<template>
  <main class="hk-manage">
    <h2 :data-color="store.getTheme">{{ $t("manage.welcome") }} {{ store.getNameUser }}</h2>
    <div class="hk-manage__menu">
      <Sidebar v-if="store.getShowSidebar"/>
      <div class="hk-manage__menu-empty"></div>
      <div class="hk-manage__menu-selected" :data-color="store.getTheme">
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
  color: $font-color--dark;
  font-family: $font-main;

  h2[data-color="dark"]{
    color: $font-color--light;
  }

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
    overflow: auto;
    left: 15rem;
    top: 12rem;
    border-radius: rem(20px);
    
    &[data-color="light"] {
      background-color: $font-color--light;
      box-shadow: 10px 10px 10px rgba($font-color--dark, 0.2);
    }
    &[data-color="dark"] {
      background-color: $font-color--dark;
      color: $font-color--light;
      box-shadow: 10px 10px 10px rgba($font-color--light, 0.2);
    }
  }

  &__menu-empty {
    padding-bottom: 38rem;
  }
}
</style>
