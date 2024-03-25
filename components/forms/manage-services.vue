<template>
  <div v-if="store.getOperation === 'add' && choose" class="hk-manage-customer">
    <p>Elige el cliente</p>
    <div
      class="hk-manage-services__results"
      v-on:click="chooseUser(service)"
      :data-color="store.getTheme"
      :data-hover="store.getOperation"
      v-for="service in customerPreview"
    >
      <img
        class="hk-manage-services__img"
        :src="'/media/foto-perfil.png'"
        alt="airport"
      />
      <p>Id: {{ service.id }}</p>
      <div class="hk-manage-services__results-main-info">
        <p>Name: {{ service.name }} {{ service.lastName }}</p>
      </div>
      <div class="hk-manage-services__results-schedule">
        <img
          class="hk-manage-services__schedule"
          src="@/public/media/schedule.png"
          alt="schedule"
        />
      </div>
      <img
        v-if="service.active"
        class="hk-manage-services__available"
        src="@/public/media/icon-active.png"
        alt="available"
      />
      <img
        v-else
        class="hk-manage-services__available"
        src="@/public/media/icon-desactive.png"
        alt="available"
      />
      <img
        v-if="store.getOperation == 'cancel'"
        class="hk-manage-services__edit"
        src="@/public/media/edit.png"
        alt="available"
      />
    </div>
  </div>
  <div v-if="!showEdit" class="hk-manage-services" :data-color="store.getTheme">
    <input type="text" placeholder="Search.." />
    <div v-if="allServices.length === 0" class="hk-manage-services__no-results">
      <img
        class="hk-manage-services__img"
        src="@/public/media/no_results.png"
        alt="no results"
      />
      <h3>Lo sentimos, no hay resultados para este servicio</h3>
    </div>
    <div
      v-else
      class="hk-manage-services__results"
      v-on:click="editResult(service)"
      :data-color="store.getTheme"
      :data-hover="store.getOperation"
      v-for="service in allServices"
    >
      <img
        v-if="store.getOption !== 'user'"
        class="hk-manage-services__img"
        :src="'/media/' + store.getOption + '.png'"
        alt="airport"
      />
      <div v-if="store.getOption !== 'user'" class="hk-manage-services__results-main-info">
        <p>Description: {{ service.description }}</p>
        <p>Destination: {{ service.destination }}</p>
      </div>
      <p v-else>Id: {{ service.id }}</p>
      <div v-if="store.getOption === 'user'" class="hk-manage-services__results-main-info">
        <p>Name: {{ service.name }} {{ service.lastName }}</p>
      </div>
      <p v-if="store.getOption !== 'user'">Cost: $ {{ service.cost }}</p>
      <div class="hk-manage-services__results-schedule">
        <img
          class="hk-manage-services__schedule"
          src="@/public/media/schedule.png"
          alt="schedule"
        />
        <p v-if="store.getOption !== 'user'">Schedule: {{ service.serviceDate }}</p>
      </div>
      <img
        v-if="service.active"
        class="hk-manage-services__available"
        src="@/public/media/icon-active.png"
        alt="available"
      />
      <img
        v-else
        class="hk-manage-services__available"
        src="@/public/media/icon-desactive.png"
        alt="available"
      />
      <img
        v-if="store.getOperation == 'cancel'"
        class="hk-manage-services__edit"
        src="@/public/media/edit.png"
        alt="available"
      />
    </div>
  </div>

  <AddService v-if="showEdit && store.getCurrentPage !== 'client'" />
  <AddCustomer v-if="showEdit && store.getCurrentPage === 'client'" />
</template>

<script setup lang="ts">
import axios from "axios";
import { useHackacodeStore } from "~/stores/Hackacode";

const choose = ref(true)
const store = useHackacodeStore();
const showEdit = ref(false);
let res = null;

console.log(store.getCurrentPage, store.getOperation)
console.log(store.getCurrentPage === "client" && store.getOperation === "user")

const preview = await axios.get(
    "http://vps-3991861-x.dattaweb.com:8080/api/client/getAll", // No hay datos para enviar en el cuerpo de la solicitud POST
    {
      headers: {
        Authorization: "Bearer " + store.getToken,
      },
    }
  );

const customerPreview = preview.data;

if (store.getCurrentPage === "client" && store.getOption === "user") {
  res = await axios.get(
    "http://vps-3991861-x.dattaweb.com:8080/api/client/getAll", // No hay datos para enviar en el cuerpo de la solicitud POST
    {
      headers: {
        Authorization: "Bearer " + store.getToken,
      },
    }
  );
  console.log(res)
} else {
  res = await axios.get(
    "http://vps-3991861-x.dattaweb.com:8080/api/service/getAll",
    {
      headers: {
        Authorization: "Bearer " + store.getToken,
      },
    }
  );
}


const allServices = [];

res.data.forEach((element: any) => {
  if (element.typeService === (store.getOption as String).toUpperCase()) {
    allServices.push(element);
  }
});

if (store.getOption === 'user') {
  res.data.forEach((element: any) => {
    allServices.push(element);
  });
}

console.log(store.getOption)

const editResult = (service) => {
  if (store.getOperation === "cancel") {
    showEdit.value = true;
    store.setIdService(service);
  } else if(store.getOperation === 'add') {
    const array = store.getShop
    console.log('array', [array, service])
    store.setShop(array !== null ? [array, service] : service);
    console.log(service)
  }
};

const chooseUser = (service) => {
  store.setShowShoppingCart(true);
  store.setCustomer(service);
  choose.value = false;
}
</script>

<style lang="scss">
.hk-manage-customer {
  width: 40rem;
  height: 40rem;
  background-color: white;
  position: absolute;
  left: 25%;
  bottom: 20%;
  top: 5%;
  overflow: auto;
  border-radius: 20px;
}
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
    cursor: default;

    &[data-color="light"] {
      border-bottom: 2px solid rgba($font-color--dark, 0.2);
    }
    &[data-color="dark"] {
      border-bottom: 2px solid rgba($font-color--light, 0.2);
    }
  }

  &__results:hover[data-hover="cancel"],
  &__results:hover[data-hover="add"] {
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
