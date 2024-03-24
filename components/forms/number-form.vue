<template>
  <div class="hk-field-form">
    <LabelForm id="">{{ messageLabel }}</LabelForm>
    <input type="number" id="tentacles" :placeholder="placeholder" name="tentacles" min="1" max="100"  @change="handleChange($event)" />
  </div>
</template>

<script setup lang="ts">

const props = defineProps({
  messageLabel: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    required: true,
  },
});

const emits = defineEmits(["onChange"]);

const handleChange = (event: Event) => {
  const inputElement = event.target as HTMLInputElement;
    const numberChoice = inputElement.value;
    emits('onChange', numberChoice);
}
</script>