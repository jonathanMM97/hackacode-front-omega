<template>
  <div class="hk-sidebar">
    <div
      class="hk-sidebar__menu-icon hk-all"
      v-on:click="selectOption('all')"
      :data-color="store.getOption"
    >
      <ViewAll />
    </div>
    <div
      class="hk-sidebar__menu-icon hk-plane"
      v-on:click="selectOption('fly')"
      :data-color="store.getOption"
    >
      <Plane />
    </div>
    <div
      class="hk-sidebar__menu-icon hk-bed"
      v-on:click="selectOption('hotel')"
      :data-color="store.getOption"
    >
      <Bed />
    </div>
    <div
      class="hk-sidebar__menu-icon hk-train"
      v-on:click="selectOption('train')"
      :data-color="store.getOption"
    >
      <Train />
    </div>
    <div
      class="hk-sidebar__menu-icon hk-car"
      v-on:click="selectOption('car')"
      :data-color="store.getOption"
    >
      <Car />
    </div>
    <div
      class="hk-sidebar__menu-icon hk-group"
      v-on:click="selectOption('excursion')"
      :data-color="store.getOption"
    >
      <Group />
    </div>
    <div
      class="hk-sidebar__menu-icon hk-ticket"
      v-on:click="selectOption('event')"
      :data-color="store.getOption"
    >
      <Ticket />
    </div>
    <div
    class="hk-sidebar__menu-icon hk-bus"
    v-on:click="selectOption('bus')"
    :data-color="store.getOption"
    >
    <Bus />
  </div>
  <div
    v-if="store.getCurrentPage !== 'services'"
    class="hk-sidebar__menu-icon hk-user"
    v-on:click="selectOption('user')"
    :data-color="store.getOption"
  >
    <User />
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

const selectOption = (value) => {
  store.setOption(value)
  store.setOperation('none')
  console.log((store.getOption as String).toUpperCase())
}
</script>

<style lang="scss">
.hk-sidebar {
  display: flex;
  flex-direction: column;
  gap: rem(30px);

  &__menu-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: rem(40px);
    height: rem(40px);
    scale: 1.7;
    border-radius: rem(20px);
    cursor: pointer;
  }
}

.hk-all[data-color="all"] {
  background-color: $font-color--blue;
}
.hk-plane[data-color="fly"] {
  background-color: $font-color--blue;
}
.hk-bed[data-color="hotel"] {
  background-color: $font-color--blue;
}
.hk-train[data-color="train"] {
  background-color: $font-color--blue;
}
.hk-car[data-color="car"] {
  background-color: $font-color--blue;
}
.hk-group[data-color="excursion"] {
  background-color: $font-color--blue;
}
.hk-ticket[data-color="event"] {
  background-color: $font-color--blue;
}
.hk-user[data-color="user"] {
  background-color: $font-color--blue;
}
.hk-bus[data-color="bus"] {
  background-color: $font-color--blue;
}
</style>