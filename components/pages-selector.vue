<template>
  <div class="hk-selector__content-text">
    <NuxtLink
      v-if="!store.getShowUserLogin"
      class="hk-selector__content-about"
      :data-color="store.getTheme"
      :data-page="store.getCurrentPage"
      :to="
        (i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') +
        '/about-us'
      "
      ><p>{{ $t("about-us") }}</p></NuxtLink
    >
    <NuxtLink
      v-if="!store.getShowUserLogin"
      class="hk-selector__content-customer"
      :data-color="store.getTheme"
      :data-page="store.getCurrentPage"
      :to="
        (i18n.locale.value === 'es' ? '/' + i18n.locale.value : '') +
        '/customers'
      "
      ><p>{{ $t("customers") }}</p></NuxtLink
    >

    <div v-if="store.getShowUserLogin" class="hk-selector__content-main" v-on:click="showSideBar('main')" :data-page="store.getCurrentPage">
      <p>{{ $t('dashboard-page') }}</p>
    </div>
    <div v-if="store.getShowUserLogin" class="hk-selector__content-client" v-on:click="showSideBar('client')" :data-page="store.getCurrentPage">
      <p>{{ $t('customers') }}</p>
    </div>
    <div v-if="store.getShowUserLogin" class="hk-selector__content-services" v-on:click="showSideBar('services')" :data-page="store.getCurrentPage">
      <p>{{ $t('services') }}</p>
    </div>
    <div v-if="store.getShowUserLogin" class="hk-selector__content-sales" v-on:click="showSideBar('sales')" :data-page="store.getCurrentPage">
      <p>{{ $t('sales') }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
const i18n = useI18n();

const showSideBar = (page: string): void => {
  if (page !== 'main') {
    store.setShowSidebar(true)
  } else {
    store.setShowSidebar(false)
    store.setOption('main')
  }
  if (page === 'sales') {
    console.log(page)
    store.setShowSidebar(false)
    store.setOption('sales')
  }
  store.setCurrentPage(page)
  store.setOption('main')
  store.setOperation('none')
}
</script>

<style lang="scss">
.hk-selector {
  font-family: $font-main;
  &__content-text {
    display: flex;
    font-family: $font-main;
    font-size: $font-size--small;
    font-weight: 100;
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

  &__content-about[data-page="about"] {
    font-weight: $font-weight--bold;
    color: $font-color--blue
  }
  &__content-customer[data-page="customer"] {
    font-weight: $font-weight--bold;
    color: $font-color--blue
  }
  &__content-client[data-page="client"] {
    font-weight: $font-weight--bold;
    color: $font-color--blue
  }
  &__content-services[data-page="services"] {
    font-weight: $font-weight--bold;
    color: $font-color--blue
  }
  &__content-main[data-page="main"] {
    font-weight: $font-weight--bold;
    color: $font-color--blue
  }
  &__content-sales[data-page="sales"] {
    font-weight: $font-weight--bold;
    color: $font-color--blue
  }

  &__content-client,
  &__content-services,
  &__content-main,
  &__content-sales {
    cursor: pointer;
  }
}
</style>