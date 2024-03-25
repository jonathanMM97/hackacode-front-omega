<template>
  <div class="hk-field-form">
    <LabelForm :id="id">{{ messageLabel }}</LabelForm>
    <input
      :type="id"
      :id="id"
      :placeholder="placeholder"
      v-model="value"
      @change="$emit('onChange', value)"
      :data-color="store.getTheme"
    />
    <p v-if="error">{{ messageError }}</p>
  </div>
</template>

<script setup lang="ts">
import { useHackacodeStore } from "~/stores/Hackacode";

const store = useHackacodeStore();

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  messageLabel: {
    type: String,
    required: true,
  },
  modelValue: {
    type: String,
    required: true,
  },
  error: {
    type: Boolean,
    required: true,
  },
  messageError: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});
defineEmits(["onChange"]);

const value = ref(props.modelValue);
</script>

<style lang="scss">
.hk-field-form {
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: rem(20px);

  input{
  width: 300px;
  padding: 10px 20px;
  border-bottom: 1px solid $font-color--light;
  border-top: none;
  border-left: none;
  border-right: none;
  font-size: 15px;
  
  &[data-color="light"] {
    border-color: $font-color--light;
    background: $font-color--light;
    border-bottom: 1px solid $font-color--dark;
  }
  &[data-color="dark"] {
    border-color: $font-color--dark;
    background: $font-color--dark;
    border-bottom: 1px solid $font-color--light;
  }
}

input:focus{
  outline: none;
}

input::-webkit-input-placeholder {
    padding-left: 5px;
    font-size: 15px;
    color: #3c3c3c;
}

input:-moz-placeholder { /* Firefox 18- */
    padding-left: 5px;
    font-size: 15px;
    color: #3c3c3c;
}

input::-moz-placeholder {  /* Firefox 19+ */
    padding-left: 5px;
    font-size: 15px;
    color: #3c3c3c;
}

input:-ms-input-placeholder {
    padding-left: 5px;
    font-size: 15px;
    color: #3c3c3c;
}

  &__text {
  width: 100%;
  border: none;
  padding: 5px;
  outline: none;
  outline-width: 0;
  background: transparent;
  background-color: transparent; /* Agregar esta línea */
}
}
</style>