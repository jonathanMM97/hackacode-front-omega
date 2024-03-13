<template>
  <header class="hk-header" :data-color="theme">
    <div class="hk-layout">
      <NuxtLink :to="(i18n.locale.value === 'es' ? '/' + i18n.locale.value : '/')" v-on:click="selectLanguage('eng')">
        <Logo class="hk-layout__logo-icon" :data-color="theme" ></Logo>
      </NuxtLink>

      <div class="hk-layout__content-text">
        <NuxtLink class="hk-layout__content-about" :data-color="theme" :to="(i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') + '/about-us'"><p>{{ $t('about-us')}}</p></NuxtLink>
        <NuxtLink class="hk-layout__content-customer" :data-color="theme" :to="(i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') + '/customers'"><p>{{ $t('customers') }}</p></NuxtLink>
      </div>

      <div class="hk-layout__utilities">

        <div class="hk-layout__utilities-language">
          <div class="hk-layout__utilities-language__container" v-on:click="changeLanguage">
            <Language class="hk-layout__language-icon" ></Language>
            <p>{{ $t('language') }}</p>
            <Chevron class="hk-layout__chevron" ></Chevron>
          </div>
          <div v-if="showSelector" class="hk-layout__utilities-language__selector" :data-color="theme" >
            <NuxtLink :class="['hk-layout__utilities-language__selector-eng', {'hk-layout__selector-bold': $t('language') === 'Eng'}]" :to="switchLocalePath('en')" v-on:click="selectLanguage('eng')"><p>Eng</p></NuxtLink>
            <NuxtLink :class="['hk-layout__utilities-language__selector-esp', {'hk-layout__selector-bold': $t('language') === 'Esp'}]" :to="switchLocalePath('es')" v-on:click="selectLanguage('esp')" ><p>Esp</p></NuxtLink>
          </div>
        </div>

        <div class="hk-layout__utilities-themes" :data-color="theme" v-on:click="changeTheme(theme === 'light' ? 'dark' : 'light')" >
          <Sun v-if="theme === 'light' || theme === undefined" class="hk-layout__sun-icon" ></Sun>
          <Moon v-else class="hk-layout__moon-icon"></Moon>
        </div>

        <NuxtLink :to="(i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') + '/login'" ><p>{{ $t('log-in') }}</p></NuxtLink>
        <Message class="hk-layout__message-icon" ></Message>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">

import Logo from "@/public/media/logo.svg";
import Language from "@/public/media/language-icon.svg";
import Chevron from "@/public/media/chevron.svg";
import Sun from "@/public/media/sun-svgrepo-com.svg";
import Moon from "@/public/media/moon.svg"
import Message from "@/public/media/message-icon.svg";

const props = defineProps({
  theme: {
    type: String,
    default: undefined
  }
})

const i18n = useI18n();
const currentlanguage = i18n.locale.value;
const switchLocalePath = useSwitchLocalePath()
const showSelector = ref(false);
const lang = ref(currentlanguage);
const changeLanguage = () : void => {
  showSelector.value = !showSelector.value;
};
const emit = defineEmits(['input']);
const selectLanguage = (language) : void => {
  lang.value = language;
  showSelector.value = false;
}

const changeTheme = (currentTheme) : void => {
  emit('input', currentTheme);
}
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
  }
  &[data-color="dark"] {
    color: $font-color--light;
    background-color: $font-color--dark;
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

  &__utilities,
  &__utilities-language{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
  }

  &__utilities {
    width: 400px;
    gap: 20px;
  }

  &__selector-bold {
    font-weight: $font-weight--bold;
  }

  &__utilities-language {
    display: flex;
    flex-direction: column;
    width: 70px;
    align-items: center;
    &__container {
      display: flex;
      width: 70px;
      font-weight: $font-weight--bold;
      cursor: pointer;
      justify-content: space-between;
      gap: 10px;
    }

    &__selector {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: absolute;
      justify-content: center;
      top: 75px;
      width: 70px;
      height: 90px;
      border-radius: 20px;
      box-shadow: 5px 5px 5px rgba($font-color--dark, 0.2);
      &[data-color="light"] {
        background-color: $font-color--light;
        p {
          color: $font-color--dark;
        }
      }
      &[data-color="dark"] {
        background-color: $font-color--dark;
        p {
          color: $font-color--light;
        }
      }
    }

    &__selector-esp,
    &__selector-eng {
      color: $font-color--dark;
      text-decoration: none;
      height: 50%;
    }
  }

  &__utilities-themes {
    overflow: hidden;
    width: 60px;
    height: 30px;
    border-radius: 20px;
   cursor: pointer;

    &[data-color="light"] {
      background-color: $font-color--light-theme;
    }
    &[data-color="dark"] {
      background-color: $font-color--dark-theme;
    }
  }

  &__sun-icon {
    width: 50px;
    height: 50px;
    scale: 0.9;
    transform: translateX(-25px) translateY(4px);
  }

  &__moon-icon {
    width: 50px;
    height: 50px;
    scale: 0.7;
    transform: scaleX(-1) translateX(-30px) translateY(-10px);
  }

  &__language-icon {
    width: 50px;
    height: 50px;
    scale: 1.2;
  }

  &__chevron {
    width: 50px;
    height: 50px;
    scale: 1;
  }

  &__message-icon {
    width: 30px;
    height: 30px;
    padding-right: 20px;
    scale: 1;
  }
}
</style>
