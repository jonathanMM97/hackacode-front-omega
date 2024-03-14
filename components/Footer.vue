<template>
  <footer class="hk-footer">
    <Logo class="hk-footer__logo" />
    <PagesSelector class="hk-footer__pages" />
    <div class="hk-footer__profiles">
      <img
        class="hk-footer__profiles-img"
        src="@/public/media/foto-perfil.png"
        alt="Seba img"
      />
      <img
        class="hk-footer__profiles-img"
        src="@/public/media/foto-perfil.png"
        alt="Seba img"
      />
      <img
        class="hk-footer__profiles-img"
        src="@/public/media/foto-perfil.png"
        alt="Seba img"
      />
    </div>

    <div class="hk-footer__links">
      <a class="hk-footer__links-icon">
        <Twitter />
        <Linkedin />
      </a>
      <a class="hk-footer__links-icon">
        <Twitter />
        <Linkedin />
      </a>
      <a class="hk-footer__links-icon">
        <Twitter />
        <Linkedin />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Logo from "@/public/media/logo-footer.svg";
import Twitter from "@/public/media/twitter.svg";
import Linkedin from "@/public/media/linkedin.svg";
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

  &__pages {
    margin-top: -2rem;
  }

  &__profiles {
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    gap: 40px;
  }

  &__profiles-img {
    width: 50px;
  }

  &__links {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 3rem;
    gap: 10px;
  }

  &__links-icon {
    width: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
}
</style>
