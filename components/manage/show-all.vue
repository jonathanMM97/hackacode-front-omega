<template>
  <div class="hk-show-all" :data-color="store.getTheme">
    <div class="hk-show-all__icon" :data-color="store.getTheme" v-on:click="store.setOption('fly')">
      <Plane />
      <img class="hk-show-all__img" :data-color="store.getTheme" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" :data-color="store.getTheme" v-on:click="store.setOption('hotel')">
      <Bed />
      <img class="hk-show-all__img" :data-color="store.getTheme" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" :data-color="store.getTheme" v-on:click="store.setOption('train')">
      <Train />
      <img class="hk-show-all__img" :data-color="store.getTheme" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" :data-color="store.getTheme" v-on:click="store.setOption('car')">
      <Car />
      <img class="hk-show-all__img" :data-color="store.getTheme" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" :data-color="store.getTheme" v-on:click="store.setOption('excursion')">
      <Group />
      <img class="hk-show-all__img" :data-color="store.getTheme" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" :data-color="store.getTheme" v-on:click="store.setOption('event')">
      <Ticket />
      <img class="hk-show-all__img" :data-color="store.getTheme" src="@/public/media/icon-active.png" />
    </div>
    <div v-if="store.getCurrentPage !== 'services'" :data-color="store.getTheme" class="hk-show-all__icon" v-on:click="store.setOption('user')">
      <User />
      <img class="hk-show-all__img" :data-color="store.getTheme" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" :data-color="store.getTheme" v-on:click="store.setOption('bus')">
      <Bus />
      <img class="hk-show-all__img" :data-color="store.getTheme" src="@/public/media/icon-active.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Plane from "@/public/media/icon-plane.svg";
import Bed from "@/public/media/icon-bed.svg";
import Train from "@/public/media/icon-train.svg";
import Car from "@/public/media/icon-car.svg";
import Group from "@/public/media/icon-group.svg";
import Ticket from "@/public/media/icon-ticket.svg";
import User from "@/public/media/icon-user.svg";
import Bus from "@/public/media/icon-bus.svg";
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-show-all {
  display: grid;
  grid-template-columns: repeat(3, 0.2fr);
  justify-content: center;
  align-items: center;
  padding-top: 8rem;
  padding-left: 8rem;
  gap: 10rem;

  &[data-color="light"] {
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    color: $font-color--light;
  }

  &__icon {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    scale: 4;
    width: 60px;
    height: 40px;
    border-radius: rem(10px);
    &[data-color="light"] {
      border: 1px solid rgba($font-color--dark, 0.3);
    }
    &[data-color="dark"] {
      border: 1px solid rgba($font-color--light, 0.3);
      
    }
  }

  &__img {
    position: absolute;
    top: 0.1rem;
    right: 0;
    scale: 0.3;
  }
}
</style>