<template>
  <header>
    <div class="header-content">
      <img class="header-content__logo" src="./assets/logo-header.svg" />

      <div class="header-content__pages">
        <NuxtLink> {{ $t('about-us') }} </NuxtLink>
        <NuxtLink> {{ $t('customers') }} </NuxtLink>
      </div>

      <div class="header-content__functionalities">
        <div class="header-content__functionalities-lenguage">{{ $t('lenguage') }}</div>
        <div class="header-content__functionalities-theme">image</div>
        <div class="header-content__functionalities-login">{{ $t('log-in') }}</div>
        <div class="header-content__functionalities-message">M</div>
      </div>
    </div>
  </header>
  <main>
  Hello world
  </main>
</template>

<style lang="scss">

.header-content {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rem(2px) rem(1px) rgba($bg-color-dark, 0.3);

  &__logo{
    width: 150px;
    height: auto;
  }

  &__pages {
    font-family: $font-family;
    display: flex;
    align-items: center;
    gap: 50px;
  }

  &__functionalities {
    font-family: $font-family;
    display: flex;
    align-items: center;
    margin-right: 10px;
    gap: 10px;
  }
}
</style>
