<template>
  <div v-if="!showEdit" class="hk-manage-services" :data-color="store.getTheme">
    <input type="text" placeholder="Search..">
    <div v-if="allServices.length === 0" class="hk-manage-services__no-results">
      <img class="hk-manage-services__img" src="@/public/media/no_results.png" alt="no results" />
      <h3>Lo sentimos, no hay resultados para este servicio</h3>
    </div>
    <div v-else class="hk-manage-services__results" v-on:click="editResult" :data-color="store.getTheme" :data-hover="store.getOperation" v-for="service in allServices">
        <img class="hk-manage-services__img" :src="'/media/' + store.getOption + '.png'" alt="airport" />
        <div class="hk-manage-services__results-main-info">
          <p>Description: {{ service.description }}</p>
          <p>Destination: {{ service.destination }}</p>
        </div>
        <p>Cost: $ {{ service.cost }}</p>
        <div class="hk-manage-services__results-schedule">
          <img class="hk-manage-services__schedule" src="@/public/media/schedule.png" alt="schedule" />
          <p>Schedule: {{ service.serviceDate }}</p>
        </div>
        <img v-if="service.active" class="hk-manage-services__available" src="@/public/media/icon-active.png" alt="available" />
        <img v-else class="hk-manage-services__available" src="@/public/media/icon-desactive.png" alt="available" />
        <img v-if="store.getOperation == 'cancel'" class="hk-manage-services__edit" src="@/public/media/edit.png" alt="available" />
    </div>
  </div>

  <AddService v-else />
</template>

<script setup lang="ts">
import axios from 'axios'
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
const showEdit = ref(false)

const res = await axios.get('http://vps-3991861-x.dattaweb.com:8080/api/service/getAll', {
  headers: {
  Authorization: 'Bearer ' + store.getToken
  }
})

const allServices = [];

res.data.forEach((element: any) => {
  if (element.typeService === (store.getOption as String).toUpperCase()) {
    allServices.push(element)
  }
})

const editResult = () => {
  showEdit.value = true;
}

console.log(allServices)
</script>

<style lang="scss">
.hk-manage-services {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &[data-color="light"] {
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    color: $font-color--light;
  }

  &__no-results {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__results {
    width: 90%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5rem;
    padding-bottom: 1rem;
    cursor:default;
    
    &[data-color="light"] {
      border-bottom: 2px solid rgba($font-color--dark, 0.2);
    }
    &[data-color="dark"] {
      border-bottom: 2px solid rgba($font-color--light, 0.2);
    }
  }

  &__results:hover[data-hover="cancel"] {
    background-color: rgba($font-color--blue, 0.3);
  }
  &__results-main-info,
  &__results-schedule {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__available {
    width: rem(15px);
  }
  &__edit {
    width: rem(40px);
  }

  &__img {
    width: 100px;
  }
  &__schedule {
    width: 50px;
  }
}
</style>