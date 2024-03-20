<template>
  <div class="hk-show-all">
    <div class="hk-show-all__icon" v-on:click="store.setOption('plane')">
      <Plane />
      <img class="hk-show-all__img" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" v-on:click="store.setOption('bed')">
      <Bed />
      <img class="hk-show-all__img" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" v-on:click="store.setOption('train')">
      <Train />
      <img class="hk-show-all__img" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" v-on:click="store.setOption('car')">
      <Car />
      <img class="hk-show-all__img" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" v-on:click="store.setOption('group')">
      <Group />
      <img class="hk-show-all__img" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" v-on:click="store.setOption('ticket')">
      <Ticket />
      <img class="hk-show-all__img" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" v-on:click="store.setOption('user')">
      <User />
      <img class="hk-show-all__img" src="@/public/media/icon-active.png" />
    </div>
    <div class="hk-show-all__icon" v-on:click="store.setOption('bus')">
      <Bus />
      <img class="hk-show-all__img" src="@/public/media/icon-active.png" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ViewAll from "@/public/media/icon-all.svg";
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

  &__icon {
    display: flex;
    cursor: pointer;
    justify-content: center;
    align-items: center;
    scale: 4;
    width: 60px;
    height: 40px;
    border-radius: rem(10px);
    box-shadow: 5px 5px 5px rgba($font-color--dark, 0.2);
  }

  &__img {
    position: absolute;
    top: 0.1rem;
    right: 0;
    scale: 0.3;
  }
}
</style>
