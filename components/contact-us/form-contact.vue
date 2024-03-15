<template>
  <main class="hk-form-contact" :data-color="store.getTheme">
    <div class="hk-form-contact__title">
      <h2>{{ $t('contact-us.title-1') }}</h2>
      <UnderlineTitle :color="'pink'">
        {{ $t('contact-us.title-2') }}
      </UnderlineTitle>
    </div>
    <UnderlineTitle class="hk-form-contact__end-question" :color="'pink'">
      {{ $t('contact-us.title-3') }}
    </UnderlineTitle>
  </main>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-form-contact {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
    padding-right: rem(10px);
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