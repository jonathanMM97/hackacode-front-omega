<template>
  <div class="hk-select-language__container" v-on:click="changeLanguage">
    <Language class="hk-language-icon"></Language>
    <p>{{ $t('language') }}</p>
    <Chevron class="hk-chevron-icon"></Chevron>
  </div>
  <div v-if="showSelector" class="hk-select-language__selector" :data-color="store.getTheme">
    <NuxtLink
      :class="[
        'hk-select-language__selector-eng',
        { 'hk-selector-bold': $t('language') === 'Eng' }
      ]"
      :to="switchLocalePath('en')"
      v-on:click="selectLanguage('eng')"
      ><p>Eng</p></NuxtLink
    >
    <NuxtLink
      :class="[
        'hk-select-language__selector-esp',
        { 'hk-selector-bold': $t('language') === 'Esp' }
      ]"
      :to="switchLocalePath('es')"
      v-on:click="selectLanguage('esp')"
      ><p>Esp</p></NuxtLink
    >
  </div>
</template>

<script lang="ts" setup>
import Language from '@/public/media/language-icon.svg'
import Chevron from '@/public/media/chevron.svg'

const store = useHackacodeStore()
const i18n = useI18n()
const currentlanguage = i18n.locale.value
const lang = ref(currentlanguage)
const showSelector = ref(false)
const switchLocalePath = useSwitchLocalePath()
const selectLanguage = (language: string): void => {
  lang.value = language
  changeLanguage()
}
const changeLanguage = (): void => {
  showSelector.value = !showSelector.value
}
</script>

<style lang="scss">
.hk-select-language {

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
    &[data-color='light'] {
      background-color: $font-color--light;
      p {
        color: $font-color--dark;
      }
    }
    &[data-color='dark'] {
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
  
  &__container {
    display: flex;
    width: 70px;
    font-weight: $font-weight--bold;
    cursor: pointer;
    justify-content: space-between;
    gap: 10px;
  }
}

.hk-selector-bold {
  font-weight: $font-weight--bold;
}

.hk-language-icon {
  width: 50px;
  height: 50px;
  scale: 1.2;
}

.hk-chevron-icon {
  width: 50px;
  height: 50px;
  scale: 1;
}
</style>
