<template>
  <footer class="hk-footer">
    <Logo class="hk-footer__logo" />
  </footer>
</template>

<script setup lang="ts">
import Logo from "@/public/media/logo-footer.svg";
</script>

<style lang="scss">
  .hk-footer {
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: $font-color--light-green;

    &__logo {
      width: rem(340px);
      height: rem(170px);
      transform: translateY(rem(-40px));
    }
  }
</style>