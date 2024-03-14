<template>
  <header class="hk-header" :data-color="store.getTheme">
    <div class="hk-layout">
      <NuxtLink :to="(i18n.locale.value === 'es' ? '/' + i18n.locale.value : '/')">
        <Logo class="hk-layout__logo-icon" :data-color="store.getTheme" ></Logo>
      </NuxtLink>
      <div class="hk-layout__content-text">
        <NuxtLink class="hk-layout__content-about" :data-color="store.getTheme" :to="(i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') + '/about-us'"><p>{{ $t('about-us')}}</p></NuxtLink>
        <NuxtLink class="hk-layout__content-customer" :data-color="store.getTheme" :to="(i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') + '/customers'"><p>{{ $t('customers') }}</p></NuxtLink>
      </div>

      <Actions/>
    </div>
  </header>
</template>

<script setup lang="ts">

import Logo from "@/public/media/logo.svg";
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
const i18n = useI18n();
</script>

<style lang="scss">
.hk-header {
  position: sticky;
  top: 0;
  padding-right: rem(20px);
  padding-left: rem(40px);

  &[data-color="light"] {
    color: $font-color--dark;
    background-color: $font-color--light;
    box-shadow: 2px 2px 2px rgba($font-color--dark, 0.1);
  }
  &[data-color="dark"] {
    color: $font-color--light;
    background-color: $font-color--dark;
    box-shadow: 2px 2px 2px rgba($font-color--light, 0.1);
  }
}

.hk-layout {
  display: flex;
  font-family: $font-main;
  justify-content: space-between;
  align-items: center;
  gap: 20px;

  &__logo-icon {
    width: 150px;
    height: 100px;
    scale: 1.3;
    &[data-color="light"] {
      color: $font-color--dark;
    }
    &[data-color="dark"] {
      color: $font-color--light;
    }
  }

  &__content-text {
    display: flex;
    font-family: $font-main;
    font-size: $font-size--small;
    width: 200px;
    justify-content: space-between;
    gap: 20px;
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
