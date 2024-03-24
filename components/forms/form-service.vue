<template>
  <div v-if="store.getOperation !== 'none'" class="hk-form-service-accessibility" v-on:click="returnBack" :data-color="store.getTheme">
    <div class="hk-form-service-accessibility__circle" :data-color="store.getTheme">
        <Chevron class="hk-form-service-accessibility__svg" />
    </div>
  </div>
  <DashboardFormOp v-if="store.getOperation !== 'add' && store.getOperation !== 'search' && store.getOperation !== 'cancel'" />
  <AddService v-if="store.getOperation === 'add' && store.getCurrentPage === 'services'" />
  <ManageServices v-if="(((store.getOperation === 'search' || store.getOperation === 'cancel') && store.getCurrentPage === 'services') || (store.getOperation !== 'none' && store.getCurrentPage === 'client'))" />
</template>

<script setup lang="ts">
import Chevron from '@/public/media/chevron.svg'
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();

const returnBack = () => {
  store.setOperation('none');
}
</script>

<style lang="scss">
.hk-form-service-accessibility {
  width: 50px;
  display: flex;
  align-items: center;
  gap: 1rem;
  border-radius: 2px black;
  padding-left: 2rem;
  padding-top: 2rem;
  cursor: pointer;
  
  &[data-color="light"] {
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    color: $font-color--light;
  }

  &__circle {
    width: 40px; /* Tamaño del círculo */
    height: 40px; /* Tamaño del círculo */
    border-radius: 50%; /* Hacer que el contenedor sea un círculo */
    display: flex;
    justify-content: center;
    align-items: center;

    &[data-color="light"] {
      border: 2px solid $font-color--dark;
    }
    &[data-color="dark"] {
      border: 2px solid $font-color--light;
    }
  }
  
  p {
    font-size: $font-size--medium;
  }
  
  &__svg {
    rotate: 90deg;
  }
}

</style>