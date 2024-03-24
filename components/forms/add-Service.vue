<template>
  <form class="hk-form-dashboards" @submit.prevent="validateForm" :data-color="store.getTheme">
    <div class="hk-form-dashboards__fields">
      <FieldForm
        class="hk-form-dashboards__field"
        id="'text'"
        :messageLabel="$t('dashboard.description-title')"
        :model-value="state.description"
        :error="test"
        messageError="'Must be at least 10 characters'"
        :placeholder="store.getService?.description.length === 0 ? $t('dashboard.description-placeholder') : store.getService?.description"
        @onChange="changeName"
      />
      <FieldForm
        class="hk-form-dashboards__field"
        id="'text'"
        :messageLabel="$t('dashboard.destination-title')"
        :model-value="state.destination"
        :error="test"
        messageError="'Must be at least 2 characters'"
        :placeholder="store.getService?.destination.length === 0 ? $t('dashboard.destination-placeholder') : store.getService?.destination"
        @onChange="changeEmail"
      />
      <DataForm :message-label="$t('dashboard.date-title')" :model-value="state.date" @onChange="changeDate" :placeholder="store.getService?.serviceDate.length === 0 ? '2024-03-2024' : store.getService?.serviceDateserviceDate" />
      <NumberForm :message-label="$t('dashboard.cost-title')" :model-value="state.cost" @onChange="changeCost" :placeholder="store.getService?.cost === 0 ? 1 : store.getService?.cost" />
      <NumberForm :message-label="$t('dashboard.amount-title')" :model-value="state.amount" @onChange="changeAmount" :placeholder="store.getService?.amount === 0 ? 1 : store.getService?.amount" />
      <SelectForm :message-label="$t('dashboard.available-title')" :model-value="state.available" @onChange="changeAvailable" />
      <button class="hk-form-dashboards__button" type="submit">
        <ButtonBlue>Submit</ButtonBlue>
      </button>
    </div>
  </form>
  <Loading v-show="isLoading"></Loading>
</template>

<script setup lang="ts">
import axios from "axios";
import { object, string } from "yup";
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();
const isLoading = ref(false);

const test = ref(false);
const schema = object({
  description: string().min(2, "Must be at least 2 characters"),
  destination: string().min(2, "Must be at least 2 characters"),
  message: string().min(10, "Must be at least 10 characters"),
});

const state = reactive({
  description: "",
  destination: "",
  date: "",
  cost: 0,
  amount: 0,
  available: true
});
const validateForm = async () => {
  isLoading.value = true;
  if (store.getOperation !== 'cancel') {
    await axios.post('http://vps-3991861-x.dattaweb.com:8080/api/service/create', {"amountServ": state.amount, "typeService": (store.getOption as String).toUpperCase(), "description": state.description, "destination": state.destination, "serviceDate": state.date, "cost": state.cost, "active": state.available}, {
        headers: {
          Authorization: 'Bearer ' + store.getToken
        }
      })
    } else {
      if (state.description === "") {
        state.description = store.getService.description
      }
      if (state.destination === "") {
        state.destination = store.getService.destination
      }
      if (state.date === "") {
        state.date = store.getService.serviceDate
      }
      if (state.cost === 0) {
        state.cost = store.getService.cost
      }
      if (state.amount === 0) {
        state.amount = store.getService.amountServ
      }
    await axios.put('http://vps-3991861-x.dattaweb.com:8080/api/service/edit', {"amountServ": state.amount, "typeService": (store.getOption as String).toUpperCase(), "description": state.description, "destination": state.destination, "serviceDate": state.date, "cost": state.cost, "active": state.available}, {
        headers: {
          Authorization: 'Bearer ' + store.getToken
        }
      })

  }
    store.setOperation('search')
  isLoading.value = false
};

const changeName = (value: string) => {
  state.description = value;
};
const changeEmail = (value: string) => {
  state.destination = value;
};
const changeDate = (value: string) => {
  state.date = value;
};
const changeCost = (value: string) => {
  state.cost = parseInt(value);
};
const changeAmount = (value: string) => {
  state.amount = parseInt(value);
};
const changeAvailable = (value: string) => {
  state.available = value;
};
</script>

<style lang="scss">
.hk-form-dashboards {

  &[data-color="light"] {
    color: $font-color--dark;
  }
  &[data-color="dark"] {
    color: $font-color--light;
  }
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

  &__fields {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6rem;
    padding-left: 5rem;
    padding-right: 5rem;
    padding-top: 5rem;
    padding-bottom: 3rem;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}

</style>