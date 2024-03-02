<template>
  <header>
    <div class="header-content">
      <img class="header-content__logo" src="./assets/logo-header.svg" alt="logo icon" />

      <div class="header-content__pages">
        <NuxtLink> {{ $t('about-us') }} </NuxtLink>
        <NuxtLink> {{ $t('customers') }} </NuxtLink>
      </div>

      <div class="header-content__functionalities">
        <div class="header-content__functionalities-lenguage">
          <img class="header-content__functionalities--icon" src="./assets/language-icon.svg" alt="language icon">
          <p>{{ $t('lenguage') }}</p>
          <img class="header-cont__functionalities--chevron" src="./assets/chevron.svg" alt="chevron icon">
        </div>
        <div class="header-content__functionalities-theme">
          <img class="header-content__functionalities-theme--icon" src="./assets/sun-icon.svg" alt="sun icon">
        </div>
        <div class="header-content__functionalities-login">{{ $t('log-in') }}</div>
        <div class="header-content__functionalities-message">
          <img class="header-content__functionalities-message--icon" src="./assets/message-icon.svg" alt="message icon" >
        </div>
      </div>
    </div>
  </header>
  <main>
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
    width: rem(150px);
    height: auto;
  }

  &__pages {
    font-family: $font-family;
    display: flex;
    align-items: center;
    gap: rem(50px);
  }

  &__functionalities {
    font-family: $font-family;
    display: flex;
    align-items: center;
    margin-right: rem(10px);
    gap: rem(30px);
  }

  &__functionalities-lenguage {
    display: flex;
    font-weight: $font-weight--semibold;
    gap: rem(5px);
  }

  &__functionalities-theme {
    display: flex;
    width: rem(80px);
    height: rem(40px);
    overflow: hidden;
    background-color: $theme-light;
    border-radius: rem(20px);

    &--icon {
      margin-left: rem(-12px);
      margin-top: rem(5px);
      margin-bottom: rem(-19px);
    }
  }

  &__functionalities-message {
    display: flex;
    margin-right: rem(30px);
  }
}
</style>
