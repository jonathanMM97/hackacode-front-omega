<template>
  <header class="hk-header" :data-color="store.getTheme">
    <div class="hk-layout">
      <NuxtLink
        :to="redirectPage"
        v-on:click="disableSidebar"
      >
        <Logo class="hk-layout__logo-icon" :data-color="store.getTheme"></Logo>
      </NuxtLink>
      <PagesSelector />

      <Actions />
    </div>
  </header>
</template>

<script setup lang="ts">
import Logo from "@/public/media/logo.svg";
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
const i18n = useI18n();

const isLogin = store.getShowUserLogin ? '/manage' : '/';
const redirectPage = i18n.locale.value === 'es' ? isLogin + i18n.locale.value : isLogin;

const disableSidebar = () => {
  store.setShowSidebar(false);
  store.setCurrentPage('main')
};
</script>

<style lang="scss">
.hk-header {
  position: sticky;
  z-index: 1;
  top: 0;
  padding-right: rem(20px);
  padding-left: rem(40px);

  &[data-color="light"] {
    color: $font-color--dark;
    background-color: $font-color--light;
    box-shadow: rem(2px) rem(2px) rem(2px) rgba($font-color--dark, 0.1);
  }
  &[data-color="dark"] {
    color: $font-color--light;
    background-color: $font-color--dark;
    box-shadow: rem(2px) rem(2px) rem(2px) rgba($font-color--light, 0.1);
  }
}

.hk-layout {
  display: flex;
  font-family: $font-main;
  justify-content: space-between;
  align-items: center;
  gap: rem(20px);

  &__logo-icon {
    width: rem(150px);
    height: rem(100px);
    scale: 1.3;
    &[data-color="light"] {
      color: $font-color--dark;
    }
    &[data-color="dark"] {
      color: $font-color--light;
    }
  }
}
</style>