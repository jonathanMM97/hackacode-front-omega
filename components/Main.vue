<template>
  <main class="hk-main" :data-color="store.getTheme">
    <section class="hk-main__section-head">
      <h2 :data-color="store.getTheme">{{ $t("main.slogan") }}</h2>
      <img
        v-if="store.getTheme === 'light'"
        class="hk-main__section-img"
        src="@/public/media/plane-light.png"
      />
      <img
        v-else
        class="hk-main__section-img"
        src="@/public/media/plane-dark.png"
      />
    </section>
    <section class="hk-main__section-footer">
      <h3>{{ $t("main.third-section.title") }}</h3>
      <p>{{ $t("main.third-section.paragraph-1") }}</p>
      <p>{{ $t("main.third-section.paragraph-2") }}</p>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-main {
  font-family: $font-main;
  &[data-color="light"] {
    background-color: $font-color--light;
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    background-color: $font-color--dark;
    color: $font-color--light;
  }

  h2 {
    position: absolute;
    font-size: $font-size--large;
    font-weight: $font-weight--bold;
    width: rem(400px);
    margin-right: rem(350px);
    margin-bottom: rem(60px);

    &[data-color="light"] {
      color: $font-color--dark;
    }
    &[data-color="dark"] {
      color: $font-color--light;
      width: 35%;
      margin-right: 0;
      margin-left: rem(20px);
      margin-bottom: rem(-260px);
    }
  }

  &__section-head {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__section-footer {
    display: flex;
    flex-direction: column;
    font-size: $font-size--big;
    justify-content: center;
    align-items: center;
    margin-bottom: 6rem;

    h3 {
      width: 53%;
      font-weight: $font-weight--bold;
      margin-top: rem(20px);
    }

    p {
      width: 53%;
      font-size: $font-size--medium;
      margin-top: 0;
    }
  }

  &__section-img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>