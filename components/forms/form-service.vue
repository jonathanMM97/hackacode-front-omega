<template>
  <div class="hk-form-service">
    <div v-if="operation === 'none'" class="hk-form-services__select">
      <div class="hk-form-services__select-op" v-on:click="getOperation('add')" data-img="add">
        <div class="hk-form-services__select-text">
          <h2>{{ $t('customer-' + store.getOption + ".add") }}</h2>
          <h2 v-if="false">{{ $t('service-' + store.getOption + ".add") }}</h2>
        </div>
      </div>
      <div class="hk-form-services__select-op" v-on:click="getOperation('search')" data-img="search">
        <div class="hk-form-services__select-text">
          <h2>{{ $t('customer-' + store.getOption + ".search") }}</h2>
          <h2 v-if="false">{{ $t('service-' + store.getOption + ".search") }}</h2>
        </div>
      </div>
      <div class="hk-form-services__select-op" v-on:click="getOperation('cancel')" data-img="cancel">
        <div class="hk-form-services__select-text">
          <h2>{{ $t('customer-' + store.getOption + ".cancel") }}</h2>
          <h2 v-if="false">{{ $t('service-' + store.getOption + ".cancel") }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
const operation = ref('none')

const getOperation = (value) => {
  operation.value = value
}
</script>

<style lang="scss">
.hk-form-services {

  &__select {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(33.33%, 1fr));
  }

  &__select-op {
      width: 30rem;
      height: 44rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      &[data-img="add"] {
        background: url('/media/add_serv.png');
        background-size: cover; /* Para cubrir todo el contenedor */
        background-position: center;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
      }
      &[data-img="search"] {
        background: url('/media/search_serv.png');
        background-size: cover; /* Para cubrir todo el contenedor */
        background-position: center;
      }
      &[data-img="cancel"] {
        background: url('/media/cancel_serv.png');
        background-size: cover; /* Para cubrir todo el contenedor */
        background-position: center;
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
      }
  }
  &__select-text {
    padding-left: 3rem;
    padding-right: 3rem;
    text-align: center;
    h2 {
      display: inline;
      font-size: $font-size--large;
      color: $font-color--light;
      background-color: rgba($font-color--dark, 0.3);
    }
  }
}

</style>