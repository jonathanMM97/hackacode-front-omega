<template>
  <header class="hk-header">
    <div class="hk-layout">
      <img class="hk-layout__logo-icon" src="@/public/media/logo.svg" alt="logo icon" />

      <div class="hk-layout__content-text">
        <NuxtLink>About us</NuxtLink>
        <NuxtLink>Customers</NuxtLink>
      </div>

      <div class="hk-layout__utilities">

        <div class="hk-layout__utilities-language">
          <img class="hk-layout__language-icon" src="@/public/media/language-icon.svg" alt="language icon" />
          <p>Eng</p>
          <img class="hk-layout__chevron" src="@/public/media/chevron.svg" alt="chevron icon" />
        </div>

        <div class="hk-layout__utilities-themes" >
          <img class="hk-layout__sun-icon" src="@/public/media/sun-icon.svg" alt="sun icon" />
        </div>

        <NuxtLink>Log in</NuxtLink>
        <img class="hk-layout__message-icon" src="@/public/media/message-icon.svg" alt="message icon" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
.hk-header {
  position: sticky;
  top: 0;
  padding-right: rem(20px);
  padding-left: rem(20px);
  background-color: $font-color--light;
}

.hk-layout {
  display: flex;
  font-family: $font-main;
  justify-content: space-between;
  align-items: center;

  &__logo-icon {
    width: 150px;
  }

  &__content-text {
    display: flex;
    font-family: $font-main;
    font-size: $font-size--small;
    width: 200px;
    justify-content: space-between;
  }

  &__utilities,
  &__utilities-language{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__utilities {
    width: 400px;
  }

  &__utilities-language {
    width: 70px;

    p{
      font-weight: $font-weight--bold;
    }
  }

  &__utilities-themes {
    overflow: hidden;
    width: 60px;
    height: 30px;
    border-radius: 20px;
    background-color: $font-color--light-theme;
  }

  &__sun-icon {
    transform: translate(-10px, 5px);
  }

  &__chevron {
    scale: 0.9;
  }
}
</style>
<script setup lang="ts">
</script>