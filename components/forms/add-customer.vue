<template>
  <form class="hk-form-dashboards" @submit.prevent="validateForm" :data-color="store.getTheme">
    <div class="hk-form-dashboards__fields">
      <FieldForm
        class="hk-form-dashboards__field"
        id="'text'"
        :messageLabel="$t('dashboard.name-title')"
        :model-value="state.name"
        :error="test"
        messageError="'Must be at least 10 characters'"
        :placeholder="store.getService?.name?.length === 0 ? $t('dashboard.name-placeholder') : store.getService?.name"
        @onChange="changeName"
      />
      <FieldForm
        class="hk-form-dashboards__field"
        id="'text'"
        :messageLabel="$t('dashboard.lastName-title')"
        :model-value="state.lastName"
        :error="test"
        messageError="'Must be at least 2 characters'"
        :placeholder="store.getService?.lastName?.length === 0 ? $t('dashboard.lastName-placeholder') : store.getService?.lastName"
        @onChange="changeLastName"
      />
      <FieldForm
        class="hk-form-dashboards__field"
        id="'text'"
        :messageLabel="$t('dashboard.dni-title')"
        :model-value="state.dni"
        :error="test"
        messageError="'Must be at least 2 characters'"
        :placeholder="store.getService?.dni?.length === 0 ? $t('dashboard.dni-placeholder') : store.getService?.dni"
        @onChange="changeDni"
      />
      <FieldForm
        class="hk-form-dashboards__field"
        id="'text'"
        :messageLabel="$t('dashboard.nacionality-title')"
        :model-value="state.nacionality"
        :error="test"
        messageError="'Must be at least 2 characters'"
        :placeholder="store.getService?.nacionality?.length === 0 ? $t('dashboard.nacionality-placeholder') : store.getService?.nacionality"
        @onChange="changeNacionality"
      />
      <FieldForm
        class="hk-form-dashboards__field"
        id="'text'"
        :messageLabel="$t('dashboard.phoneNumber-title')"
        :model-value="state.phoneNumber"
        :error="test"
        messageError="'Must be at least 2 characters'"
        :placeholder="store.getService?.phoneNumber?.length === 0 ? $t('dashboard.phoneNumber-placeholder') : store.getService?.phoneNumber"
        @onChange="changePhoneNumber"
      />
      <FieldForm
        class="hk-form-dashboards__field"
        id="'text'"
        :messageLabel="$t('dashboard.email-title')"
        :model-value="state.email"
        :error="test"
        messageError="'Must be at least 2 characters'"
        :placeholder="store.getService?.email?.length === 0 ? $t('dashboard.email-placeholder') : store.getService?.email"
        @onChange="changeEmail"
      />
      <DataForm :message-label="$t('dashboard.birthday-title')" :model-value="state.birthday" @onChange="changeBirthday" :placeholder="store.getService?.birthday?.length === 0 ? '2023-06-1999' : store.getService?.birthday" />
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

const state = reactive({
  name: "",
  lastName: "",
  dni: "",
  birthday: "",
  nacionality: "",
  phoneNumber: "",
  email: "",
  available: true
});
const validateForm = async () => {
  isLoading.value = true;
  if (store.getOperation !== 'cancel') {
    await axios.post('http://vps-3991861-x.dattaweb.com:8080/api/client/create', {"name": state.name, "lastName": state.lastName, "dni": state.dni, "birthDay": state.birthday, "nationality": state.nacionality, "phoneNumber": state.phoneNumber, "email": state.email, "flag": state.available}, {
        headers: {
          Authorization: 'Bearer ' + store.getToken
        }
      })
    } else {
      if (state.name.length === 0) {
        state.name = store.getService.description
      }
      if (state.lastName.length === 0) {
        state.lastName = store.getService.destination
      }
      if (state.dni.length === 0) {
        state.dni = store.getService.serviceDate
      }
      if (state.birthday.length === 0) {
        state.birthday = store.getService.description
      }
      if (state.nacionality.length === 0) {
        state.nacionality = store.getService.destination
      }
      if (state.phoneNumber.length === 0) {
        state.phoneNumber = store.getService.serviceDate
      }
      if (state.email.length === 0) {
        state.email = store.getService.description
      }
     const res = await axios.put('http://vps-3991861-x.dattaweb.com:8080/api/client/modify', {"id": store.getService.id, "name": state.name, "lastName": state.lastName, "dni": state.dni, "birthDay": state.birthday, "nationality": state.nacionality, "phoneNumber": state.phoneNumber, "email": state.email, "flag": state.available}, {
        headers: {
          Authorization: 'Bearer ' + store.getToken
        }
      })
      console.log(res)

  }
  store.setOperation('none');
  store.setOption('main')
  isLoading.value = false
};

const changeName = (value: string) => {
  state.name = value;
};
const changeLastName = (value: string) => {
  state.lastName = value;
};
const changeDni = (value: string) => {
  state.dni = value;
};
const changeBirthday = (value: string) => {
  state.birthday = value;
};
const changeNacionality = (value: string) => {
  state.nacionality = value;
};
const changePhoneNumber = (value: string) => {
  state.phoneNumber = value;
};
const changeEmail = (value: string) => {
  state.email = value;
};
const changeAvailable = (value: boolean) => {
  state.available = value;
};

onMounted(() => {
  console.log('aiaidsefbsjkbfgjksbf')
})
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