<template>
  <div class="hk-selector__content-text">
    <NuxtLink
      class="hk-selector__content-about"
      :data-color="store.getTheme"
      :to="
        (i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') +
        '/about-us'
      "
      ><p>{{ $t("about-us") }}</p></NuxtLink
    >
    <NuxtLink
      class="hk-selector__content-customer"
      :data-color="store.getTheme"
      :to="
        (i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') +
        '/customers'
      "
      ><p>{{ $t("customers") }}</p></NuxtLink
    >
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
const i18n = useI18n();
</script>

<style lang="scss">
.hk-selector {
  font-family: $font-main;
  &__content-text {
    display: flex;
    font-family: $font-main;
    font-size: $font-size--small;
    width: rem(200px);
    justify-content: space-between;
    gap: rem(20px);
  }

  &__content-about,
  &__content-customer {
    text-decoration: none;
    &[data-color="light"] {
      color: $font-color--dark;
    }
    &[data-color="dark"] {
      color: $font-color--light;
    }
  }
}
</style>