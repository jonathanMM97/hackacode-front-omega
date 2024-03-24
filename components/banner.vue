<template>
  <main class="hk-banner" :data-color="store.getTheme">
    <p>
      <slot></slot>
    </p>
    <div class="hk-banner__righ-side">
      <div class="hk-banner__semi-circle-1" :data-color="store.getTheme"></div>
      <div class="hk-banner__semi-circle-2" :data-color="store.getTheme"></div>
      <NuxtLink class="hk-banner__button" to="/contact-us">
        <ButtonBlue>Pruébalo ya</ButtonBlue>
      </NuxtLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss" scoped>
.hk-banner {
  height: rem(200px);
  font-family: $font-main;
  display: flex;
  flex-direction: row;
  padding-left: 20rem;

  &[data-color="light"] {
    background-color: $font-color--dark-green;
    color: $font-color--light;
  }
  &[data-color="dark"] {
    background-color: $font-color--light;
    color: $font-color--dark;
  }

  p {
    width: 45%;
    font-size: rem(48px);
    font-weight: $font-weight--bold;
  }

  &__semi-circle-1 {
    position: absolute;
    right: 20rem;
    scale: -1;
    transform: translateY(rem(-1px)) translateX(rem(-155px));
    height: rem(170px);
    width: rem(320px);
    border-radius: rem(150px) rem(150px) 0 0;

    &[data-color="light"] {
      background-color: $font-color--banner-light-1;
    }
    &[data-color="dark"] {
      background-color: rgba($font-color--light-green, 0.6);
    }
  }

  &__semi-circle-2 {
    position: absolute;
    right: 0;
    transform: translateY(31px);
    height: rem(170px);
    width: rem(320px);
    border-radius: rem(150px) rem(150px) 0 0;
    z-index: 1;

    &[data-color="light"] {
      background-color: $font-color--banner-light-2;
    }
    &[data-color="dark"] {
      background-color: $font-color--dark-green;
    }
  }

  &__button {
    position: absolute;
    text-decoration: none;
    transform: translateX(rem(500px)) translateY(rem(97px));
    z-index: 2;
  }
}
</style>