<template>
  <main class="hk-customers" :data-color="store.getTheme">
    <div class="hk-customers__programme-section">
      <h2>{{ $t("text-customers.title-1") }}</h2>
      <UnderlineTitle :color="'yellow'">
        {{ $t("text-customers.title-2") }}
      </UnderlineTitle>
    </div>
    <p>{{ $t("text-customers.paragraph-1") }}</p>
    <div class="hk-customers__benefits-section">
      <UnderlineTitle :color="'yellow'">
        {{ $t("text-customers.title-3") }}
      </UnderlineTitle>
    </div>
    <p>{{ $t("text-customers.paragraph-2") }}</p>
    <Benefits class="hk-custommers__benefits-included" />
  </main>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-customers {
  display: flex;
  flex-direction: column;
  font-family: $font-main;
  height: fit-content;
  padding-left: 10rem;
  padding-right: 30rem;
  gap: 2rem;

  &[data-color="light"] {
    background-color: $font-color--light;
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    background-color: $font-color--dark;
    color: $font-color--light;
  }

  &__programme-section {
    display: flex;
    flex-direction: row;
    margin-top: 5rem;

    h2 {
      font-size: $font-size--large;
      padding-right: rem(15px);
    }
  }

  p {
    font-size: $font-size--medium;
  }

  &__benefits-section {
    margin-top: 2rem;
  }
}
</style>
