<template>
  <main class="hk-about" :data-color="store.getTheme">
    <UnderlineTitle class="hk-about__title" :color="'blue'">
      {{ $t("about.title") }}
    </UnderlineTitle>
    <div class="hk-about__content" :data-color="store.getTheme">
      <img
        class="hk-about__content-image"
        src="@/public/media/cover-page.png"
        alt="Cover page image"
      />
      <h3>{{ $t("about.content-section.title") }}</h3>

      <div class="hk-about__content-story" :data-color="store.getTheme">
        <p>{{ $t("about.content-section.paragraph-1") }}</p>
        <p>{{ $t("about.content-section.paragraph-2") }}</p>
        <p>{{ $t("about.content-section.paragraph-3") }}</p>
        <p>{{ $t("about.content-section.paragraph-4") }}</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-about {
  display: flex;
  flex-direction: column;
  font-family: $font-main;
  height: fit-content;
  padding-left: 10rem;
  padding-right: 10rem;

  &[data-color="light"] {
    background-color: $font-color--light;
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    background-color: $font-color--dark;
    color: font-color--light;
  }

  &__title {
    margin-top: rem(30px);
    padding-left: 10rem;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &[data-color="light"] {
      color: $font-color--dark;
    }
    &[data-color="dark"] {
      color: $font-color--light;
    }

    h3 {
      font-size: $font-size--big;
      font-weight: $font-weight--bold;
    }
  }

  &__content-story {
    padding-left: 10rem;
    padding-right: 10rem;
    padding-bottom: 10rem;

    &[data-color="light"] {
      color: $font-color--dark;
    }
    &[data-color="dark"] {
      color: $font-color--light;
    }

    p {
      font-size: $font-size--medium;
    }
  }
}
</style>