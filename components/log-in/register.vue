<template>
  <main class="hk-register" :data-color="store.getTheme">
    <div class="hk-register__form">
      <h2>{{ $t("register.title") }}</h2>
      <LogIn class="hk-register__fields" />
    </div>
    <img class="hk-register__img" src="@/public/media/login.png" />
  </main>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-register {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 20rem;
  padding-bottom: 10rem;
  overflow: hidden;

  &[data-color="light"] {
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    color: $font-color--light;
  }

  h2 {
    width: 35rem;
    padding-left: 5rem;
    font-size: $font-size--large;
  }

  &__form {
    width: 70%;
  }

  &__img {
    width: 100%;
    transform: translateX(rem(90px));
  }
}
</style>