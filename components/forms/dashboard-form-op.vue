<template>
  <div class="hk-form-dashboard">
    <div class="hk-form-dashboards__select">
      <div class="hk-form-dashboards__select-op" v-on:click="getOperation('add')" data-img="add">
        <div class="hk-form-dashboards__select-text">
          <h2 v-if="store.getCurrentPage === 'client'">{{ $t('customer-' + store.getOption + ".add") }}</h2>
          <h2 v-if="store.getCurrentPage === 'services'">{{ $t('service-' + store.getOption + ".add") }}</h2>
        </div>
      </div>
      <div class="hk-form-dashboards__select-op" v-on:click="getOperation('search')" data-img="search">
        <div class="hk-form-dashboards__select-text">
          <h2 v-if="store.getCurrentPage === 'client'">{{ $t('customer-' + store.getOption + ".search") }}</h2>
          <h2 v-if="store.getCurrentPage === 'services'">{{ $t('service-' + store.getOption + ".search") }}</h2>
        </div>
      </div>
      <div class="hk-form-dashboards__select-op" v-on:click="getOperation('cancel')" data-img="cancel">
        <div class="hk-form-dashboards__select-text">
          <h2 v-if="store.getCurrentPage === 'client'">{{ $t('customer-' + store.getOption + ".cancel") }}</h2>
          <h2 v-if="store.getCurrentPage === 'services'">{{ $t('service-' + store.getOption + ".cancel") }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();

const getOperation = (value) => {
  console.log('hola')
  store.setOperation(value)
}
</script>