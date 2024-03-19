<template>
  <main class="hk-contact" :data-color="store.getTheme">
    <div class="hk-contact__title">
      <h2>{{ $t("contact-us.title-1") }}</h2>
      <UnderlineTitle :color="'pink'">
        {{ $t("contact-us.title-2") }}
      </UnderlineTitle>
    </div>
    <UnderlineTitle class="hk-contact__end-question" :color="'pink'">
      {{ $t("contact-us.title-3") }}
    </UnderlineTitle>
    <p>{{ $t("contact-us.description") }}</p>
    <ContactForm />
  </main>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-contact {
  display: flex;
  font-family: $font-main;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 30rem;
  padding-right: 30rem;

  &[data-color="light"] {
    background-color: $font-color--light;
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    background-color: $font-color--dark;
    color: $font-color--light;
  }

  h2 {
    font-size: $font-size--large;
    font-weight: $font-weight--bold;
    padding-right: rem(10px);
  }

  p {
    font-size: $font-size--medium;
  }

  &__title {
    display: flex;
    flex-direction: row;
  }

  &__end-question {
    margin-top: rem(-90px);
  }
}
</style>
