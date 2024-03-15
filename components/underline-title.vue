<template>
  <div class="hk-underline">
    <h2 :data-color="store.getTheme">
      <slot></slot>
      <div class="hk-underline__rectangle" :data-color="color"></div>
    </h2>
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

defineProps({
  color: {
    type: String,
    require: true,
  },
});

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-underline {
  display: block;
  font-family: $font-main;
  width: fit-content;
  height: fit-content;

  h2 {
    font-size: $font-size--large;

    &[data-color="light"] {
      color: $font-color--dark;
    }
    &[data-color="dark"] {
      color: $font-color--light;
    }
  }

  &__rectangle {
    width: 100%;
    overflow: hidden;
    height: rem(20px);
    border-radius: rem(20px);
    margin-top: rem(-30px);

    &[data-color="blue"] {
      background-color: rgba($font-color--blue, 0.5);
    }
    &[data-color="yellow"] {
      background-color: rgba($font-color--yellow, 0.5);
    }
    &[data-color="pink"] {
      background-color: rgba($font-color--pink, 0.8);
    }
  }
}
</style>
