<template>
  <div class="hk-actions">
    <div class="hk-actions-language">
      <Select />
    </div>

    <div
      class="hk-actions-themes"
      :data-color="store.getTheme"
      v-on:click="store.setTheme(store.getTheme === 'light' ? 'dark' : 'light')"
    >
      <Sun v-if="store.getTheme === 'light'" class="hk-sun-icon"></Sun>
      <Moon v-else class="hk-moon-icon"></Moon>
    </div>

    <NuxtLink
      class="hk-actions__login"
      :to="
        (i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') + '/login'
      "
      :data-color="store.getTheme"
      ><p>{{ $t("log-in") }}</p></NuxtLink
    >

    <NuxtLink
      class="hk-message-icon"
      :to="
        (i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') +
        '/contact-us'
      "
      :data-color="store.getTheme"
    >
      <Message class="hk-message-icon__svg" />
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import Sun from "@/public/media/sun-svgrepo-com.svg";
import Moon from "@/public/media/moon.svg";
import Message from "@/public/media/message-icon.svg";

import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
const i18n = useI18n();
</script>

<style lang="scss">
.hk-actions,
.hk-actions-language {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: rem(20px);
}

.hk-actions {
  width: rem(400px);
  font-family: $font-main;
  gap: rem(20px);

  &__login {
    text-decoration: none;
    font-weight: $font-weight--bold;
    &[data-color="light"] {
      color: $font-color--dark;
    }
    &[data-color="dark"] {
      color: $font-color--light;
    }
  }
}

.hk-actions-language {
  display: flex;
  flex-direction: column;
  width: rem(70px);
  align-items: center;
}

.hk-actions-themes {
  overflow: hidden;
  width: rem(60px);
  height: rem(30px);
  border-radius: rem(20px);
  cursor: pointer;

  &[data-color="light"] {
    background-color: $font-color--light-theme;
  }
  &[data-color="dark"] {
    background-color: $font-color--dark-theme;
  }
}

.hk-sun-icon {
  width: rem(50px);
  height: rem(50px);
  scale: 0.9;
  transform: translateX(rem(-25px)) translateY(rem(4px));
}

.hk-moon-icon {
  width: rem(50px);
  height: rem(50px);
  scale: 0.7;
  transform: scaleX(-1) translateX(rem(-30px)) translateY(rem(-10px));
}

.hk-message-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: rem(30px);
  height: rem(30px);
  padding-right: rem(20px);
  scale: 1;
  
  &[data-color="light"] {
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    color: $font-color--light;
  }
}
</style>
