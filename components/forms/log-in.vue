<template>
  <form class="hk-contact-form" @submit.prevent="validateForm">
    <div class="hk-contact-form__fields">
      <FieldForm
        class="hk-contact-form__field"
        id="'email'"
        :messageLabel="$t('register.form-1')"
        :model-value="state.email"
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
const state = reactive({
  pass: "",
  email: "",
});
const validateForm = async () => {
  // to do....
};

const changePass = (value: string) => {
  state.pass = value;
};
const changeEmail = (value: string) => {
  state.email = value;
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
