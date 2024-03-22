<template>
  <div class="hk-field-form">
    <LabelForm :id="id">{{ messageLabel }}</LabelForm>
    <input
      class="hk-field-form__text"
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

  &__text {
    width: 100%;
    border: none;
    padding: 5px;
    outline: none;
    background: transparent;

    &[data-color="light"] {
      border-bottom: 1px solid $font-color--dark;
    }
    &[data-color="dark"] {
      border-bottom: 1px solid $font-color--light;
    }
  }
}
</style>