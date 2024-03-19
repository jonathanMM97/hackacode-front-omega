<template>
  <form class="hk-contact-form" @submit.prevent="validateForm">
    <div class="hk-contact-form__fields">
      <FieldForm class="hk-contact-form__field" id="'name'" :messageLabel="$t('contact-us.form-1')" :model-value="state.name" :error="test" messageError="'Must be at least 2 characters'" :placeholder="$t('contact-us.placeholder-1')" @onChange="changeName" />
      <FieldForm class="hk-contact-form__field" id="'email'" :messageLabel="$t('contact-us.form-2')" :model-value="state.email" :error="test" messageError="'Invalid email'" :placeholder="$t('contact-us.placeholder-2')" @onChange="changeEmail" />
      <FieldForm class="hk-contact-form__field" id="'text'" :messageLabel="$t('contact-us.form-3')" :model-value="state.message" :error="test" messageError="'Must be at least 10 characters'" :placeholder="$t('contact-us.placeholder-3')" @onChange="changeMessage" />
    </div>
    <button class="hk-contact-form__button" type="submit">Submit</button>
  </form>
</template>

<script setup lang="ts">
import { object, string } from "yup";

const test = ref(false);
const schema = object({
  name: string().min(2, 'Must be at least 2 characters'),
  email: string().email('Invalid email').min(2, 'Must be at least 2 characters'),
  message: string().min(10, 'Must be at least 10 characters')
})

const state = reactive({
  name: "",
  email: "",
  message: ""
})
const validateForm = async () => {
  try {
    await schema.validate(state, { abortEarly: false });
  } catch (error) {
    test.value = true;
    const messages = error.errors;
    console.log(messages)
    console.log(schema.fields.email.tests[1].OPTIONS.message)
  }
}

const changeName = (value: string) => {
  state.name = value;
}
const changeEmail = (value: string) => {
  state.email = value;
}
const changeMessage = (value: string) => {
  state.message = value;
}
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