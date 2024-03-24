<template>
  <div class="error-page">
    <PageHeader />
    <div class="error-page__content">
      <div class="error-page__background">
        <img src="@/public/media/404.jpg" alt="404" />
      </div>
      <h1 class="page-title">
        {{
          is404
            ? "sorry, it looks like we've entered a black hole"
            : `sorry, there was an error ${error.statusCode}`
        }}
      </h1>
      <NuxtLink class="error-page__text" :to="redirectPage">I would like to go home <LinkArrow class="error-page__text-icon" /></NuxtLink>
    </div>
    <PageFooter />
  </div>
</template>

<script setup>
import LinkArrow from '@/public/media/chevron.svg?component';
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
const i18n = useI18n();

const props = defineProps(['error']);

const is404 = ref(props.error.statusCode === 404);

const isLogin = store.getShowUserLogin ? '/manage' : '/';
const redirectPage = i18n.locale.value === 'es' ? isLogin + i18n.locale.value : isLogin;
</script>

<style scoped lang="scss">
.error-page {
  &__text {
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    cursor: pointer;
  }
  &__text-icon {
    scale: 0.3;
    transform: rotate(-90deg);
  }
  &__content {
    padding-top: rem(195px);
    h1 {
      font-weight: $font-weight--bold;
      line-height: 1.22;
      text-align: center;
      color: $font-color--dark;
      width: 80%;
      max-width: rem(1000px);
      margin: 0 auto rem(75px);
    }
    a {
      margin-top: rem(50px);
      margin-bottom: rem(150px);
      font-size: $font-size--tiny;
      font-weight: $font-weight--bold;
      letter-spacing: 0.37px;
      color: #2e2e2e;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        height: 2.8rem;
        transition: padding 0.3 ease;
      }
    }
  }
  &__background {
    width: 90%;
    height: 40vh;
    display: flex;
    justify-content: center;
    margin: rem(-60px) auto 0;
    img {
      object-fit: contain;
      width: 100%;
    }
  }
  @media screen and (min-width: 768px) {
    &__background {
      height: 50vh;
      margin: rem(-80px) auto 1rem;
    }
  }
  @media screen and (min-width: $breakpoint__small-desktop--min) {
    &__content {
      padding-top: 20vw;
    }
  }
  @media screen and (min-width: 1920px) {
    .header {
      margin-top: rem(70px);
      &--fixed {
        margin-top: 0;
      }
    }
    &__content {
      padding-top: 16vw;
      h1 {
        width: 70%;
      }
      a {
        margin-bottom: rem(250px);
      }
    }
  }
}
</style>