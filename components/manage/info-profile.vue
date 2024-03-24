<template>
  <div class="hk-profile">
    <img class="hk-profile__img" src="@/public/media/foto-perfil.png" />
    <h4>{{ store.getNameUser }} {{ store.getLastName }}</h4>
    <p>{{ $t("manage.message-1") }}<br /><br />{{ $t("manage.message-2") }}</p>
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
</script>

<style lang="scss">
.hk-profile {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(-100px);

  &__img {
    width: 300px;
  }

  h4 {
    font-size: $font-size--medium;
  }

  p {
    font-size: $font-size--medium;
    width: 25rem;
    text-align: center;
  }
}
</style>
