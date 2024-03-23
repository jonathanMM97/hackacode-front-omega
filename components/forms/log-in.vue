<template>
  <form class="hk-contact-form" @submit.prevent="validateForm">
    <div class="hk-contact-form__fields">
      <FieldForm
        class="hk-contact-form__field"
        id="'text'"
        :messageLabel="$t('register.form-1')"
        :model-value="state.user"
        :error="false"
        messageError="''"
        :placeholder="$t('register.placeholder-1')"
        @onChange="changeEmail"
      />
      <FieldForm
        class="hk-contact-form__field"
        id="'name'"
        :messageLabel="$t('register.form-2')"
        :model-value="state.pass"
        :error="false"
        messageError="''"
        :placeholder="$t('register.placeholder-2')"
        @onChange="changePass"
      />
    </div>
    <button class="hk-contact-form__button" type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import axios from 'axios';

const state = reactive({
  user: "",
  pass: "",
});
const validateForm = async () => {
  // to do..
  const auth = await axios.post('http://vps-3991861-x.dattaweb.com:8080/api/employee/login', {"username": state.user, "password": state.pass})
  console.log(auth);
  console.log(state);
  axios.get('http://vps-3991861-x.dattaweb.com:8080/api/client/getAll', {
    headers: {
      Authorization: 'Bearer ' + auth.data.token
    }
  })
      .then(
        res => {
          console.log(res);
        }
      ).catch(
        err => {
          console.log(err);
        }
      )
};

const changePass = (value: string) => {
  state.pass = value;
};
const changeEmail = (value: string) => {
  state.user = value;
};
</script>

<style lang="scss">
.hk-contact-form {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-top: 5rem;
  padding-left: 5rem;
  gap: rem(40px);

  &__fields {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    gap: rem(40px);
  }
  &__field {
    margin-top: 20px;
  }

  &__button {
    margin-bottom: 4rem;
  }
}
</style>
