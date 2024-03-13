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
      :to="(i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') + '/login'"
      :data-color="store.getTheme"
      ><p>{{ $t('log-in') }}</p></NuxtLink
    >
    <Message class="hk-message-icon"></Message>
  </div>
</template>

<script setup lang="ts">
import Sun from '@/public/media/sun-svgrepo-com.svg'
import Moon from '@/public/media/moon.svg'
import Message from '@/public/media/message-icon.svg'

import { useHackacodeStore } from '~/stores/Hackacode'

const store = useHackacodeStore()
const i18n = useI18n()
</script>

<style lang="scss">
.hk-actions,
.hk-actions-language {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}

.hk-actions {
  width: 400px;
  gap: 20px;

  &__login {
    text-decoration: none;
    font-weight: $font-weight--bold;
    &[data-color='light'] {
      color: $font-color--dark;
    }
    &[data-color='dark'] {
      color: $font-color--light;
    }
  }
}

.hk-actions-language {
  display: flex;
  flex-direction: column;
  width: 70px;
  align-items: center;
}

.hk-actions-themes {
  overflow: hidden;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;

  &[data-color='light'] {
    background-color: $font-color--light-theme;
  }
  &[data-color='dark'] {
    background-color: $font-color--dark-theme;
  }
}

.hk-sun-icon {
  width: 50px;
  height: 50px;
  scale: 0.9;
  transform: translateX(-25px) translateY(4px);
}

.hk-moon-icon {
  width: 50px;
  height: 50px;
  scale: 0.7;
  transform: scaleX(-1) translateX(-30px) translateY(-10px);
}

.hk-message-icon {
  width: 30px;
  height: 30px;
  padding-right: 20px;
  scale: 1;
}
</style>
